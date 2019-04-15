const Discord = require('discord.js');
const moment = require("moment")
moment.locale('pt-br')


module.exports.run = async (client, message, args) => {
  if (args == 'help') {
    let embed = new Discord.RichEmbed()
      .setTitle(`${module.exports.help.name} Comando de Informação`)
      .setDescription(`${module.exports.help.description}`)
      .addField('Usage', `diamond.${module.exports.help.usage}`, true)
      .setColor("RANDOM")
    message.channel.send(embed);
    return;
  };

  let guild = message.guild;
  let icon = message.guild.iconURL;

  let createdAtRaw = guild.createdAt.toDateString();
  let createdAt = createdAtRaw.split(" ");

  let online = message.guild.members.filter(a => a.presence.status == "online").size;
  let ocupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
  let ausente = message.guild.members.filter(a => a.presence.status == "idle").size;
  let offline = message.guild.members.filter(a => a.presence.status == "offline").size;
  

  let textChannels = message.guild.channels.filter(c => c.type === 'text').size;
  let voiceChannels = message.guild.channels.filter(c => c.type === 'voice').size
  /*
  guild.channels.forEach(channel => {
    channel.type === "text" ? textChannels++ : voiceChannels++;
  });*/


  let embed = new Discord.RichEmbed()
    .setTitle(`Informações do Servidor  **${message.guild.name}** | **${message.guild.id}**`)
    .setColor("RANDOM")
    .setThumbnail(icon)
    .addField('<:Seta:544565700170350603> | Nome do Servidor', guild.name, false)
    .addField('<:iduserinfo:553660521983770658> | ID do Servidor', guild.id, false)
    .addField('<:IconServerOwner:553592966762201108> | Dono do Servidor', `<@${message.guild.owner.id}>`, false)
    .addField('<:Data:553592338652332044> | Criado em', moment(message.guild.createdAt).format(`LL`), true)
    .addField("<:Data:553592338652332044> | Entrei Aqui em", moment(message.member.joinedAt).format(`LL`), false)
    .addField('<:regiao:553592816199270410> | Região do Servidor', guild.region.toUpperCase(), false)
    .addField('🤖 | Bots', message.guild.members.filter(member => member.user.bot).size, false)
    .addField('<:Verificado:553592475315601430> | Nível de Verificação', veriToText(guild.verificationLevel), false)
    .addField(`<:MoreUsers:553593545991389186> | Membros `, `<:online:566384224391659521> | Online: ${online}\n<:idle:566383961727696907> | Ausente: ${ausente}\n <:dnd:566384298324787203>| Ocupado: ${ocupado}\n<:offline:566385242839973888> | Offline: ${offline}`, false)
    .addField('🎤 | Canais de Voz', textChannels, false)
    .addField('🎹 | Canais de Texto', voiceChannels, false)
    .addField('<:MoreUsers:553593545991389186> | Quantidade de Membros (Ao Todo)', message.guild.memberCount, false)
    .setFooter(" Diamond#7554 © | Direitos Reservados.", client.user.displayAvatarURL)
    .setTimestamp();


  return message.channel.send(embed);
}

function veriToText(lvl) {
    switch (lvl) {
        case 0:
            return "Nenhuma.";
        case 1:
            return "Email Verificado.";
        case 2:
            return "Email Verificado e Registrado no Discord 5 Minutos ou Mais.";
        case 3:
            return "Email Verificado e Registrado no Discord 10 Minutos ou Mais.";
        case 4:
            return "Telefone Verificado.";
        default:
            return "Ultra?!"
    }
}

module.exports.help = {
  name: 'serverinfo',
  description: 'Mostra Informações do Servidor Discord.',
  usage: 'serverinfo'
};