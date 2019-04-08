const Discord = require('discord.js');
const client = new Discord.Client();
module.exports.run = (client, message, args) => {

    let embed = new Discord.RichEmbed()
    
    .setTitle(`<:block:564152109990150154> | Minecraft Head`)
    .setColor("#0051FF")
    .setImage(`https://mc-heads.net/head/${args[0]}`)
    .setDescription("<:block:564152109990150154> | Link para baixar a skin: " + `https://mc-heads.net/download/${args[0]}`)
    .setFooter(" Diamond#7554 © | Direitos Reservados.", client.user.displayAvatarURL)
    .setTimestamp();
    message.channel.send(embed)
};

module.exports.help = {
    name: "mchead"
};