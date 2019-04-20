var database = require("../database.js")

exports.run = (client, message, args) => {

    database.Guilds.findOne({
        "_id": message.guild.id
    }, function (erro, documento) {

        if(documento) {

            if(documento.caixa) {
                database.Users.findOne({
                    "_id": message.author.id
                }, function (uerro, udocumento) {
                    if(udocumento) {

                        if(documento.caixatipo == "Comum") {
                            documento.caixa = false
                            documento.save()
                            udocumento.comum += 1
                            udocumento.save()
                            message.reply("**Você acaba de ganhar uma caixa comum. :smile:**");
                        } else if(documento.caixatipo == "Raro") {
                            documento.caixa = false
                            documento.save()
                            udocumento.raro += 1
                            udocumento.save()
                            message.reply("**Você acaba de ganhar uma caixa rara. :smile:**");
                        } else if(documento.caixatipo == "Epico") {
                            documento.caixa = false
                            documento.save()
                            udocumento.epico += 1
                            udocumento.save()
                            message.reply("**Você acaba de ganhar uma caixa epica. :smile:**");
                        } else if(documento.caixatipo == "Lendario") {
                            documento.caixa = false
                            documento.save()
                            udocumento.lendario += 1
                            udocumento.save()
                            message.reply("**Você acaba de ganhar uma caixa lendaria. :smile:**");
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

                        message.reply("**Use o comando novamente.**");
                    }
                })
            } else {
                message.reply(":confused: | **Nenhuma caixa foi dropada no momento.**");
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
                desc: "Use diamond.config desc <descrição do servidor> para setar uma descrição.",
                box: true,
                caixa: false,
                caixatipo: "Comum",
                links: false,
                invites: false,
                roleshop: false,
            })
            servidor.save()
            message.reply("**Use o comando novamente!**");
        }

    })

}