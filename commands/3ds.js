const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    message.member.send("Du möchtest online auf dem 3DS mit Leon spielen? Dann füge ihn deiner Freundesliste hinzu! :eyes: 3DS-1650-6475-6689");
    message.delete();
}

module.exports.help = {
    name: '3ds',
    aliases: []
};