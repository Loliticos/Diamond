const Discord = module.require('discord.js');

var Responses = [
    "Sim",
    "Não",
    "Talvez",
    "Não sei, tente novamente",
    "Você sabe a resposta",
    "A resposta está no fundo do seu coração",
    "Minhas fontes dizem quê sim",
    "Não seja bobo, a resposta é sim",
    "Definitivamente sim",
    "É possível",
    "Definitivamente não",
    "Tem uma chance de isso ser verdade",
    "Tem uma chance de isso ser falso",
    "Não, é apenas uma ilusão criada pelo seu sub-consciente"
];

module.exports.run = async (client, message, args) => {

    if(!args[0]){
        return message.channel.send(":x: " + "| Por Favor, Mencione um Usuário ou Escreva Algo!")
    }

    if (args[0]) {
        message.channel.send(Responses[Math.floor(Math.random() * Responses.length)]);
    }

}
module.exports.help = {
    name: "ball",
    description: "Pergunte algo para mim"
}