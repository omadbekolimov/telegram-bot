const TelegramBot = require('node-telegram-bot-api');

const token = '7433548125:AAHwKPEMthL6NQdvg55hdV23Qj47mMwjAnI'

const bot = new TelegramBot(token, {polling: true});

bot.setMyCommands([
    {
        command: '/start',
        description: 'Botni ishga tushurish'
    },
    {
        command:'/Courses',
        description:"Bepul video darsliklarni ko'rish"
    }
])

bot.on('message', async msg => {
    console.log(msg);

    const text = msg.text;
    const chatId = msg.chat.id;

    if(text === "/start"){
        return bot.sendMessage(
            chatId,
            `Assalomu aleykum hurmatli ${msg.from.first_name} sizni o'quv kursimizda ko'rib turganimizdan juda hursandmiz 😊 `
        )
     }
   
  });
