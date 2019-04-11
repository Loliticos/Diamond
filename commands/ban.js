const Discord = require("discord.js")
exports.run = (client, message, args) => {
    try {
    if(!message.guild.member(client.user.id).hasPermission("BAN_MEMBERS"))
    return message.channel.send(`❌ **${message.author.tag}**, Eu não tenho a permissão **BAN_MEMBERS** para banir alguém!`).then(msg => msg.delete(5000))
    if(!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send(`❌ **${message.author.tag}**, Você precisa da permissão **BAN_MEMBERS** para banir alguém!`).then(msg => msg.delete(5000))
    if(message.mentions.members.first().id === client.user.id)
    return message.channel.send(`❌ **${message.author.tag}**, Você não pode me banir! 😦`).then(msg => msg.delete(5000))
    let mention
    if (message.mentions.members.size > 0) {
        if (/<@!?[\d]{18}>/.test(args[0])) {
            mention = message.mentions.members.first();
        }
    } else if(/[\d]{18}/.test(args[0])){
        mention = message.guild.members.get(args[0])
    }
    let execRole = message.member.highestRole,
        mentionRole = mention.highestRole,
        clientRole = message.guild.member(client.user.id).highestRole
    if(execRole.comparePositionTo(mentionRole) <= 0)
        return message.channel.send(`❌ **${message.author.tag}**, O usuário tem um cargo maior ou igual que o seu!`).then(msg => msg.delete(5000))
    if(clientRole.comparePositionTo(mentionRole) <= 0)
        return message.channel.send(`❌ **${message.author.tag}**, Eu não tenho permissão para banir este usuário!`).then(msg => msg.delete(5000))
    message.channel.send(`${client.emojis.find(e => e.name === "ban")} **${message.author.tag}**, Você tem certeza que deseja banir **${mention.user.tag}**?`).then(msg => {
        msg.react("✅").then(r1 => {
            msg.react("❌")
        })
    const sim = msg.createReactionCollector((r, u) => r.emoji.name === "✅" && u.id === message.author.id, { time: 30000 }),
          nao = msg.createReactionCollector((r, u) => r.emoji.name === "❌" && u.id === message.author.id, { time: 30000 })
        sim.on("collect", (r) => {
            msg.delete()
            message.channel.send(`❓ **${message.author.tag}**, Diga o motivo do banimento.`).then(msg => msg.delete(5000))
            let collector = msg.channel.createMessageCollector(m => m.author.id === message.author.id, { time: 30000 });
            collector.on("collect", (m) => {
                collector.stop()
                let content = m.content
                message.guild.ban(mention, {reason: content})
                let find = message.guild.members.find(m => m.id === mention.user.id)
                if(find){
                    message.channel.send(`❌ O usuário **${mention.user.tag}** não foi banido!`).then(msg => msg.delete(5000))
                } else {
                message.channel.send(`✅ O usuário **${mention.user.tag}** foi banido do servidor pelo motivo **${content}**!`).then(msg => msg.delete(5000))
                }
            })
        })
        nao.on("collect", (r) => {
            msg.delete()
        })
    })
} catch(err) {
    message.channel.send(`❌ **${message.author.tag}**, não consegui achar este usuário! Mencione-o!`)
}
}
exports.help = {
    name: 'ban'
}