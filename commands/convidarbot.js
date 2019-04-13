const Discord = require('discord.js');


exports.run = async (client, message, args) => {
  try {

let user;

    if (message.mentions.users.first()  || client.users.get(args.join(' '))) {
      user = message.mentions.users.first() || client.users.get(args.join(' '));
    } else if(args[0]) {
        user = client.users.get(args[0]);
    }
    
    if(!user) return message.reply(`**${message.author.username}**, você deve específicar o id do bot ou mencionar ele!`)
  const embed = new Discord.RichEmbed()
  .addField(`<:botTag:553606575143518218> |  Convite do(a) bot ${user.username} :`, `[Sem Permissões](https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=0)
[Permissão Administrador](https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=8)
[Todas Permissões](https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=2146958591)`)
  .setTimestamp(new Date())
  .setFooter(" Diamond#7554 © | Direitos Reservados.", client.user.displayAvatarURL)
  .setTimestamp()
   .setThumbnail(user.avatarURL)       
    if (user.client) return message.channel.send(embed)
    message.author.send(`**${message.author.username}**,  este usuário não é um **bot**!`)

} catch (err) {
    message.channel.send(`**${message.author.username}**, isto não é um **bot**!`)
}
}