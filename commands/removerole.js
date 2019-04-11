const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("❌ | Você não tem permissão para utilizar este comando.");
    if(args[0] == "help"){
    message.reply("Forma de Utilizar: diamond.removerole <usuário> <cargo>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Não foi possível achar o usuário.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Específíque um cargo marcando ele!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Não foi possível achar este cargo.");

  if(!rMember.roles.has(gRole.id)) return message.reply(":x: Este usuário já possuí este cargo!");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`Você removeu o cargo ${gRole.name}`)
  }catch(e){
    message.channel.send(`Oops,  <@${rMember.id}>, parece que você perdeu o cargo ${gRole.name}!`)
  }
}

module.exports.help = {
  name: "removerole"
}