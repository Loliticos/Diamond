const Discord = require("discord.js")
const moment = require("moment")
moment.locale("pt-Br")
exports.run = (client, message, args) => {
    function check(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " dia" : " dias");
    }
    var trad = {
        "online": `${client.emojis.find(e => e.name === "online")} Disponível`,
        "idle": `${client.emojis.find(e => e.name === "idle")} Ausente`,
        "dnd": `${client.emojis.find(e => e.name === "dnd")} Ocupado`,
        "offline": `${client.emojis.find(e => e.name === "offline")} Indisponível`
    },
        tradd = {
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
        }
    let author = message.author
    if(!args[0]){
        let status = author.presence.status
        let playing = author.presence.game ? author.presence.game : "Não está jogando nada"
        let e = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setThumbnail(author.displayAvatarURL)
        .setDescription(` Tag: **${author.tag}**\n Id: **${author.id}**\n Conta criada em: **${moment(author.createdAt).format("LL")}** **(${check(author.createdAt)})**\n Status: **${trad[status]}**\n Jogando: **${playing}**\n Cargos: ${message.member.roles.map(r => `**${r}**`).join(", ")}\n Permissões: ${message.member.permissions.toArray().map(perms => `**${tradd[perms]}**`).join(", ")}`)
        message.channel.send(e)
    } else {
        let member = message.guild.members.find(c => c.name === args.join(" "))
        if(!member)
        return message.channel.send(`${client.emojis.find(e => e.name === "cancel2")} Não consegui achar este usuário!`)
        let status = member.user.presence.status
        let playing = member.user.presence.game ? member.user.presence.game : "Não está jogando nada"
        let em = new Discord.RichEmbed()
        .setThumbnail(member.user.displayAvatarURL)
        .setColor("RANDOM")
        .setDescription(` Tag: **${member.user.tag}**\n Id: **${member.user.id}**\n Conta criada em: **${moment(member.user.createdAt).format("LL")}** **(${check(member.user.createdAt)})**\n Status: **${trad[status]}**\n Jogando: **${playing}**\n Cargos: ${member.roles.map(r => `**${r}**`).join(", ")}\n Permissões: ${member.permissions.toArray().map(perms => `**${tradd[perms]}**`).join(", ")}`)
        message.channel.send(em)
    }
}
exports.help = {
    name: 'userinfo'
}