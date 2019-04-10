exports.run = (client, message, args) => {

    let razaou = args.slice(0).join(' ');


    if (!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.reply(":x: | **Você não tem permissão para fazer uma votação!**");

    if (!razaou.length < 1) {

        message.delete();
        message.channel.sendMessage({
            "embed": {
              "title": "⏲ | Votação iniciada:",
              "description": "```\n" + message.content.replace("diamond.iniciarvotacao ", "") + "```",
              "color": 55512,
              "timestamp": new Date(),
              "footer": {
                "icon_url": message.author.displayAvatarURL,
                "text": message.author.username
              },
              "thumbnail": {
                "url": message.author.displayAvatarURL
              }
            }
          }).then(votacao => {

            setTimeout(() => {
                votacao.react('👍');
            }, 500);
            setTimeout(() => {
                votacao.react('👎');
            }, 1000);
            setTimeout(() => {
                votacao.react('🤷');
            }, 1500);

            var sim = 0;
            var nao = 0;
            var talvez = 0;

            const collector = votacao.createReactionCollector((r, u) => (r.emoji.name === '👍' || r.emoji.name === '👎' || r.emoji.name === '🤷') && u.id !== client.user.id);

            collector.on('collect', r => {
                switch(r.emoji.name) {

                    case '👍':
                        sim = sim + 1
                    break;
                    case '👎':
                        nao = nao + 1
                    break;
                    case '🤷':
                        talvez = talvez + 1
                    break;

                }

            })

            if(votação.reaction("👍").remove) {
                sim = sim - 1
            }

            if(votação.reaction("👎").remove) {
                nao = nao - 1
            }

            if(votação.reaction("🤷").remove) {
                talvez = talvez - 1
            }

            setTimeout(() => {
                votacao.delete()
                message.channel.sendMessage({
                    "embed": {
                      "title": "⏲ | Votação finalizada:",
                      "description": `\`\`\`\n" + message.content.replace("diamond.votação ", "") + "\`\`\`\n**Resultado:**\n\n👍 **${sim}** votos\n👎 **${nao}** votos\n🤷 **${talvez}** votos`,
                      "color": 55512,
                      "timestamp": new Date(),
                      "footer": {
                        "icon_url": message.author.displayAvatarURL,
                        "text": message.author.username
                      },
                      "thumbnail": {
                        "url": message.author.displayAvatarURL
                      }
                    }
                  });
            }, 5 * 60 * 1000);

        })

    } else {
        message.reply(":x: | **Diga a votação que quer iníciar!**");
    }

}