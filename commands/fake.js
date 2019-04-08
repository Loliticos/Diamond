const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    message.delete()
    try {
let user;

if (message.mentions.users.first()) {
  user = message.mentions.users.first();
  
} else if(args[0]) {
    user = client.users.get(args[0]);

}
let clientmessage = args.slice(1).join(' ')

if (args[0] == null) {return message.channel.send(`${message.author}, :x: |**Mencione um usuário !**`)}


if (args[1] == null) {return message.channel.send(`${message.author}, :x: | **Diga algo !**`)}
message.channel.createWebhook(user.username, user.avatarURL).then(w => {
    w.send(clientmessage);
    w.delete();
})

} catch (err) {
message.reply (':x: |  **Eu não tenho permissão para criar um Webhook neste servidor, ou não encontrei este usuário!**')
}
}