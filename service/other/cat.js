const fetch = require("node-fetch");

const cat = ( {bot, chatId, messageId} ) => {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => response.json())
        .then((json) => {
            bot.sendPhoto(chatId, json[0]['url'])
        });
}

module.exports = {
    cat,
}