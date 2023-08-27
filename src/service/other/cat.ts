import TelegramBot from "node-telegram-bot-api";
import axios from "axios";

async function getCatPhoto(bot: TelegramBot, chatId: string, messageId: string): Promise<void> {
    axios.get("https://api.thecatapi.com/v1/images/search")
        .then((res) => {
            bot.sendPhoto(chatId, res.data[0]['url'])
        })
        .catch((error) => { console.error(error) })
        .finally(() => { })
}

export {
    getCatPhoto
}