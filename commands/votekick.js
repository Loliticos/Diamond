const Discord = require("discord.js");
    module.exports.run = async (client, message, args) => {
    const agree    = "✅";
    const disagree = "❎";


  if (message.mentions.users.size === 0){
    return message.reply("❌ " + "| Por Favor, Mencione o Membro Desejado!");
  }

  let kickmember = message.guild.member(message.mentions.users.first());
  if(!kickmember){
    message.reply("❌ " + "| Usuário inválido!!");
  }

  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")){
    return message.reply("❌ " + "| Você não tem permissão \"KICK_MEMBERS").catch(console.error);
  }

  let msg = await message.channel.send("Vote Agora Faltam 10 Segundos");
  await msg.react(agree);
  await msg.react(disagree);

  const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 10000});
  msg.delete();
  var NO_Count = reactions.get(disagree).count;
  var YES_Count = reactions.get(agree);

  if(YES_Count == undefined){
    var YES_Count = 1;
  }else{
    var YES_Count = reactions.get(agree).count;
  }

  var sumsum = new Discord.RichEmbed()
  
            .addField("Votos Encerrados:", "----------------------------------------\n" +
                                          "Total votos (Não): " + `${NO_Count-1}\n` +
                                          "Total votos (Sim): " + `${YES_Count-1}\n` +
                                          "----------------------------------------\n" +
                                          "NOTE: Votos Necessários Para Kickar (3+)\n" +
                                          "----------------------------------------", true)

            .setColor("0x#FF0000")

  await message.channel.send({embed: sumsum});
  if(YES_Count >= 4 && YES_Count > NO_Count){
    kickmember.kick().then(member => {
      message.reply(`${member.user.username} Foi Kickado Com Sucesso!`)
    })
  }else{
    message.channel.send("\n" + "Seguro..... Por Enquanto!?");
  }
}