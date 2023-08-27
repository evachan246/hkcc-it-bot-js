import TelegramBot from "node-telegram-bot-api";

async function getStart(bot: TelegramBot, chatId: string, messageId: string) : Promise<void> {
    bot.sendMessage(chatId, '/source for Geting the source\n/canteen to show canteen ', { reply_to_message_id: messageId });
}

export {
    getStart
}