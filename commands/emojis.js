const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const emojis = message.guild.emojis.map(e => e.toString()).join(" ");

  let embed = new Discord.RichEmbed()
  .setColor(["RANDOM"])
  .setDescription(emojis)
  .setFooter(" Diamond#7554 © | Direitos Reservados.", client.user.displayAvatarURL)
  .setTimestamp();
  message.channel.send(embed);
}
