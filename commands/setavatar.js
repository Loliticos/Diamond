const Discord = require('discord.js')
const Client = new Discord.Client()
module.exports.run = (client, message, args) => {


Client.login('NDQ2Nzg3MDAzNDM0OTI2MTE5.D3Qtmg.SXmn9ZCL6Vf5a0KE-hiHjTBETd8').then(async () => {
    console.log(`Ligado em ${Client.user.tag}`)
})
Client.on('message', async message => {
    if (message.author.id === '446787003434926119') {
        let prefix = "diamond."
        const args = message.content.slice(prefix.length).trim().split(' ') 
        if (message.content.startsWith(`${prefix}avatar`)) {
            Client.user.setAvatar(args[1]).then(async () => {
                await message.reply(Client.user.displayAvatarURL)
            })
        }
    }
})};
