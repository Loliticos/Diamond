var database = require("../database.js")

exports.run = (client, message, args) => {


    let razaou = args.slice(0).join(' ');
    let razaod = args.slice(1).join(' ');

    var desenvolvedores = ["439928694610460672", "532294395655880705"]

    if (!desenvolvedores.includes(message.author.id) & !message.member.hasPermission(["MANAGE_GUILD"]))
    return message.reply("**Você não tem permissão para setar um canal de saída!**");

    database.Guilds.findOne({
        "_id": message.guild.id
    }, function(erro, documento) {

        if (documento) {

            if (!razaou.length < 1) {

                if (message.content.startsWith("diamond.saida set")) {
                    if (!razaod.length < 1) {

                        documento.byebyechannel = message.channel.id
                        documento.byebyemsg = message.content.replace("diamond.saida set ", "");
                        documento.byebye = true
                        documento.save();
                        message.reply("**Canal de saída setado com sucesso!**");

                    } else {
                        message.channel.sendMessage({
                            "embed": {
                                "description": "ㅤ   **❄ Saida ❄**ㅤ   \nㅤ\n**Como usar:**\n```diamond.setsaida set <mensagem de saída>gg```",
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

                if (message.content.startsWith("diamond.saida remove")) {
                    if (!documento.byebye) {
                        message.reply("**Não há um canal de saída definido neste servidor!**");
                    } else {
                        documento.byebye = false
                        documento.byebyechannel = "Nenhum"
                        documento.byebyemsg = "Nenhuma"
                        documento.save()
                        message.reply("**Canal de saída removido com sucesso!**");
                    }
                }

                if (message.content.startsWith("diamond.saida info")) {
                    if (!documento.byebye) {
                        message.channel.sendMessage({
                            "embed": {
                                "description": "ㅤ   **❄ Saída ❄**ㅤ   \nㅤ\n**Como usar:**\n```{member} menciona o usuário\n{guild} fala o nome do servidor\n{name} fala o nome do usuário```",
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
                                "description": "ㅤ   **❄ Saída ❄**ㅤ   \nㅤ\n**Mensagem:** " + documento.byebyemsg + "\n**Canal de Saída** <#" + documento.byebyechannel + ">\nㅤ\n**Como usar:**\n```{member} menciona o usuário\n{guild} fala o nome do servidor\n{name} fala o nome do usuário```",
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
                        "description": "ㅤ   **❄ Saída ❄**ㅤ   \nㅤ\n**Como usar:**\n```diamond.setsaida set\npdiamond.setsaida remove\npdiamond.setsaida info```",
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