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
    .setTitle('Comandos Utilitários! Forma de Utilizar: **diamond.**``comando`` ')
    .setColor('RANDOM')
    .addField('``diamond.``botinfo', 'Verifica minhas informações!')
    .addField('``diamond.``serverinfo', 'Verifica as informações do servidor!')
    .addField('``diamond.``userinfo', 'Verifica as informações de um usuário!')
    .addField('``diamond.``roleinfo', 'Verifica as informações de um cargo!')
    .addField('``diamond.``perms', 'Verifica as permissões de um usuário!')
    .addField('``diamond.``canalinfo', 'Verifica as informações do canal atual!')
    .addField('``diamond.``convidarbot', 'Pega o link para convidar um bot para o servidor!')
    .addField('``diamond.``uptime', 'Verifica meu uptime!')
    .addField('``diamond.``host', 'Verifica minha host e informações!')
    .addField('``diamond.``say', 'Faz eu repetir o que você fala!')
    .addField('``diamond.``avatar', 'Mostra o avatar de um usuário!')
    .addField('``diamond.``servidores', 'Verifica em quais servidores eu estou!')
    .addField('``diamond.``novidadades', 'Verifica as Novidades!')
    .addField('``diamond.``ping', 'Verifica minha latência!')
    .addField('``diamond.sugerir``', 'Sugere algo para ser implementado em mim!')
    .setFooter(" Diamond#7554 © | Direitos Reservados.", client.user.displayAvatarURL)
    .setTimestamp();
    
    return message.channel.send(embed);
};