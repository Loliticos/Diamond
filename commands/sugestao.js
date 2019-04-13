const Discord  = require('discord.js');
const config = require("../config.json");
var database = require("../database.js")

module.exports.run = (client, message, args) => {
    try{
        let suges = args.slice(0).join(' ');
        let servidor = message.guild.id === '533007424257261590';
        let canal = '566378614078308382';
        client.guilds.get(`533007424257261590`).channels.get(`566378614078308382`)
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
        message.channel.send(`:x: |  Oops! ${message.author}, infelizmente ocorreu um erro!`);
        console.log(error)
    }
}