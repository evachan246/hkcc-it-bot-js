const start = ( {bot, chatId, messageId} ) => {
    bot.sendMessage(chatId, '/source for Geting the source\n/canteen to show canteen ', { reply_to_message_id: messageId });
}

module.exports = {
    start,
}