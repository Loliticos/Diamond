const Discord = require("discord.js");

   exports.run = (client,message,args) => {
       if(!message.member.hasPermission("ADMINISTRATOR")) {
           return message.reply('Você não possuí permissão para isto.');
       }

    let embed = new Discord.RichEmbed()

    resetClient(message.channel)
        async function resetclient(channel) {
            let embed = new Discord.RichEmbed()

            .setTimestamp()
            .setThumbnail(client.user.avatarURL)
            .setTitle('**REINICIANDO**')
            .setDescription(`:smiley: ` + "| Estou reiniciando com possíveis novidades! Aguarde!")
            .setFooter(" Diamond#7554 © | Direitos Reservados.", client.user.displayAvatarURL)
            .setTimestamp();
            message.channel.send(embed)
            .then(msg => client.destroy(true))
            .then(() => client.login('Token do Diamond'));
         }

    client.on('ready', () => {
        message.reply('Fui reiniciado com sucesso!');
    });
}
exports.help = {
    name: "reiniciar"
}
