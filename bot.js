const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs"); 
const client = new Discord.Client();
const config = require("./config.json");
client.config = config;
var database = require("./database.js");

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.servidores = new Discord.Collection()

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});


//STREAMING = TRANSMITINDO
//LISTENING = OUVINDO
//PLAYING = JOGANDO
//WATCHING = ASSISTINDO

client.on('message', message => {
  if(message.content.startsWith('<@561359827331186688>')) {
      const embed = new Discord.RichEmbed()

      .setTitle(`Olá ${message.author.tag} está perdido?`)
      .setDescription('Opa, encontra-se perdido❓ Bom, eu ainda estou em beta, porém, meu comando de ajuda é **diamond.help**! Verifique!')
      .setThumbnail(client.user.avatarURL)
      .setFooter(" Diamond#7554 © | Direitos Reservados.", client.user.displayAvatarURL)

      message.channel.send(embed);
  }
});

client.on('guildMemberAdd', member => {

  database.Guilds.findOne({
      "_id": member.guild.id
  }, function (erro, documento) {

      if(documento) {

          if(documento.welcome) {

              var bemvindo = documento.welcomemsg
              if(member.guild.channels.get(documento.welcomechannel)) {
                  client.guilds.get(member.guild.id).channels.get(documento.welcomechannel).sendMessage(bemvindo.replace(/{member}/g, `<@${member.id}>`).replace(/{guild}/g, `${member.guild.name}`).replace(/{name}/g, `${member.username}`));
              } else {}

          } else {}

          if(documento.autorole) {

              var cargo = documento.autoroleid
              if(member.guild.roles.get(documento.autoroleid)) {
                  client.guilds.get(member.guild.id).members.get(member.user.id).addRole(client.guilds.get(member.guild.id).roles.get(cargo));
              } else {}

          } else {}

      } else {}

  })
})

client.on('guildMemberRemove', member => {

  database.Guilds.findOne({
      "_id": member.guild.id
  }, function (erro, documento) {

      if(documento) {

          if(documento.byebye) {

              var bbbyebye = documento.byebyemsg
              if(member.guild.channels.get(documento.byebyechannel)) {
                  client.guilds.get(member.guild.id).channels.get(documento.byebyechannel).sendMessage(bbbyebye.replace(/{member}/g, `<@${member.id}>`).replace(/{guild}/g, `${member.guild.name}`).replace(/{name}/g, `${member.username}`));
              } else {}

          } else {}

      } else {}

  })
})

client.on('guildDelete', guild => {

  database.Guilds.findOne({
      "_id": guild.id
  }, function (erro, documento) {
      if(documento) {
          if(documento.roleshop) {
              database.Roleshops.deleteOne({
                  "_id": guild.id
              }, function (erro, documento) {})
              database.Guilds.deleteOne({
                  "_id": guild.id
              }, function (erro, documento) {})
          } else {}
      } else {}
  })

})

client.on("message", message => {
  if(message.author.bot) return;
  if(message.channel.type == "dm") return

  database.Guilds.findOne({
      "_id": message.guild.id
  }, function (serverro, servidorto) {

      if(servidorto) {

          if(servidorto.box) {

              if(servidorto.caixa) {} else {

                  var prc = Math.round(Math.random() * 7500)

                  if(prc == 1670) {
                      servidorto.caixa = true
                      servidorto.caixatipo = "Lendario"
                      servidorto.save()
                      message.reply("**Uma caixa lendaria foi dropada, use `diamond.getbox` para pegar.**");
                  } else if(prc == 153) {
                      servidorto.caixa = true
                      servidorto.caixatipo = "Epico"
                      servidorto.save()
                      message.reply("**Uma caixa epica foi dropada, use `diamond.getbox` para pegar.**");
                  } else if(prc == 527) {
                      servidorto.caixa = true
                      servidorto.caixatipo = "Raro"
                      servidorto.save()
                      message.reply("**Uma caixa rara foi dropada, use `diamond.getbox` para pegar.**");
                  } else if(prc == 2083) {
                      servidorto.caixa = true
                      servidorto.caixatipo = "Comum"
                      servidorto.save()
                      message.reply("**Uma caixa comum foi dropada, use `diamond.getbox` para pegar.**");
                  } else {}
              }
          } else {}

      } else {
          var servidor = new database.Guilds({
              _id: message.guild.id,
              welcome: false,
              welcomechannel: "Nenhum",
              welcomemsg: "Nenhuma",
              byebye: false,
              byebyechannel: "Nenhum",
              byebyemsg: "Nenhuma",
              autorole: false,
              autoroleid: "Nenhum",
              leveis: true,
              coins: true,
              desc: "Use diamond.config desc <descrição do servidor> para setar uma descrição.",
              box: true,
              caixa: false,
              caixatipo: "Comum",
              links: false,
              invites: false,
              roleshop: false,
          })
          servidor.save()
      }

  })

})

