exports.run = (client, message, args) => {
  try{
  let messagecount = parseInt(args[0]) || parseInt(args[1])
  if (!message.member.hasPermission(["MANAGE_MESSAGES"])) 
  return message.channel.send(`❌ **${message.author.tag}**, Eu não tenho a permissão **MANAGE_MESSAGES** para limpar mensagens!`).then(msg => msg.delete(5000))
  if(messagecount >= 100){
      message.channel.send(`❌ **${message.author.tag}**, Eu não posso excluir mais de 100 mensagens!`).then(msg => msg.delete(5000))
  }else if(args[1]){
    const target = message.mentions.users.first()
      message.channel.fetchMessages({limit: messagecount + 1})
        .then(messages => {
          var msgArray = messages.array()
          msgArray = msgArray.filter(m => m.author.id === target.id)
          message.channel.bulkDelete(msgArray, true)})
    message.channel.send(`🗑 **${message.author.tag}** deletei **${args[1]}** mensagens do usuário **${target.tag}**`).then(msg => msg.delete(5000))
  }else if(args[0]){
        message.channel.fetchMessages({limit: messagecount + 1})
            .then(messages => message.channel.bulkDelete(messages, true))
        message.channel.send(`🗑 **${message.author.tag}** deletei **${args[0]}** mensagens desse canal!`).then(msg => msg.delete(5000))
    }
  }catch(err){
      message.channel.send(`❌ **${message.author.tag}**, Eu não posso excluir mensagens de 14 dias atrás!`).then(msg => msg.delete(5000))
  }
}
exports.help = {
    name: 'clear',
    aliases: ["purge", "prune", "limpar"]
}