require('dotenv').config()

const TelegramBot = require('node-telegram-bot-api');
const { pin } = require('./service/basic/pin')

const token = process.env.TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
