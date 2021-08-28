const { MessageEmbed } = require("discord.js");
const { LOCALE } = require("../util/EvobotUtil");
const i18n = require("i18n");

i18n.setLocale(LOCALE);

module.exports = {
  name: "coin",
  description: i18n.__("Подбросить монетку"),
  execute(message) {
    let commands = message.client.commands.array();
    var flip = ["Орел",
    "Решка"]
var temp = flip[Math.floor(Math.random() * 2)]
message.channel.send(temp)

  }
};