var xpCol = new Set()
let xpRDM = Math.round(Math.random() * 35)
let coinsRDM = Math.round(Math.random() * 45)


client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return
    database.Guilds.findOne({
        "_id": message.guild.id
    }, function (serverro, servidorto) {
        if(servidorto) {
            if(servidorto.leveis) {
                if(xpCol.has(message.author.id)) return;
                database.Users.findOne({
                    "_id": message.author.id
                }, function (erro, documento) {
                    if(documento) {
                        if(documento.ban) {} else {
                            var unbug = 370 * documento.level + 1
                            if(documento.xp > unbug) {
                              documento.xp += xpRDM
                              documento.coins += coinsRDM
                              documento.level += 1
                              let embed = new Discord.RichEmbed()
                              .setTitle("🎉 | LEVEL UP!")
                              .setColor("RANDOM")
                              .setDescription(`**Parabéns ${message.author}**, você acabou de subir para o **nível ${documento.level}**!`)
                              message.channel.send(embed);
                              documento.xp = 0
                              documento.save()
                              xpCol.add(message.author.id)
                              setTimeout(function () {
                                  xpCol.delete(message.author.id)
                              }, 30 * 1000)
                          } else {
                                documento.xp += xpRDM
                                documento.coins += coinsRDM
                                documento.save()
                                xpCol.add(message.author.id)
                                setTimeout(function () {
                                    xpCol.delete(message.author.id)
                                }, 30 * 1000)
                            }
                        }
                    } else {
                        var pessoa = new database.Users({
                            _id: message.author.id,
                            level: 0,
                            xp: 0,
                            coins: 0,
                            rep: 0,
                            comum: 0,
                            raro: 0,
                            epico: 0,
                            lendario: 0,
                            ban: false,
                            frase: "Nenhuma"
                        })

                        pessoa.save()
                    }
                });
            } else {}
        } else {
            var servidor = new database.Guilds({
                _id: message.guild.id,
                welcome: false,
                welcomechannel: "Nenhum",
                welcomemsg: "Nenhuma",
                byebye: false,
                byebyechannel: "Nenhum",
                byebyemsg: "Nenhuma",
                autorole: false,
                autoroleid: "Nenhum",
                leveis: true,
                coins: true,
                desc: "Use diamond.config desc <descrição do servidor> para setar uma descrição.",
                box: true,
                caixa: false,
                caixatipo: "Comum",
                links: false,
                invites: false,
                roleshop: false,
            })
            servidor.save()
        }
    });
});

client.on('message', message => {
  if (!message.content.startsWith(config.prefix)) return //Não processa mensagens que não começa com o prefixo do bot.
    let args = message.content.split(' ');
  let comando = args.shift().slice(config.prefix.length).toLowerCase();

  let cmd = client.commands.get(comando) || client.commands.get(client.aliases.get(comando));
  if (cmd) {
    cmd.run(client, message, args) //Executa o comando
  }
  else {
    return message.reply(`O Comando  \`${comando}\` Não foi Encontrado! Certifique-se de ter Digitado Corretamente!`)
  }
});

client.on('message', message => {
  if(message.author.client) return; //não responde bot
  if(message.channel.type == "dm") return; //não reponde dm
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
          prefixes: client.config.prefix
      };
  }

  let prefix = prefixes[message.guild.id].prefixes;

  if(!message.content.startsWith(prefix)) return; //responde só ao seu prefixo
  let args = message.content.split(prefix.lenght).trim().split(/\s+/g);
  let command = args.shift().toLowerCase();

  let arquivocmd = client.commands.get(command);
  if(arquivocmd) arquivocmd.run(client,message,args);
  else message.channel.send("")

});
client.on('ready', () => {
  var i = 0;

  timer = client.setInterval(function() {
      var uptime = `${client.uptime}`;
      var seg = Math.floor(uptime / 1000) % 60;
      var min = Math.floor(uptime / (1000 * 60)) % 60;
      var horas = Math.floor(uptime / (1000 * 60 * 60)) % 24;
      let tempo = `Estou online a ${horas} horas, ${min} minutos e ${seg} segundos!`

      var gamePresence = [
          `Meu Prefixo É: diamond.`,
          `Estou em Beta!`,
          `Meu Criador é o yRustFocker#6420`,
          `Estou Sendo Criado em JavaScript`,
          `Estou em BETA!`,
          `Em ${client.guilds.size} Servidores | Conectada com ${client.users.size} usuarios`,
          `${tempo}`
      ];
      client.user.setPresence({
          game: {
              name: gamePresence[i % gamePresence.length],
              type: 0
          }
      });
      i++;
  }, 180000);
});

  client.commands = new Enmap();
 
  fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./commands/${file}`);
      let commandName = file.split(".")[0];
      console.log(`Comando Carregado: ${commandName}`);
      client.commands.set(commandName, props);
    });
  });


  client.login("Your token here"); 
