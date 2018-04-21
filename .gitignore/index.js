const Discord = require ('discord.js');

const client = new Discord.Client();

var prefix = "h";

client.login("NDM2MTc2MTc5MTA4NTExNzQ0.DbycPw.vBUl21RpAzTA2b4_WvNvVQHJ-6M");

client.on("ready" , ()  => {
    console.log("Démarage")
    client.user.setGame("Bot en Dévelopement")

});

client.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
      return channel.send('Bienvenue sur History - 歷史 :flag_fr: !  ' + member.displayName)
    }).catch(console.error)
    // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)$ 

});

client.on("message", message => {

if(message.content === prefix + "help") {
    var help_embed = new Discord.RichEmbed()
    .setColor("#666666")
    .setTitle("Commandes disponible sur History - 歷史 :flag_fr: !")
    .addField("hguild" , "Affiches les commandes du bot")
    .setFooter("Menu d'aide History - 歷史")
    message.channel.sendMessage(help_embed)
    console.log("Un utilisateur a effectué la commande hhelp")
}
});

client.on("message", message => {

if(message.content === prefix + "guild") {

    var guild_embed = new Discord.RichEmbed()
    .setTitle ('Information du serveur')
    .setColor("#666666")
    .addField('Nom du serveur' , message.guild.name)
    .addField("Crée le" , message.guild.createdAt)
    .addField("Vous avez rejoin le" , message.member.joinedAt)
    .addField("Nombre total de membre" , message.guild.memberCount);
  
    message.channel.sendMessage(guild_embed) 
    console.log("un utilisateur a utilisé la commande hguild")
}
});
