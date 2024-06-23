const TelegramBot = require('node-telegram-bot-api');

const token = '7433548125:AAHwKPEMthL6NQdvg55hdV23Qj47mMwjAnI'

const bot = new TelegramBot(token, {polling: true});

bot.setMyCommands([
    {
        command: '/start',
        description: 'Botni ishga tushurish'
    },
    {
        command:'/courses',
        description:"Bepul video darsliklarni ko'rish"
    }
])

bot.on('message', async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
    const channel = 'https://t.me/Olimov_blogs'

    if(text === "/start"){
        return bot.sendMessage(
            chatId,
            `Assalomu aleykum hurmatli ${msg.from.first_name} sizni o'quv kursimizda ko'rib turganimizdan juda hursandmiz😊botdan to'liq foydalanish uchun ${channel} obuna bo'ling `
        )
     }
    if(text === '/courses'){
        return bot.sendMessage(
            chatId,
            "Hello"
        )
    }
   
  });
