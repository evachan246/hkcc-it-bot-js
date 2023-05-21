const fs = require('fs')
const path = require('path');

const dir = path.join(__dirname, '../../public/source');

const source = async ({bot, chatId}) => {
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

const sourceButton = async ({bot, chatId, messageId, filename}) => {
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


    /*    query.edit_message_text(text="Selected option: {}".format(query.data))
        path = "https://raw.githubusercontent.com/timothylam1228/HKCC-IT_BOT/master/public/source/"
        file = str(query.data)
        pdf = ".pdf"
        jpg = ".jpg"
        context.bot.sendDocument(
            chat_id=query.message.chat.id, document=path+file+pdf)
        if(file == "Maths Diagnostic Test"):
        context.bot.sendPhoto(chat_id=query.message.chat.id,
            photo='https://raw.githubusercontent.com/timothylam1228/HKCC-IT_BOT/master/public/source/maths_diagonositc_test_changed.jpg')
        context.bot.sendMessage(
            chat_id=query.message.chat.id, text=" Q7.6 has update Please be careful")*/
}

module.exports = {
    source,
    sourceButton,
}