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
    .setTitle('Comando de Ajuda Para Conhecer Meus Comandos! ')
    .setColor('RANDOM')
    .addField('Para Verificar os Comandos de Moderação,', 'digite **diamond.helpmod**!')
    .addField('Para Verificar os Comandos Utilitários,', 'digite **diamond.helputils**!')
    .addField('Para Verificar os Comandos de Configuração,', 'digite **diamond.helpconfig**!')
    .addField('Para Verificar os Comandos de NSFW,', 'digite **diamond.helpnsfw**!')
    .addField('Para Verificar os comandos de Econômia', 'digite **diamond.helpeconomy**!')
    .addField('Para Verificar os Comandos Miscelâneos,', 'digite **diamond.helpmisc**!')
    .setFooter(" Diamond#7554 © | Direitos Reservados.", client.user.displayAvatarURL)
    .setTimestamp();

    return message.channel.send(embed);
};
