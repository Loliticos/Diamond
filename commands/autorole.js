var database = require("../database.js")

exports.run = (client, message, args) => {


    let razaou = args.slice(0).join(' ');
    let razaod = args.slice(1).join(' ');
    let razaot = args.slice(2).join(' ');
    let razaoq = args.slice(3).join(' ');
    let user = message.mentions.roles.first();

    var desenvolvedores = ["439928694610460672", "532294395655880705"]

    if (!desenvolvedores.includes(message.author.id) & !message.member.hasPermission(["MANAGE_ROLES_OR_PERMISSIONS"]))
    return message.reply(":x: | **Você não tem permissão para setar um autorole!**")

    database.Guilds.findOne({
        "_id": message.guild.id
    }, function(erro, documento) {

        if (documento) {

            if (!razaou.length < 1) {

                if (message.content.startsWith("diamond.autorole set")) {

                    if (message.mentions.roles.size < 1) return message.reply(":x: | **Mencione o cargo que deseja setar auto-role!**");
                    if(message.mentions.roles.first().position >= message.guild.members.get(client.user.id).highestRole.position){
                        message.reply("**Não tenho permissão para dar esse cargo. :confused:**");
                    } else {
                    documento.autoroleid = message.mentions.roles.first().id
                    documento.autorole = true
                    documento.save();

                    message.reply("**Autorole setado com sucesso.**");
                    }
                }

                if (message.content.startsWith("diamond.autorole remove")) {
                        if (!documento.autorole) {
                            message.reply(":x: | **Não há um autorole definido neste servidor!**");
                        } else {
                            documento.autoroleid = "Nenhum"
                            documento.autorole = false
                            documento.save()
                            message.reply("**Autorole removido com sucesso!**");
                    }
                }

                if (message.content.startsWith("diamond.autorole info")) {

                    if (!documento.autorole) {
                        message.channel.sendMessage({
                            "embed": {
                              "description": "**❄ AutoRole ❄**\nㅤ\n**Como usar:**\n```\ndiamond,autorole set <menção do cargo>\ndiamond.autorole remove```",
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
                                "description": "**❄ AutoRole ❄**\nㅤ\n**Cargo:** <@&" + documento.autoroleid + ">\nㅤ\n**Como usar:**\n```\ndiamond.autorole set <menção do cargo>\ndiamond.autorole remove```",
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
                message.reply({
                    "embed": {
                        "description": "**❄ AutoRole ❄**\nㅤ\n**Cargo:** <@&" + documento.autoroleid + ">\nㅤ\n**Como usar:**\n```\ndiamond.autorole set <menção do cargo>\ndiamond.autorole remove```",
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
                byebyechannel: "Nenhum",
                byebyemsg: "Nenhuma",
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