const Discord = require("discord.js");
const moment = require("moment")
require("moment-duration-format")

exports.run = (client, message, args) => {
    message.delete().catch(O_o=>{});

    let duration = moment.duration(client.uptime).format('D [d], H [h], m [m], s [s]');
    let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;

    message.channel.send(`<:uptime:544233623499440156> | **${message.author}**, estou online à: **${duration}**`);
}
//packpage que precisa baixar.
//npm i moment
//nnpm i moment-duration-format

module.exports.help = {
name: "uptime"
}