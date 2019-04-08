const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {


message.delete();
  if (!args.join(" ")) return message.reply("Digite algo!");
  let say = args.join(' ');
  message.mentions.users.forEach((u) => say = say.replace(u.toString(),"@"+u.tag))
  message.mentions.roles.forEach((r) => say = say.replace(r.toString(),"@"+r.name))
  message.channel.send(say,{disableEveryone:true})};