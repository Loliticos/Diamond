const Discord = require('discord.js');
const {
  version
} = require('discord.js');


module.exports.run = async (client, message, args) => {
  if (args == 'help') {
    let embed = new Discord.RichEmbed()
      .setTitle(`${module.exports.help.name} Informação do Comando.`)
      .setDescription(`${module.exports.help.description}`)
      .addField('Forma de Usar:', `diamond.${module.exports.help.usage}`, true)
      .setColor("RANDOM")
    message.channel.send(embed);
    return
  };

  function time(milliseconds) {
    let day, hour, minute, seconds;

    seconds = Math.floor(milliseconds / 1000);
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;

    let string = `\`${day}\` %day%, \`${hour}\` %hour%, \`${minute}\` %minute% e \`${seconds}\` %seconds%!`;

    string = string.replace("%day%", "Dia" + (day === 1 ? "" : "s"));
    string = string.replace("%hour%", "Hora" + (hour === 1 ? "" : "s"));
    string = string.replace("%minute%", "Minuto" + (minute === 1 ? "" : "s"));
    string = string.replace("%seconds%", "Segundo" + (seconds === 1 ? "" : "s"));

    return string;
  };

  let icon = client.user.displayAvatarURL;
  let embed = new Discord.RichEmbed()

    .setTitle(`Informações de ${client.user.username}!`)
    .setColor("RANDOM")
    .setThumbnail(icon)
    .addField('<:IconServerOwner:553592966762201108> | Criador do Bot', 'yRustFocker#6420', true)
    .addField('<:IconServerOwner:553592966762201108> | Nome do Bot', client.user.username, true)
    .addField('<:membros:544232236036128768> | Total de Servidores (Guilds)', client.guilds.size, true)
    .addField('<:MoreUsers:553593545991389186> | Total de Usuários (Membros)', client.users.size, true)
    .addField('<:javascript:553605917715988490> | Versão do Discord.JS', `v${version}`, true)
    .addField('<:nodejs:553606096284287026> | Versão do Node', `${process.version}`, true)
    .addField('<:memory_slot:553606269806706701> | Memória Usada', `${(((process.memoryUsage().heapUsed)/1024)/1024).toFixed(0)}MBs de RAM`, true)
    .addField('<:uptime:544233623499440156> | Uptime', `${time(client.uptime)}`)
    .setFooter(" Diamond#7554 © | Direitos Reservados.", client.user.displayAvatarURL)
    .setTimestamp();

  return message.channel.send(embed);
};

module.exports.help = {
  name: 'botinfo',
  description: 'Mostra Informações Sobre Mim',
  usage: 'botinfo'
};