const Discord = require("discord.js")
const moment = require('moment')
moment.locale("pt-Br")

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

    let nomedocanal = message.channel.name
    let iddocanal = message.channel.id
    let posicao = message.channel.calculatedPosition
    let datadecriacao = message.channel.createdAt
    let manejavel = message.channel.manageable
    let nsfw = message.channel.nsfw
    let topico = message.channel.topic
    let topicContent = (message.channel.topic) ? message.channel.topic : "Nenhum"


    let embed = new Discord.RichEmbed()
    .setTitle(`Informações do Canal ${message.channel.name}`)
    .setColor("RANDOM")
    .addField('<:info:544233078407823411> | Nome do Canal', message.channel.name, true)
    .addField('<:iduserinfo:553660521983770658> | Id do Canal', message.channel.id, true)
    .addField('🚩 | Posição do Canal', message.channel.calculatedPosition, true)
    .addField('<:Data:553592338652332044> | Data de Criação do Canal', moment(message.channel.createdAt).format(`LL`), true)
    .addField('❓ | Manejável?', `${message.channel.manageable?"Sim":"Não"}`)
    .addField('🔞 |Canal NSFW', `${message.channel.nsfw?"Sim":"Não"}`)
    .addField('🛑 | Tópico do Canal', topicContent, true)
    .setFooter(" Diamond#7554 © | Direitos Reservados.", client.user.displayAvatarURL)
    .setTimestamp();


  return message.channel.send(embed);
    
};
