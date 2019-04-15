const Discord = require('discord.js');
exports.run = (client, message, args) => {
let suggestion = args.slice(0).join(' ');
if(suggestion.length < 0) return message.channel.send(":X: | Você precisa escrever a sugestão!")
client.guilds.get("533007424257261590").channels.get("566378614078308382").send({embed: { color: 0xFFFFFF, title: "<:sugestao:566699350529409077> | » Sugestão!", description: suggestion, footer: { icon_url: message.author.avatarURL, text: `Sugestão feita por: ${message.author.username}#${message.author.discriminator}`}}})
message.channel.send({embed: { color: 0xFFFFFF, title: "✅ | Sucesso!", description: "<:sugestao:566698934097936384> |  Sua sugestão será revisada e iremos decidir se será aceita!"}})
}


exports.help = {
  name: 'sugerir',
  description: 'Diga uma sugestão para mim!',
  usage: 'sugerir'
};