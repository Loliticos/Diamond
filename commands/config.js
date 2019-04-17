var database = require("../database.js")

exports.run = (client, message, args) => {

    database.Guilds.findOne({
        "_id": message.guild.id
    }, function(erro, documento) {

        if (documento) {

            message.channel.sendMessage({
                "embed": {
                  "description": `Configurações do Servidor **${message.guild.name}** | **${message.guild.id}**`,
                  "color": 55512,
                  "footer": {
                    "icon_url": client.user.displayAvatarURL,
                    "text": message.author.username
                  },
                  "thumbnail": {
                    "url": client.user.displayAvatarURL
                  },
                  "fields": [
                    {
                      "name": ":gear: Config:",
                      "value": `- AutoRole = ${documento.autoroleid}\n- Welcome (Bem-Vindo) = ${documento.welcomechannel}\n - Mensagem de Bem-Vindo = ${documento.welcomemsg}\n - Saída (Leave) = **${documento.byebyechannel}**\n - Mensagem de Saída = **${documento.byebyemsg}**`,
                      "inline": true
                    },
                  ]
                }
              });

        } else {

            var servidor = new database.Guilds({
                _id: message.guild.id,
                welcome: false,
                welcomechannel: "<:desativado:567848575934136341> | Nenhum",
                welcomemsg: "<:desativado:567848575934136341> | Nenhuma",
                byebye: false,
                byebyechannel: "<:desativado:567848575934136341> | Nenhum",
                byebyemsg: "<:desativado:567848575934136341> | Nenhuma",
                autorole: false,
                autoroleid: "<:desativado:567848575934136341> | Nenhum",
                coins: true
            })
            servidor.save()
            message.reply("**Use o comando novamente!**");

        }

    })

}