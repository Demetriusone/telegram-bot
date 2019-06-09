const TelegramBot = require("node-telegram-bot-api")

const TOKEN = '808952735:AAGElW5r_SMHs6TPMV2y-vOBTjFLEG3nsc4'

const bot = new TelegramBot(TOKEN, { polling: true})

bot.on("message", msg => {
    bot.sendMessage(msg.chat.id, `Hello from VARASH, bot says: "Hi ${msg.from.first_name}"`)
})
