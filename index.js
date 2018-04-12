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

client.on('guildMemberAdd', member => {
    client.guilds.get(member.guild.id).channels.get("418834373610307586").send(`Olá ${member}, Obrigado por entrar no **Player South - Brasil** Leia as regras e tenha uma boa estadia. `);
   })



client.login(token)


client.on("message", (message) => {
    
    let user = message.mentions.users.first(); 
    let reason = args.slice(1).join(' ');
    if (!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.reply("**VocÃª nÃ£o tem permissÃ£o para mutar alguem!**");
    if (message.mentions.users.size < 1) return message.reply("**Mencione alguem para eu mutar!**");
    if (reason.length < 1) return message.reply('**Diga o tempo em minutos para eu mutar!**');
    if(message.guild.member(message.mentions.users.first()).highestRole.position >= message.member.highestRole.position){
        message.reply("**Este usuÃ¡rio tem um cargo maior que o seu!**");
    } else {
        if (message.guild.roles.find("name", cargoNOME)){
            var mute = message.guild.roles.find("name",cargoNOME)
            for (var i =0;i < mute.members.size;i++){
                if (mute.members.array()[i].id ==  message.mentions.users.first().id){
                message.reply("UsuÃ¡rio jÃ¡ estÃ¡ mutado(a)!")
            }}
            message.guild.members.get(message.mentions.users.first().id).addRole(mute.id);
                setTimeout(function() {
                    message.guild.members.get(message.mentions.users.first().id).removeRole(mute.id);
                    message.channel.sendMessage("**<@" + message.mentions.users.first().id + ">, VocÃª foi desmutado(a)**");
                },args[1] * 1000 * 60)
                message.reply("**UsuÃ¡rio mutado por " + args[1] + "minutos**");
               message.mentions.users.first().send("**VocÃª foi mutado(a) no servidor " + message.guild.name + " por " + args[1] + "m !**");
               message.mentions.users.first().send("**VocÃª foi desmutado(a) no servidor " + message.guild.name + "!**");
            if(!mute){
            message.reply("**Use o comando novamente, pois o cargo " + cargoNOME + " nÃ£o existia aqui!**");
            message.guild.createRole({
                name: cargoNOME
            })
        }
    }
        
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
