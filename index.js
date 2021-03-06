process.env.NTBA_FIX_319 = 1;

const TelegramBot = require('node-telegram-bot-api');
const TOKEN = 'BOT_TOKEN';
console.log('Bot has been started....');

const bot = new TelegramBot(TOKEN, {
     	polling: {
        interval: 3000,
	autoStart: true,
	   params: {
	       timeout: 10
	   }
	}
	});

bot.on ('message', function(msg)  {
    const chatId = msg.chat.id;

    if (msg.text === 'Mon(Odd)') {
        bot.sendPhoto(chatId, './1.jpg')
    } else if (msg.text === 'Mon(Even)') {
        bot.sendPhoto(chatId, './5.jpg')
    } else if (msg.text === 'Tue'){
        bot.sendPhoto(chatId, './2.jpg')
    } else if (msg.text === 'Wed(Odd)') {
        bot.sendPhoto(chatId, './3.jpg')
    } else if (msg.text === 'Wed(Even)') {
        bot.sendPhoto(chatId, './7.jpg')
    } else if (msg.text === 'Thu'){
        bot.sendPhoto(chatId, './4.jpg')
    }
    else {
        bot.sendMessage(chatId, 'Please choose the day of the week.', {
            reply_markup: {
                keyboard: [
                    ['Mon(Even)', 'Mon(Odd)'],
                    ['Tue'],
                    // ['Tue(Even)', 'Tue(Odd)'],
                    ['Wed(Even)', 'Wed(Odd)'],
                    ['Thu'],
                    // ['Thu(Even)', 'Thu(Odd)'],
                ]
            }
        })
    }
});
