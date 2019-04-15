var database = require("../database.js")

exports.run = (client, message, args) => {


    let razaou = args.slice(0).join(' ');
    let razaod = args.slice(1).join(' ');

    var desenvolvedores = ["439928694610460672", "532294395655880705"]

    if (!desenvolvedores.includes(message.author.id) & !message.member.hasPermission(["MANAGE_GUILD"]))
    return message.reply("**Você não tem permissão para setar um canal de Welcome!**");

    database.Guilds.findOne({
        "_id": message.guild.id
    }, function(erro, documento) {

        if (documento) {

            if (!razaou.length < 1) {
              
              if (message.content.startsWith("diamond.welcome set")) {
                if (!razaod.length < 1) {

                  documento.welcomechannel = message.channel.id
                  documento.welcomemsg = message.content.replace("diamond.welcome set ", "");
                  documento.welcome = true
                  documento.save();
                  message.reply("**Canal de Welcome setado com sucesso!**");

                } else {
                  message.channel.sendMessage({
                      "embed": {
                          "description": "ㅤ   **❄ Welcome ❄**ㅤ   \nㅤ\n**Como usar:**\n```diamond.welcome set <mensagem de welcome>```",
                          "color": 55512,
                          "timestamp": new Date(),
                          "footer": {
                            "icon_url": message.author.displayAvatarURL,
                            "text": message.author.username
                          },
                          "thumbnail": {
                              "url": client.user.displayAvatarURL
                          }
                      }
                  });
              }
          }

          if (message.content.startsWith("diamond.welcome remove")) {
              if (!documento.welcome) {
                  message.reply("**Não há um canal de welcome definido neste servidor!**");
              } else {
                  documento.welcome = false
                  documento.welcomechannel = "Nenhum"
                  documento.welcomemsg = "Nenhuma"
                  documento.save()
                  message.reply("**Canal de welcome removido com sucesso!**");
              }
          }

          if (message.content.startsWith("diamond.welcome info")) {
              if (!documento.welcome) {
                  message.channel.sendMessage({
                      "embed": {
                          "description": "ㅤ   **❄ Welcome ❄**ㅤ   \nㅤ\n**Como usar:**\n```{member} menciona o usuário\n{guild} fala o nome do servidor\n{name} fala o nome do usuário```",
                          "color": 55512,
                          "timestamp": new Date(),
                          "footer": {
                            "icon_url": message.author.displayAvatarURL,
                            "text": message.author.username
                          },
                          "thumbnail": {
                              "url": client.user.displayAvatarURL
                          }
                      }
                  });
              } else {
                message.channel.sendMessage({
                    "embed": {
                        "description": "ㅤ   **❄ Welcome ❄**ㅤ   \nㅤ\n**Mensagem:** " + documento.welcomemsg + "\n**Canal de Welcome** <#" + documento.welcomechannel + ">\nㅤ\n**Como usar:**\n```{member} menciona o usuário\n{guild} fala o nome do servidor\n{name} fala o nome do usuário```",
                        "color": 55512,
                        "timestamp": new Date(),
                        "footer": {
                          "icon_url": message.author.displayAvatarURL,
                          "text": message.author.username
                        },
                        "thumbnail": {
                            "url": client.user.displayAvatarURL
                        }
                    }
                });
            }

        }
    } else {

        message.channel.sendMessage({
            "embed": {
                "description": "ㅤ   **❄ Welcome ❄**ㅤ   \nㅤ\n**Como usar:**\n```diamond.welcome set\npdiamond.welcome remove\ndiamond.welcome info```",
                "color": 55512,
                "timestamp": new Date(),
                "footer": {
                  "icon_url": message.author.displayAvatarURL,
                  "text": message.author.username
                },
                "thumbnail": {
                    "url": client.user.displayAvatarURL
                }
            }
        });

    }

} else {

    var servidor = new database.Guilds({
        _id: message.guild.id,
        welcome: false,
        welcomechannel: "Nenhum",
        welcomemsg: "Nenhuma",
        byebye: false,
        saidachannel: "Nenhum",
        saidamsg: "Nenhuma",
        autorole: false,
        autoroleid: "Nenhum",
        leveis: true,
        coins: true,
    })
    servidor.save()
    message.reply("**Use o comando novamente!**");

}

})

}