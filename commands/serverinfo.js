const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let embed = new discord.RichEmbed()
    .setAuthor(`**${message.guild.name}**`, "")
    .setThumbnail("")
    .addField(`**Server Name:**`, `${message.guild.name}`, true)
    .addField(`**Server Besitzer:**`, `${message.guild.owner}`, true)
    .addField(`**Benutzer:**`, `${message.guild.memberCount}`, true)
    .addField(`**Rollen:**`, `${message.guild.roles.size}`, true)
    .addField(`**Website:**`, `Momentan nicht verfügbar`, true)
    .addField(`**Erstellt am:**`, message.guild.createdAt)
    .addField(`**You joined at:**`, message.member.joinedAt)
    .addField(`**Discord:** `, `[Shrederplays](https://discord.gg/XR7Vw9J) |` + ` [KitTV](https://discord.gg/wCDAsCp) |` + ` [Raccrew](https://discord.gg/aRE4Jae)`, true)
    .setFooter("Prefix: ! | Der Bot ist immernoch in Entwicklung", bot.user.avatarURL)
    .setTimestamp()
    .setColor(0x002AFF);
  message.delete();
  message.channel.send(embed);
}

module.exports.help = {
  name: 'serverinfo',
  aliases: []
};