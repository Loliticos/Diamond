const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs"); 
const client = new Discord.Client();
const config = require("./config.json");
client.config = config;


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.servidores = new Discord.Collection()

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});


//STREAMING = TRANSMITINDO
//LISTENING = OUVINDO
//PLAYING = JOGANDO
//WATCHING = ASSISTINDO

client.on('message', message => {
  if(message.content.startsWith('<@561359827331186688>')) {
      const embed = new Discord.RichEmbed()

      .setTitle(`Olá ${message.author.tag} está perdido?`)
      .setDescription('Opa, encontra-se perdido❓ Bom, eu ainda estou em beta, porém, meu comando de ajuda é **diamond.help**! Verifique!')
      .setThumbnail(client.user.avatarURL)
      .setFooter(" Diamond#7554 © | Direitos Reservados.", client.user.displayAvatarURL)

      message.channel.send(embed);
  }
});


client.on('message', message => {
  if (!message.content.startsWith(config.prefix)) return //Não processa mensagens que não começa com o prefixo do bot.
    let args = message.content.split(' ');
  let comando = args.shift().slice(config.prefix.length).toLowerCase();

  let cmd = client.commands.get(comando) || client.commands.get(client.aliases.get(comando));
  if (cmd) {
    cmd.run(client, message, args) //Executa o comando
  }
  else {
    return message.reply(`O Comando  \`${comando}\` Não foi Encontrado! Certifique-se de ter Digitado Corretamente!`)
  }
});

client.on('message', message => {
  if(message.author.client) return; //não responde bot
  if(message.channel.type == "dm") return; //não reponde dm
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
          prefixes: client.config.prefix
      };
  }

  let prefix = prefixes[message.guild.id].prefixes;

  if(!message.content.startsWith(prefix)) return; //responde só ao seu prefixo
  let args = message.content.split(prefix.lenght).trim().split(/\s+/g);
  let command = args.shift().toLowerCase();

  let arquivocmd = client.commands.get(command);
  if(arquivocmd) arquivocmd.run(client,message,args);
  else message.channel.send("")

});
client.on('ready', () => {
  var i = 0;

  timer = client.setInterval(function() {
      var uptime = `${client.uptime}`;
      var seg = Math.floor(uptime / 1000) % 60;
      var min = Math.floor(uptime / (1000 * 60)) % 60;
      var horas = Math.floor(uptime / (1000 * 60 * 60)) % 24;
      let tempo = `Estou online a ${horas} horas, ${min} minutos e ${seg} segundos!`

      var gamePresence = [
          `Meu Prefixo É: diamond.`,
          `Estou em Beta!`,
          `Meu Criador é o yRustFocker#6420`,
          `Estou Sendo Criado em JavaScript`,
          `Estou em BETA!`,
          `Em ${client.guilds.size} Servidores | Conectada com ${client.users.size} usuarios`,
          `${tempo}`
      ];
      client.user.setPresence({
          game: {
              name: gamePresence[i % gamePresence.length],
              type: 0
          }
      });
      i++;
  }, 180000);
});

  client.commands = new Enmap();
 
  fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./commands/${file}`);
      let commandName = file.split(".")[0];
      console.log(`Comando Carregado: ${commandName}`);
      client.commands.set(commandName, props);
    });
  });


  client.login("Seu Token Aqui."); 