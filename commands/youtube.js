const Discord = require("discord.js");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyC4WDdSL8I16siRvCqlmWhsKUr0zbj0-d0");

exports.run = async (client, message, args) => {

  youtube.searchVideos(args, 1)
      .then(results => {

    const ytEmbed = new Discord.RichEmbed()
    .setAuthor(`Resultados de: ${args}`.split(',').join(' '), "https://cdn.discordapp.com/attachments/494189179383578624/503679656264990751/Sem_Titulo-1.png")
    .setImage(results[0].thumbnails.high.url)
    .setColor('RANDOM') 
    .addField('<:Seta:544565700170350603> | Nome do canal', results[0].channel.title, true)
    .addField('<:pasta:545046846247272478> | Título', results[0].title, true)
    .addField('<:pasta:545046846247272478> | Descrição', results[0].description)
    .addField("<:Data:553592338652332044> | Publicado em", ` ${results[0].publishedAt}`)
    .addField('<a:digitando:545415741294379033> | Link', `[Clique Aqui](https://youtu.be/${results[0].id})`)
    .setFooter(" Diamond#7554 © | Direitos Reservados.", client.user.displayAvatarURL)
    .setTimestamp();
          

          message.channel.send(ytEmbed);
      }).catch()
}