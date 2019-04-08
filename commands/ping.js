const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    let clientping = new Date() - message.createdAt;
    const  heartbeat = Date.now() - message.createdTimestamp;

    message.channel.send(`${message.author}`)
    let pEmbed = new Discord.RichEmbed()
        .setTitle("🔔 Pong:")
        .addField('💻 API: ', Math.floor(client.ping) + 'ms')
        .addField('💻Latência:', `${clientping}` + 'ms')
        .addField(`📶Hearthbeat:`,  `${heartbeat}` + 'ms')
        .setColor("RANDOM")
        .setFooter(" Diamond#7554 © | Direitos Reservados.", client.user.displayAvatarURL)
        .setTimestamp();
        message.channel.send(pEmbed);
}

module.exports.help = {
    name: "ping"
}