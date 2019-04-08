const Discord = require("discord.js");

exports.run = (client, message, args) => {

let pessoa = message.mentions.users.first() || client.users.get(args[0]) || message.author;
let avatar = pessoa.displayAvatarURL
if (avatar.endsWith(".gif")) {
  avatar = `${pessoa.displayAvatarURL}?size=2048`
}
message.channel.send({embed: {
  title: `📷 | Avatar de: **${pessoa.tag}**!`,
  description: `[Link Direto](${avatar})`,
  image: {url: `${avatar}`},
  color: 0X660066
}})};