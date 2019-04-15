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
    .setTitle('Comandos de Miscelânia (Váriados)! Forma de Utilizar: **diamond.**``comando``  ')
    .setColor('RANDOM')
    .addField('``diamond.``emojis', 'Mostra os emojis do servidor!')
    .addField('``diamond.``dog', 'Envia foto de cachorros!')
    .addField('``diamond.``cat', 'Envia foto de gatos!')
    .addField('``diamond.``spotify', 'Veja o quê o seu amigo (ou você) está ouvindo no spotify!')
    .addField('``diamond.``google', 'Faz uma pesquisa no navegador Google!')
    .addField('``diamond.``mchead', 'Mostra a cabeça de um jogador de Minecraft!')
    .addField('``diamond.``mcstatus', 'Verifica os setores da Mojang!')
    .addField('``diamond.``nitro', 'Pega seu avatar e transforma em nitro! XD')
    .addField('``diamond.``ship', 'Shippa 2 usuários!')
    .addField('``diamond.``youtube', 'Pesquisa um vídeo na plataforma Youtube!')
    .addField('``diamond.``gay', 'Verifique o quanto você é gay!')
    .addField('``diamond.``ball', 'Faz uma pergunta pra mim e eu respondo!') 
    .addField('``diamond.``ascii', 'Digite em um textão!')
    .setFooter(" Diamond#7554 © | Direitos Reservados.", client.user.displayAvatarURL)
    .setTimestamp();
    
    return message.channel.send(embed);
};
