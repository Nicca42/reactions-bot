require('dotenv').config();
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const CMD_PREFIX = "$";

client.once('ready', () => {
	console.log('Ready!!!');
});

client.on('message', (message) => {
    console.log("seen message")
    // If a bot sent the message ignore it
    if (message.author.bot) return;
    console.log("not bot")
    // If the message is a command to the bot
    if (message.content.startsWith(CMD_PREFIX)) {
        // Get the command and args out of message
        const [command, ...args] = message.content
            .trim()
            .substring(CMD_PREFIX.length)
            // prevent weird formatting with spaces
            .split(/\s+/);
        console.log(command)
        console.log(args)
    }
});

client.login(process.env.DISCORD_BOT_TOKEN);