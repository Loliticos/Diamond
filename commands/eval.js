exports.run = async (client, message, args, color, prefix) => {

    const Discord = require('discord.js')

    if (message.author.id !== '439928694610460672' && message.author.id !== '439928694610460672') return;
    try {
        let nylindao = args.join(" ");
        let nytotoso = eval(nylindao);

        if (typeof nytotoso !== 'string')
            nytotoso = require('util').inspect(nytotoso, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setAuthor('eval')
        .setColor('RANDOM')
        .addField('Entrada 📥 ', nylindao)
        .addField(' Saida 📤',  nytotoso)
        .setFooter(" Diamond#7554 © | Direitos Reservados.", client.user.displayAvatarURL)
        .setTimestamp();

  message.channel.send(embed)
    } catch(e) {
        message.channel.send(e);
    }
}

exports.help = { 
    name: 'eval',
}