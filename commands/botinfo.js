const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let embed = new discord.RichEmbed()
    .setAuthor(`ShrederBot`, bot.user.avatarURL)
    .setThumbnail(bot.user.avatarURL)
    .addField(`Version:`, `3.2.4`, true)
    .addField(`Node JS:`, `v10.5.0`, true)
    .addField(`Library:`, `[discord.js](https://discord.js.org/#/)`, true)
    .addField(`Server:`, `${bot.guilds.size}`, true)
    .addField(`Benutzer:`, `${bot.users.size}`, true)
    .addField(`Website:`, `In Entwicklung... 0% Abgeschlossen.`, true)
    .addField(`Erstellt am:`, bot.user.createdAt)
    .addField(`Developer:`, `@Leon|ShrederPlays#2076`, true)
    .addField(`**Discord:** `, `[Shrederplays](https://discord.gg/XR7Vw9J) |` + ` [KitTV](https://discord.gg/wCDAsCp) |` + ` [Raccrew](https://discord.gg/aRE4Jae)`, true)
    .setFooter("Prefix: ! | Der Bot ist immernoch in Entwicklung", bot.user.avatarURL)
    .setTimestamp()
    .setColor(0xFF0092);
  message.delete();
  message.channel.send(embed);
}

module.exports.help = {
  name: 'botinfo',
  aliases: ['binfo']
};