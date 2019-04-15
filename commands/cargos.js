const Discord = require('discord.js');
exports.run = (client, message, args) => {

    let icon = message.guild.iconURL;
    for (var i = 0; i < message.guild.roles.size; i++) {
        let embed = new Discord.RichEmbed() 
        .setTitle(`Todos os cargos do servidor:  **${message.guild.name}** | **${message.guild.id}**`)
        .setColor("RANDOM")
        .setThumbnail(icon)
        .setDescription(`${message.guild.roles.map(r => r).join(', ')}`)
        .setFooter(" Diamond#7554 © | Direitos Reservados.", client.user.displayAvatarURL)
        .setTimestamp();
    
    
      return message.channel.send(embed);
    }};