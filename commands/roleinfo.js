const Discord = require("discord.js")
exports.run = (client, message, args) => {
    const role = message.mentions.roles.first() || message.guild.roles.find(r => r.name === args.join(' ')) || message.guild.roles.get(args.join(' '))
    if(!role)
    return message.channel.send(`❌ A role **${args[0]}** parece não existir!`)
    if(!args[0]) 
    return message.channel.send(`❌ **${message.author.tag}**, Digite algo para pesquisar!`)
    let members = role.members.map(r => r),
        trad = {
            "CREATE_INSTANT_INVITE": "Criar convite instantâneo",
            "KICK_MEMBERS": "Expulsar usuários",
            "BAN_MEMBERS": "Banir usuários",
            "ADMINISTRATOR": "Administrador",
            "MANAGE_CHANNELS": "Gerenciar canais",
            "MANAGE_GUILD": "Gerenciar servidor",
            "ADD_REACTIONS": "Adicionar reação",
            "VIEW_AUDIT_LOG": "Ver registro de auditoria",
            "VIEW_CHANNEL": "Ver canais",
            "READ_MESSAGES": "Ver mensagens",
            "SEND_MESSAGES": "Enviar mensagens",
            "SEND_TTS_MESSAGES": "Enviar mensagens com aúdio",
            "MANAGE_MESSAGES": "Gerenciar mensagens",
            "EMBED_LINKS": "Links em embed",
            "ATTACH_FILES": "Arquivos arquivados",
            "READ_MESSAGE_HISTORY": "Ver histórico de mensagens",
            "MENTION_EVERYONE": "Mencionar todos",
            "EXTERNAL_EMOJIS": "Emojis externos",
            "USE_EXTERNAL_EMOJIS": "Usar emojis externos",
            "CONNECT": "Conectar",
            "SPEAK": "Falar",
            "MUTE_MEMBERS": "Silenciar usuários",
            "DEAFEN_MEMBERS": "Perdoar usuários",
            "MOVE_MEMBERS": "Mover usuários",
            "USE_VAD": "Usar detecção de voz",
            "PRIORITY_SPEAKER": "Prioridade para falar",
            "CHANGE_NICKNAME": "Trocar apelido",
            "MANAGE_NICKNAMES": "Gerenciar apelidos",
            "MANAGE_ROLES": "Gerenciar cargos",
            "MANAGE_ROLES_OR_PERMISSIONS": "Gerenciar cargos e permissões",
            "MANAGE_WEBHOOKS": "Gerenciar webhooks",
            "MANAGE_EMOJIS": "Gerenciar emojis"
        },
        perms = Object.entries(role.serialize()).filter(([,has]) => has).map(([perm]) => `**${trad[perm]}**`).join(', ')
    try {
    let embed = new Discord.RichEmbed()
    .setColor("36393e")
    .setDescription(`🎭 Informações sobre a role ${role}\n\nNome: **${role.name}**\nId: **${role.id}**\nPosição: **${message.guild.roles.size - role.position}**\nHexColor: **${role.hexColor}**\nSeparado: **${role.hoist}**\nMembros**[${role.members.size}]**: ${members}\nPermissões: ${perms}`)
    message.channel.send(embed)
    } catch(_) {
    let embed2 = new Discord.RichEmbed()
    .setColor("36393e")
    .setDescription(`🎭 Informações sobre a role: ${role}\n\nNome: **${role.name}**\nId: **${role.id}**\nPosição: **${message.guild.roles.size - role.position}**\nHexColor: **${role.hexColor}**\nSeparado: **${role.hoist}**\nMembros**[${role.members.size}]**\nPermissões: ${perms}`)
    .setFooter(" Diamond#7554 © | Direitos Reservados.", client.user.displayAvatarURL)
    .setTimestamp();
        message.channel.send(embed2)
    }
}
exports.help = {
    name: 'roleinfo'
}