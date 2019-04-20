var mongoose = require('mongoose')
var Schema = mongoose.Schema
mongoose.connect("mongodb://yrustfocker1:lucas123@ds133556.mlab.com:33556/botjavascript5", { useNewUrlParser: true }, (err) => {
  useMongoClient: true
}, (err) => {
  if (err) return console.log('Erro ao conectar no database!')
  console.log('Conectado há Database!')
})

    var User = new Schema({
        _id: {
            type: String
        },
        level: {
            type: Number,
            default: 0
        },
        comum :{
          type: Number,
          default: 0
      },
      raro :{
          type: Number,
          default: 0
      },
      epico :{
          type: Number,
          default: 0
      },
      lendario :{
          type: Number,
          default: 0
      },
        xp: {
            type: Number,
            default: 0
        },
        coins: {
            type: Number,
            default: 0
    }})

    var Guild = new Schema({
        _id: {
          type: String
        },
        prefix: {
          type: String,
          default: 'diamond.'
        },
        lang: {
          type: String,
          default: 'pt-BR'
        },
        welcome: {
          type: Boolean,
          default: false
        },
        welcomechannel: {
          type: String,
          default: 'Nenhum'
        },
        desc: {
          type: String,
          default: "Use diamond.config desc <descrição do servidor> para setar uma descrição."
      },
      box: {
        type: Boolean,
        default: true
    },
    caixa: {
        type: Boolean,
        default: false
    },
    caixatipo: {
        type: String,
        default: "Comum"
    },
        welcomemsg: {
          type: String,
          default: 'Nenhuma'
        },
        byebye: {
          type: Boolean,
          default: false
        },
        saidachannel: {
          type: String,
          default: 'Nenhum'
        },
        saidamsg: {
          type: String,
          default: 'Nenhuma'
        },
        autorole: {
          type: Boolean,
          default: false
        },
        autoroleid: {
          type: String,
          dafault: 'Nenhum'
        },
        logs: {
          type: Boolean,
          default: false
        },
        logschannel: {
          type: String,
          dafault: 'Nenhum'
        }
        })

        var Guilds =  mongoose.model('Guilds', Guild)
        var Users = mongoose.model('Users', User)
        exports.Guilds = Guilds
        exports.Users = Users
