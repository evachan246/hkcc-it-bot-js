import TelegramBot from "node-telegram-bot-api";
import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dir = path.join(__dirname, '../../../public/source');

async function getSource(bot: TelegramBot, chatId: string): Promise<void> {
    let files = fs.readdirSync(dir)
    let inline_keyboard = []
    for ( const name of files ) {
        const nameSplit = name.split('.');
        inline_keyboard.push([{text: nameSplit[0], callback_data: nameSplit[0]}])
    }
    let options = {
        reply_markup: {
            inline_keyboard: inline_keyboard
        }
    }
    bot.sendMessage(chatId, 'Source', options);
}


async function getSourceButton(bot: TelegramBot, chatId: string, messageId: string, filename: string): Promise<void> {
    const message = 'Selected option: ' + filename
    bot.editMessageText(message, {chat_id: chatId, message_id: messageId})
    const files = fs.readdirSync(dir)
    const fileMap = new Map(files.map( name => {
        const nameSplit = name.split('.')
        return [nameSplit[0], name]
    }))

    if ( fileMap.has(filename) ) {
        const filePath = path.join(dir, fileMap.get(filename))
        const stream = await fs.createReadStream(filePath)
        bot.sendDocument(chatId, stream)
    }
}

export {
    getSource,
    getSourceButton
}
