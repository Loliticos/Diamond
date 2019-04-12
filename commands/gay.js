const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let gay = Math.round(Math.random() * 100);

    let gayembed = new Discord.RichEmbed()
        .setColor("#f442d4")
        .setTitle(`:gay_pride_flag: | **Pelo quê eu ví... ${message.author.username} é ${gay}% gay!**`);
    message.delete(10);
    return message.channel.send(gayembed);
};

module.exports.help = {
    name: "gay"
};