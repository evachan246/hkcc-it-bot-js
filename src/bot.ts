import TelegramBot from "node-telegram-bot-api";
import 'dotenv/config';
import * as pinService from './service/basic/pin.js';
import * as startService from './service/basic/start.js';
import * as sourceSerivce from './service/source/source.js';
import * as catService from './service/other/cat.js';

const token = process.env.TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

/**
 *  BOT
 */

bot.onText(/\/start/, async (msg, match) => {
    const { message_id: messageId } = msg;
    const chatId = msg.chat.id;
    await startService.getStart(bot, chatId, messageId);
})

bot.onText(/\/pin9/, async (msg, match) => {
    const { message_id: messageId } = msg;
    const chatId = msg.chat.id;
    await pinService.callPin(bot, chatId, messageId);
});

/**
 * Source Function
 */

bot.onText(/\/source/, async (msg, match) => {
    const { message_id: messageId } = msg;
    const chatId = msg.from.id;
    await sourceSerivce.getSource(bot, chatId);
})

bot.on('callback_query', async (msg) => {
    const name = msg.message.text
    const chatId = msg.from.id;
    const messageId = msg.message.message_id
    if (name == 'Source') {
        await sourceSerivce.getSourceButton(bot, chatId, messageId, msg.data);
    }
})


/**
 * For Fun
 */

bot.onText(/\/cat/, async (msg, match) => {
    const { message_id: messageId } = msg;
    const chatId = msg.chat.id;
    await catService.getCatPhoto(bot, chatId, messageId);
})

