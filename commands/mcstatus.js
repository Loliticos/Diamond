const Discord = require("discord.js");
exports.run = async (client, message, args) => {


    let Request = require("request-promise");
    
    Request({
        method: "GET",
        url: "https://status.mojang.com/check",
        
        json: true
    }).then(response =>{ 
        let embed = new Discord.RichEmbed()
        
        .setAuthor(`👀 | Você está observando o status dos servidores da Mojang.`, "https://cdn.discordapp.com/emojis/525412144406200321.gif?v=1")
        
        for(let i = 0; i < response.length; i++) {
            for(let setor in response[i]) {
                let valor = response[i][setor];
                
                embed.addField(`Setor - ${setor}`, `Está atualmente **${valor === "green" ? "funcionando normalmente. ✅" : "possívelmente offline. ❌"}**`)
            }
        }
        
        message.delete(), message.reply({
            embed
        });
        
    }).catch(error => message.channel.send(`❌ | **Falha na extração de informações!** (${error.message})`).then(me => me.delete(10 * 1000)));
    
};
   
exports.informação = {
    nome: "minecraft",
    descrição: "Veja se os sistemas da Mojang estão funcionando corretamente.",
    
    aliases: [ "mcstatus" ],
};