const Discord = require('discord.js');
const client = new Discord.Client();
module.exports.run = (client, message, args) => {

    let embed = new Discord.RichEmbed()
    .setTitle('Novidades em Breve!')
    .setColor('RANDOM')
    .addField('Sistemas quê serão adicionados:', 'Sistema de MultiLinguagens')
    .addField('Sistema de Alterar Prefixo Via Chat', 'Sistema de Logs')
    .addField('Sistema de Setwelcome, saída, e Lista de Banimentos!', 'AutoRole')
    .setFooter(" Diamond#7554 © | Direitos Reservados.", client.user.displayAvatarURL)
    .setTimestamp();

    return message.channel.send(embed);
}

module.exports.help = {
    name: "novidades"


};