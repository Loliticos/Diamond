const Discord = require('discord.js');
const figlet = require('figlet');
exports.run = (client, message, args) => {
let ASCIIMESSAGE = args.slice(0).join(' ');
if(ASCIIMESSAGE.length < 0) return message.channel.send(":x: | **Não foi possível escrever a mensagem para o ASCII!")
figlet(ASCIIMESSAGE, function(err, data) {
    if (err) {
        message.channel.send(":X: | Oops! Algo deu errado!")
        console.dir(err);
        return;
    }
    message.channel.send("```" + data + "```")
});
};

exports.help = {
  name: 'ascii',
  description: 'Text to ASCI',
  usage: 'ascii <message>'
};