const { MessageEmbed } = require("discord.js");
const { LOCALE } = require("../util/EvobotUtil");
const i18n = require("i18n");

i18n.setLocale(LOCALE);

module.exports = {
  name: "homyak",
  description: i18n.__("Гифка с хомяком"),
  execute(message) {
    message.channel.send({files: ['./images/chompik.gif']})
  }
};
