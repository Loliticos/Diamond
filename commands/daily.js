var database = require("../database.js")
var dayCol = new Set()
var dayRDM = Math.round(Math.random() * 53252)

exports.run = (client, message, args) => {

    if (dayCol.has(message.author.id)) return message.reply("**Os seus coins diários já foram coletados. Aguarde 24 Horas. :confused:**");

    database.Users.findOne({
        "_id": message.author.id
    }, function(erro, documento) {
        if (documento) {

            documento.coins += dayRDM
            documento.save()
            message.reply(`**Você ganhou ${Number(dayRDM).toLocaleString()} coins! :smile:**`);
            dayCol.add(message.author.id)
            setTimeout(function() {
                dayCol.delete(message.author.id)
            }, 6 * 1000 * 60 *60)

        } else {

            var pessoa = new database.Users({
                _id: message.author.id,
                level: 0,
                xp: 0,
                coins: 0,
                frase: "Nenhuma"
            })

            pessoa.save()

        }
    })

}