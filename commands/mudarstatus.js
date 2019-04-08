const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
        if(!message.member.roles.some(r=>["Administrador"].includes(r.name)) ) return message.channel.send('Você não tem permissão para executar este comando! Voce precisa ter o cargo **Administrador** para poder utilizar este comando!') 
        let stats = args.join(" ");
        if(!stats) return message.channel.send("O quê quer que eu jogue? Utilize diamond.jogar 'jogo' ");
        client.user.setActivity(stats, {type: "PLAYING"});
        message.channel.send(`Agora estou jogando: ${stats}`)
}