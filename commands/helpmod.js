const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (args == 'help') {
      let embed = new Discord.RichEmbed()
        .setTitle(`${module.exports.help.name} Comando de Informação`)
        .setDescription(`${module.exports.help.description}`)
        .addField('Usage', `diamond.${module.exports.help.usage}`, true)
        .setColor("RANDOM")
      message.channel.send(embed);
      return
    }

    let embed = new Discord.RichEmbed()
    .setTitle('Comandos de Moderação! Forma de Utilizar: **diamond.**``comando`` ')
    .setColor('RANDOM')
    .addField('``diamond.``ban', 'Bane um usuário!')
    .addField('``diamond.``purge', 'Limpa 2 até 100 mensagens de um canal!')
    .addField('``diamond.``kick', 'Chuta um usuário do servidor!')
    .addField('``diamond.``anunciar', 'Faz um anúncio no servidor!')
    .addField('``diamond.``voteban', 'Faz uma votação para banir um usuário!')
    .addField('``diamond.``voteban', 'Faz uma votação para kickar um usuário!')
    .setFooter(" Diamond#7554 © | Direitos Reservados.", client.user.displayAvatarURL)
    .setTimestamp();


    return message.channel.send(embed);

};