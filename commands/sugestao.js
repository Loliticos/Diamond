const Discord  = require('discord.js');
const config = require("../config.json");
var database = require("../database.js")

module.exports.run = (client, message, args) => {
    try{
        let suges = args.slice(0).join(' ');
        let servidor = message.guild.id === '564155007314690059';
        let canal = '565723491928899584';
        client.guilds.get(`564155007314690059`).channels.get(`565723491928899584`)
        .createWebhook(message.author.username, message.author.avatarURL)
        .then((w) => {
            w.send(`${suges}`)
        })
        if(!servidor){
            message.channel.send(`✅ | ${message.author}, sua sugestão foi enviada com sucesso para meu servidor de Support!`);
        } else if(servidor){
            message.channel.send(`✅ | ${message.author}, sua sugestão foi enviada para o canal <#${canal}>`);
        }
    } catch (error) {
        message.channel.send(`:x: | ${message.author}, infelizmente ocorreu um erro!`);
        console.log(error)
    }
}