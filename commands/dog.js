const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (client, message, args) => {
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/woof`);
    
    var embed = new Discord.RichEmbed()
    .setImage(body.url)
    .addField('<a:cachorrin:543808946964791301> | Cachorrinhu! Au Au!')
    .setColor('RANDOM')
    .setTimestamp(new Date())
    message.channel.send(embed);
    
}

module.exports.help = {name: "dog"}