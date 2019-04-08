const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {



    let google = args.slice(0).join('+');

        let link = `https://www.google.com/search?q=` + google;
        if(!link)return message.reply("Console error")
        let embed = new Discord.RichEmbed()
    
    .setColor("RANDOM")
    .addField('<:googlechrome:564150850096988223> | Ação:', 'Procurando no Google. ')
    .addField("<:pasta:545046846247272478> | Pesquisa:", `${args.slice(0).join(' ')}`)
    .addField('<a:digitando:545415741294379033> | Link:', `${link}`)
    .setFooter(" Diamond#7554 © | Direitos Reservados.", client.user.displayAvatarURL)
    .setTimestamp();
          
    message.channel.send(embed);
    message.author.send(`Você procurou por **${args.slice(0).join(' ')}** [${link}] em ${message.guild.name}`);
  
}



module.exports.help = {
    name: "google"
}