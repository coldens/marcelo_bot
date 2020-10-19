require('dotenv').config();

// Dependencias
const SlackBot = require('slackbots');

const { isValidCommand, commandExists, execute } = require('./commands');

// crear bot
const bot = new SlackBot({
  // Add a bot https://my.slack.com/services/new/bot and put the token
  token: process.env.BOT_TOKEN,
  name: process.env.BOT_NAME,
});

// Message Handler
bot.on('message', async (data) => {
  if (data.type !== 'message' || data.subtype === 'bot_message') {
    return;
  }

  const response = (message) => {
    return bot.postMessage(data.channel, message, { as_user: true });
  };
  const text = data.text;
  const parts = text.split(' ');

  if (!commandExists(parts[0])) {
    return;
  }

  if (!isValidCommand(parts)) {
    return await response(
      'Error: el formato de mensaje debe ser: !<comando> <argumento>',
    );
  }

  const command = parts[0];
  const arguments = parts.slice(1);

  return await execute(command, arguments, response);
});
