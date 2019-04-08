const Discord = require('discord.js')
module.exports.run = async(client, message, args) => {
    if(!message.member.hasPermission('MANAGE_MESSAGES'))
        return message.channel.send(":x: | Você não tem permissão para isso!")
    let channel = message.mentions.channels.first(); // Definido o canal de anúncios
    if(!channel)
        return message.channel.send(':x: | Você precisa mencionar um canal!').then(msg => { // Se não há menção do canal, ele retorna um aviso
            msg.delete(5000)  // 1000 = 1s 
            message.delete(5000)  // 1000 = 1s 
        })
//Argumentos
    let argumentos = args.slice(1).join(" ")
    if(!argumentos)
        return message.channel.send({embed: {
            title: "Anúnciar",
            description: "Uso correto: `diamond.anunciar #Canal <Mensagem>`",
            fields: [{
                name: "Alternativas",
                value: "`avisar`"
            },
            ],
        }}).then(msg => { // Se não há mensagem, ele retorna um aviso
            msg.delete(5000)  // 1000 = 1s 
            message.delete(5000)  // 1000 = 1s 
//Embed que vai para o canal de anúncios
})
    let embed = new Discord.RichEmbed()
    .setTitle("Anúncio!")
    .addField("Mensagem:", argumentos)
    .setFooter(`Enviado por ${message.author.tag}`, message.author.avatarURL)
    .setFooter("  Diamond#7554 © | Direitos Reservados.", client.user.displayAvatarURL, "Anúncio Enviado por ${message.author.tag}`, message.author.avatarURL")
    .setTimestamp();

//Canal que irá enviar, definido para channel o canal de anúncios
    channel.send("@everyone").then(msg => {
        msg.delete() // Ele enviará um everyone, e apagará rápidamente!
    })
    channel.send(embed)
    message.delete(5000)  // 1000 = 1s 
    message.channel.send("✅ | Enviado com sucesso!").then(msg => { // Dar a mensagem de sucesso, e apagar em 5 segundos
        msg.delete(5000)  // 1000 = 1s 
    })
}
//

//Configurações do módulo
module.exports.config = {
    name: 'anunciar',
    aliases: ['avisar']
}