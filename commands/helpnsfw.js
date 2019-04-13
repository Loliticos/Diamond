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
    .addField('``diamond.``anal', 'Envia foto/gifs de sexo anal!')
    .addField('``diamond.``gifporn', "Envia um gifs pornô!")
    .addField('``diamond.``ass', 'Envia foto/gifs de bundas!')
    .addField('``diamond.``holo', 'Envia foto/gifs de "hentais" com roupas! XD')
    .addField('``diamond.``hentai', 'Envia foto/gifs de desenhos pornográficos!' )
    .addField('``diamond``4k', 'Envia foto/gifs de mulheres nuas/sexo aleatóriamente!')
    .addField('``diamond.``pussy', 'Envia foto/gifs de vaginas (bucetas)!')
    .setFooter(" Diamond#7554 © | Direitos Reservados.", client.user.displayAvatarURL)
    .setTimestamp();
    
    return message.channel.send(embed);
};
