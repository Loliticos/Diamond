const Discord = require("discord.js");

exports.run = (client, message, args) => {
    message.delete().catch(O_o=>{});
let bicon = client.user.displayAvatarURL;
    let string = '';
    client.guilds.forEach(guild => {
    string += guild.name + '\n';})
    let bt = client.user.username;
    let clientembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField("🌟 | Servidores Em Quê eu Estou:", string)
        .setFooter(" Diamond#7554 © | Direitos Reservados.", client.user.displayAvatarURL)
        .setTimestamp();
    message.channel.send(clientembed);
}

module.exports.help = {
    name: "servidores"
    }