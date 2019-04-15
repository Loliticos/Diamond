const Discord = require ("discord.js");
const fs = require ("fs");

exports.run = (client, message, args, prefix) => {

    if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('Você não possuí a permissão **BAN_MEMBERS** Para utilizar este comando!');
    if(!args[0] || args[0 == "help"]) return message.reply('Forma de utilizar: diamond.setprefix <Novo prefixo>');

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    prefixes[message.guild.id] = {
        prefixes: args[0]
    };
    
    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
        if (err) console.log(err)
    });
    
    let sEmbed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Prefixo alterado com sucesso!')
    .setDescription*(`Alterado para: ${args[0]}`);

    message.channel.send(sEmbed);


}

module.exports.help = {
    name: "setprefix"
};
