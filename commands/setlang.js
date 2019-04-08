const database = require('../database.js')


exports.run = ({ client, message, args, lang, language }, t) => {
database.Guilds.findbyId(message.guild.id, (err, server) => {
    if (server) {
        if (args[0] === 'en') {
            server.lang = 'en-US'
            server.save()
            message.channel.send('PT')
        } else if (args[0] === 'pt') {
            server.lang = 'pt-BR'
            server.save()
            message.channel.send('EN')
        }
    } else {
        var save = new database.Guilds({ _id: message.guild.id, lang: 'pt-BR' })
        save.save()
        message.channel.send('Salvo! Use de novo!')
    }
})};