const { MessageEmbed } = require("discord.js");
const { LOCALE } = require("../util/EvobotUtil");
const i18n = require("i18n");

i18n.setLocale(LOCALE);

module.exports = {
  name: "getRole",
  description: i18n.__("Стать мужиком"),
  execute(message) {

let muzhik = '694283321307431005';

message.author.roles.add(muzhik)

  }
};
