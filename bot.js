require('dotenv').config()

const TelegramBot = require('node-telegram-bot-api');
const { pin } = require('./service/basic/pin')
const { start } = require('./service/basic/start')
const { source, sourceButton } = require('./service/source/source')
const { cat } = require('./service/other/cat')

const token = process.env.TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

/**
 *  BOT
 */

bot.onText(/\/start/, async (msg, match) => {
    const { message_id: messageId } = msg;
    const chatId = msg.chat.id;
    await start({bot, chatId, messageId});
})

bot.onText(/\/pin9/, async (msg, match) => {
    const { message_id: messageId } = msg;
    const chatId = msg.chat.id;
    await pin({bot, chatId, messageId});
});

/**
 * Source Function
 */

bot.onText(/\/source/, async (msg, match) => {
    const { message_id: messageId } = msg;
    const chatId = msg.from.id;
    await source({bot, chatId});
})

bot.on('callback_query', async (msg) => {
    const name = msg.message.text
    const chatId = msg.from.id;
    const messageId = msg.message.message_id
    if (name == 'Source') {
        await sourceButton({bot, chatId, messageId, filename: msg.data})
    }
})


/**
 * For Fun
 */

bot.onText(/\/cat/, async (msg, match) => {
    const { message_id: messageId } = msg;
    const chatId = msg.chat.id;
    await cat({bot, chatId, messageId});
})

