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
    .setTitle('Comandos de Econômia! Forma de Utilizar: **diamond.**``comando``  ')
    .setColor('RANDOM')
    .addField('``diamond.``coins', 'Verifique sua quantidade de coins!')
    .addField('``diamond.``daily', 'Pega seu bônus diário!')
    .addField('``diamond.``doar', 'Doe coins para algum usuário!')
    .addField('``diamond.``moneytop', 'Verifique os usuários com mais coins!')
    .addField('``diamond.``roubar', 'Tente roubar um usuário!')
    .setFooter(" Diamond#7554 © | Direitos Reservados.", client.user.displayAvatarURL)
    .setTimestamp();
    
    return message.channel.send(embed);
};
