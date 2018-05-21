const Discord = require('discord.js');
const client = new Discord.Client();

// 'client.on('message')' commands are triggered when the
// specified message is read in a text channel that the bot is in.

client.on('message', message => {
  if (message.content === '!oliver') {
    message.reply('My name is Oliver Queen. For five years, I was stranded on an island with only one goal-- Survive. Now I will fulfill my father\'s dying wish' +
                  '-- to use the list of names he left me and bring down those who are poisoning my city. To do this, I must become someone else. I must become something else.');
  }
  
});

client.login("NDQ2NTU0NDIwODYwNDIwMTA2.Dd64Rg.k1l20TGMj03tipXiL2BaJSjkDME");


