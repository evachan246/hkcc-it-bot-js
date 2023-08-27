import TelegramBot from "node-telegram-bot-api";
import { promises as fsPromises } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../../../public/pin.txt');

async function callPin(bot: TelegramBot, chatId: string, messageId: string) : Promise<void> {
    const contents = await fsPromises.readFile(filePath, 'utf-8');
    bot.sendMessage(chatId, contents, { reply_to_message_id: messageId });
}

export {
    callPin
};