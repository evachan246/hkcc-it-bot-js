const { promises: fsPromises } = require('fs')
const path = require('path');
const filePath = path.join(__dirname, '../../public/pin.txt');


const pin = async ({bot, chatId, messageId}) => {
    const contents = await fsPromises.readFile(filePath, 'utf-8')
    bot.sendMessage(chatId, contents, { reply_to_message_id: messageId });
}

module.exports = {
    pin,
}