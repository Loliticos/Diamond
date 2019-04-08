const Discord = require('discord.js')

exports.run = (client, message, args, tools) => {

        if(!message.member.hasPermission("KICK_MEMBERS")) {
            return message.channel.send('Você não possui permissão para executar esse comando')
        }
        if(!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) {
            return message.channel.send('Eu não possuo permissão para executar esse comando')
        }    

        let member = message.mentions.members.first();

        if(!member) {
            return message.channel.send('Mencione um membro para continuar')
        }

        let clientTrue = message.guild.me
        let botHighestRole = clientTrue.highestRole
        let memberHighestRole = member.highestRole
        let positionMember = memberHighestRole.position
        let positionBot = botHighestRole.position

        if(positionMember >= positionBot) {
            return message.channel.send('Eu não posso punir esse cargo por que eu possuo um cargo menor ou igual a esse usuário')
        }

        const mentionedUserID = member.id
        const ownerID = msg.guild.owner.id

        if(mentionedUserID === ownerID) {
            return message.channel.send('Eu não posso punir esse cargo por que eu possuo um cargo menor ou igual a esse usuário')
        }

        if(!args[1]) {
            return message.channel.send('**Escreva um motivo para o usuário ser punido**')
        }

        let argsresult;
            argsresult = args.slice(2).join(' ')

        member.kick(argsresult)
        .then(user => message.channel.send(`O usuário ${user} foi punido com sucesso**`))
    }

module.exports.help = {
    name: "kick"
}
