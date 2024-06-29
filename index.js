const TelegramBot = require("node-telegram-bot-api");

// Bot tokeni
const token = "7433548125:AAHwKPEMthL6NQdvg55hdV23Qj47mMwjAnI";
const bot = new TelegramBot(token, { polling: true });


const adminId = '5248032955';
bot.on("message", async (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id
  // Foydalanuvchi tomonidan yuborilgan boshqa barcha xabarlar
  if (text) {
    bot.sendMessage(adminId, `Yangi anonim xabar:\n\n${text}`);
    bot.sendMessage(chatId, "Hurmatli  xabaringiz bot yaratuvchisiga yuborildi.");
  }
});


bot.on('callback_query', msg => {
    console.log(msg);
    const data = msg.data;
    const chatId = msg.message.chat.id;
});
