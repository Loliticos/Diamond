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
    .setTitle('Comandos de Configuração! Forma de Utilizar: **diamond.**``comando`` ')
    .setColor('RANDOM')
    .addField('``diamond.``setwelcome', 'Seta um canal de bem-vindo! (Manutenção).')
    .addField('``diamond.``setsaida', 'Seta um canal de saída! (Manutenção).')
    .addField('``diamond.``setprefix', 'Seta um novo prefixo para mim! (Em breve).')
    .addField('``diamond.``autorole', 'Seta um cargo para ser dado quando um membro entrar!')
    .addField('``diamond.``setlogs', 'Seta um Canal Para Mostrar Mensagens Apagadas/Editadas (Em breve).' )
    .setFooter(" Diamond#7554 © | Direitos Reservados.", client.user.displayAvatarURL)
    .setTimestamp();


    return message.channel.send(embed);

};