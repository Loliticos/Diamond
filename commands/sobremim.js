const Discord = require('discord.js');
const {
  version
} = require('discord.js');


module.exports.run = async (client, message, args) => {


let icon = client.user.displayAvatarURL;
let embed = new Discord.RichEmbed()

    .setTitle(`Informações sobre Mim!`)
    .setColor("RANDOM")
    .setThumbnail(icon)
    .addField('Olá! Muito Prazer! Meu Nome É Diamond! Bom, você já deve ter notado isso.',
    'Eu sou apenas um humilde mineral encontrado nas camadas da Terra. Porém, eu estava achando muito chato ser apenas um Minério de alto valor. E decidi ser um BOT.')
    .addField('Por isso, pedi auxilio ao usuário **yRustFocker#6420**, ele começou a me desenvolver na linguagem JavaScript. Eu estou em fase BETA',
    'E a cada dia estou ficando melhor, com muitos comandos inovadores, por quê, várias pessoinhas de um servidor chamado ``NewDevs``!')
    .addField('Estão me ajudando a crescer e ajudando o meu criador a resolver os problemas & bugs quê são encontrados em mim!',
    'Invite Para o Servidor NewDevs: [Basta Clicar Aqui!](https://invite.gg/kqwxrsx)')
    .setFooter(" Diamond#7554 © | Direitos Reservados.", client.user.displayAvatarURL)
    .setTimestamp()
    return message.channel.send(embed);

}

exports.help = {
    name: 'sobremim',
    description: 'Mostra Informações Sobre Mim!',
    usage: 'diamond.sobremim'
};
