const { MessageEmbed } = require("discord.js");
const { LOCALE } = require("../util/EvobotUtil");
const i18n = require("i18n");

i18n.setLocale(LOCALE);

module.exports = {
  name: "about",
  aliases: ["a"],
  description: i18n.__("Об этом боте"),
  execute(message) {
    let commands = message.client.commands.array();

    let about = new MessageEmbed()
      .setTitle(i18n.__mf("Информация о боте", { botname: message.client.user.username }))
      .setDescription(i18n.__("Developed by Pe4en1e"))
      .addField('Версия discord.js:', '12.5.1')
      .addField('Лицензия:', 'ISC')
      .setColor("#663096");

    about.setTimestamp();

    return message.channel.send(about).catch(console.error);
  }
};