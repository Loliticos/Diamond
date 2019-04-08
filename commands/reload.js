const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    
if (message.author.id !== "439928694610460672") return message.reply("⚠️ `**|**`Você não pode executar este comando!");

try {
} catch (erro) {
  console.log(erro)
}
    
    if (!args || args.length < 1)
      return message.reply("⚠️ | Escreva o comando que deseja reiniciar!");
  
      const commandName = args[0];
  
      if(!client.commands.has(commandName)) {
        return message.reply("⚠️ | Comando inexistente!");
      }
  
      delete require.cache[require.resolve(`./${commandName}.js`)];
  
      client.commands.delete(commandName);
      const props = require(`./${commandName}.js`);
      client.commands.set(commandName, props);
      message.reply(`✔️ | O comando **${commandName}** foi recarregado com sucesso!`);
  };

  module.exports.help = {
    name:"reload"
}