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
    .addField('<:Seta:544565700170350603> | Nome do Servidor', guild.name, true)
    .addField('<:iduserinfo:553660521983770658> | ID do Servidor', guild.id, true)
    .addField('<:IconServerOwner:553592966762201108> | Dono do Servidor', `<@${message.guild.owner.id}>`, true)
    .addField('<:Data:553592338652332044> | Criado em', moment(message.guild.createdAt).format(`LL`), true)
    .addField("<:Data:553592338652332044> | Entrei Aqui em", moment(message.member.joinedAt).format(`LL`), false)
    .addField('<:regiao:553592816199270410> | Região do Servidor', guild.region.toUpperCase(), true)
    .addField('<:MoreUsers:553593545991389186> | Membros', message.guild.members.filter(member => !member.user.bot).size, false)
    .addField('🤖 | Bots', message.guild.members.filter(member => member.user.bot).size, true)
    .addField('<:Verificado:553592475315601430> | Nível de Verificação', veriToText(guild.verificationLevel), true)
    .addField('🎤 | Canais de Voz', textChannels, false)
    .addField('🎹 | Canais de Texto', voiceChannels, true)
    .addField('<:MoreUsers:553593545991389186> | Quantidade de Membros', message.guild.memberCount, true)
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