
module.exports = (client, message) => {
    // Ignore all bots
    if (message.author.client) return;
  
    // Ignore messages not starting with the prefix (in config.json)
    if (message.content.indexOf(client.config.prefix) !== 0) return;
  
    // Our standard argument/command name definition.
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    let servidor = client.servidores[message.guild.id] || Servidor.findOne({id:message.guild.id}, async (erro, servidor) => {
      //Essa parte dentro do seu evento mensagem
    if(erro) console.log(erro)
    if(!servidor)
     {
        //aqui o servidor vai ser criado, só colocar o código acima...
    }else 
  {
        client.servidores[message.guild.id] = {
            id: servidor.id,
            canalwelcome: servidor.canalwelcome,
            canalleave: servidor.canalleave,
            mensagemwelcome: servidor.mensagemwelcome,
            mensagemleave: servidor.mensagemleave,
            cargomoderador: servidor.cargomoderador,
            prefixo: servidor.prefixo,
            lang: servidor.lang,
            vip: servidor.vip
        }
        return
    }
  //O prefixo do servidor já está pronto, é só colocar
  let prefixo = servidor.prefixo
  
    // Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command);
  
    // If that command doesn't exist, silently exit and do nothing
    if (!cmd) return;
  
    // Run the command
    cmd.run(client, message, args);
    })};