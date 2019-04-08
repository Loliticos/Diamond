const Discord = require("discord.js")
const os = require('os')
const cpuStat = require("cpu-stat");
const moment = require("moment") 
moment.locale('pt-BR');
 module.exports.run = async (client, message, args) => {
 message.delete().catch(O_o=>{});
           

            let { version } = require("discord.js");
     
            cpuStat.usagePercent(function(err, percent, seconds) {
              if (err) {
                return console.log(err);
              }
             
             let secs = Math.floor(client.uptime % 60);
             let days = Math.floor((client.uptime % 31536000) / 86400);
             let hours = Math.floor((client.uptime / 3600) % 24);
             let mins = Math.floor((client.uptime / 60) % 60);

              let embedStats = new Discord.RichEmbed()
             .setTitle(`** | Informações sobre a Host do ${client.user.username}**`)
             .setColor("RANDOM")
             .addField("<:memory_slot:553606269806706701> | Memoria a ser usada", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
             .addField("<:javascript:553605917715988490> |   Discord.js", `v${version}`, true)
             .addField("<:CPU:553606436857577498> |   CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
             .addField("<:CPU:553606436857577498> |   CPU a ser usada", `\`${percent.toFixed(2)}%\``,true)
             .addField("•  Arch", `\`${os.arch()}\``,true)
             .addField("•  Plataforma", `\`\`${os.platform()}\`\``,true)
             .setFooter(" Diamond#7554 © | Direitos Reservados.", client.user.displayAvatarURL)
             .setTimestamp();
             message.channel.send(embedStats)
            })


          }
module.exports.help = {
    name: "host"
    }