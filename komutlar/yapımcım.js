const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, msg) => {
	var yapımcım = ayarlar.sahib
  msg.channel.send("Yapımcım: <@"+ yapımcım + ">")
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["komut"],
  kategori: "YETKİLİ KOMUTLARI",
  permLevel: 0
};
exports.help = {
  name: "yapımcım",
  description: "Yapımcımı Gösterir.",
  usage: "yapımcım"
};
