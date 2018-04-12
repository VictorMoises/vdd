console.log("Conectando...")
const Discord = require('discord.js');
const client = new Discord.Client({
    autoReconnect: true,
    max_message_cache: 0
    
});

const moment = require('moment');
moment.locale('pt-BR');

const prefix = "-"
const token = process.env.token;

let guilds = {};

client.on('ready', function () {
  console.log(`Conectado com Sucesso a ${client.user.username}#${client.user.discriminator}`);
  clientUser = client.user;
  clientUser.setActivity('Pablo Vittar do Prédio. ', { type: 'PLAYING' });

client.on('guildMemberAdd', member => {
    "embed": {
    "description": "**Bem - Vindo ao Nosso Servidor, espero que curta bastante.**"
    "color": 16711680,
    "image": {
    "url":
    client.guilds.get(member.guild.id).channels.get("418834373610307586").send(`Olá ${member}, Obrigado por entrar no **Player South - Brasil** Leia as regras e tenha uma boa estadia. `);
   })



client.login(token)


client.on("message", (message) => {
    
    if(message.content.startsWith(prefix + "avatar")){
        let user = message.mentions.users.first(); 
        if (message.author.bot) return message.reply("**Bots não podem usar esse comando!**")
        if (message.mentions.users.size < 1) return message.channel.sendMessage({
        "embed": {
          "description": "**" + message.author.username + "**",
          "color": 16711680,
          "image": {
            "url": message.author.displayAvatarURL
          }
        }
      });
      message.channel.sendMessage({
        "embed": {
          "description": "**" + message.mentions.users.first().username + "**",
          "color": 16711680,
          "image": {
            "url": message.mentions.users.first().displayAvatarURL
              }
            }
         });
    }

})
