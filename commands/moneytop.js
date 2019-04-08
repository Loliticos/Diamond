var database = require("../database.js");
exports.run = (client, message, args) => {
    database.Users.findOne({
        "_id": message.author.id
    }, function(erromano, documano) {
        database.Users.find({}, function(erro, documento) {
            if (documento) {
                var position = documento.map(function(docu) {
                    return {
                        id: docu._id,
                        coins: docu.coins
                    }
                });
                position = position.sort(function(a, b) {
                    return b.coins - a.coins
                });
                position = position.filter(function(a) {
                    return client.users.get(a.id)
                })
                var desenvolvedores = ["439928694610460672"]
                var moneytop = "\n" + position.slice(0, 10).map((a, posicao) => "**" + (posicao + 1) + "** " + client.users.get(a.id).username + " - **" + Number(a.coins).toLocaleString() + "** " + (desenvolvedores.includes(a.id) ? "<:trophy1lugar:553698689319829504>" : "")).join("\n") + "";
                message.channel.sendMessage({
                    "embed": {
                        "description": "Top Usuário com Mais Coins:\nㅤ\n" + moneytop,
                        "color": 55512,
                        "footer": {
                            "icon_url": message.author.displayAvatarURL,
                            "text": "Sua pontuação: " + Number(documano.coins).toLocaleString() + " coins"
                        },
                        
                    }
                })
            }
        });
    })
}