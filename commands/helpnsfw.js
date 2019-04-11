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
    .setTitle('Comandos de Pornográfia (NSFW)! Forma de Utilizar: **diamond.**``comando`` ')
    .setColor('RANDOM')
    .addField('``diamond.``anal', 'Envia foto/gif de sexo anal!')
    .addField('``diamond.``gifporn', "Envia um gif pornô!")
    .addField('``diamond.``ass', 'Envia foto de bundas!')
    .addField('``diamond.``pussy', 'Envia foto de vaginas (bucetas)')
    .setFooter(" Diamond#7554 © | Direitos Reservados.", client.user.displayAvatarURL)
    .setTimestamp();
    
    return message.channel.send(embed);
};
