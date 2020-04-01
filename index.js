process.env.NTBA_FIX_319 = 1;

const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '1022558790:AAE-bPjpFE8OwfuWctCOK-ukWWRnO6zyeTc';
console.log('Bot has been started....');

const bot = new TelegramBot(TOKEN, {polling: true});
// const bot = new TelegramBot(TOKEN, {
//     polling: {
//         interval: 3000,
//         autoStart: true,
//         params: {
//             timeout: 10
//         }
//     }
// });

bot.on ('message', function(msg)  {
    const chatId = msg.chat.id;

    if (msg.text === 'Mon(Odd)') {
        bot.sendPhoto(chatId, './1.jpg')
    } else if (msg.text === 'Mon(Even)') {
        bot.sendPhoto(chatId, './5.jpg')
    } else if (msg.text === 'Tue(Even)' || msg.text === 'Tue(Odd)'){
        bot.sendPhoto(chatId, './2.jpg')
    } else if (msg.text === 'Wed(Odd)') {
        bot.sendPhoto(chatId, './3.jpg')
    } else if (msg.text === 'Wed(Even)') {
        bot.sendPhoto(chatId, './7.jpg')
    } else if (msg.text === 'Thu(Even)' || msg.text === 'Thu(Odd)'){
        bot.sendPhoto(chatId, './4.jpg')
    }
    else {
        bot.sendMessage(chatId,  's',{
            reply_markup: {
                keyboard: [
                    ['Mon(Even)', 'Mon(Odd)'],
                    ['Tue(Even)', 'Tue(Odd)'],
                    ['Wed(Even)', 'Wed(Odd)'],
                    ['Thu(Even)', 'Thu(Odd)'],
                ]
            }
        })
    }
});
