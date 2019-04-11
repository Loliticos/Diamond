const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (client, message, args) => {
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/meow`);
    
    var embed = new Discord.RichEmbed()
    .setImage(body.url)
    .setColor('RANDOM')
    .addField('<a:bongocat:544233229469876224>| Gatinhuu!!',  'Meow Meow! ')
    .setFooter(" Diamond#7554 © | Direitos Reservados.", client.user.displayAvatarURL)
    .setTimestamp(new Date())
    message.channel.send(embed);
    
}

module.exports.help = {name: "meow"}