require('dotenv').config()

const TelegramBot = require('node-telegram-bot-api');
const { pin } = require('./service/basic/pin')

const token = process.env.TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

/**
 *  BOT
 */

bot.onText(/\/pin9/, async (msg, match) => {
    const { message_id: messageId } = msg;
    const chatId = msg.chat.id;
    await pin({bot, chatId, messageId});
});
