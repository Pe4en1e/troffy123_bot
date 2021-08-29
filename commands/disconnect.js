const { MessageEmbed } = require("discord.js");
const { LOCALE } = require("../util/EvobotUtil");
const i18n = require("i18n");

i18n.setLocale(LOCALE);

module.exports = {
  name: "disconnect",
  description: i18n.__("Отключить бота от голосового чата"),
  execute(message) {
    const { channel } = message.member.voice;
    message.channel.delete(channel)
  }
};
