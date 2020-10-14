const TelegramBot = require('node-telegram-bot-api');

const token = 'DEF1234ghIkl-zyx57W2v1u123ew11';

const bot = new TelegramBot(token, {polling:true});

const dialogflow = require('./dialogflow');

bot.on('message', async function( msg ) {
  const chatId = msg.chat.id;

  console.log(msg.text);

  const dfResponse = await dialogflow.sendMessage(chatId.toString(), msg.text);
  
  let textResponse = dfResponse.text;

  if (dfResponse.intent === 'programação') {
    textResponse = await youtube.searchVideoURL(
      textResponse, 
      dfResponse.fields.corpo.stringValue);
    }


  bot.sendMessage(chatId, textResponse)

});