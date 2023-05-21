const fetch = require("node-fetch");
const axios = require("axios");

const cat = ( {bot, chatId, messageId} ) => {

    axios.get("https://api.thecatapi.com/v1/images/search")
        .then((res) => {
            bot.sendPhoto(chatId, res.data[0]['url'])
        })
        .catch((error) => { console.error(error) })
        .finally(() => { })
}

module.exports = {
    cat,
}