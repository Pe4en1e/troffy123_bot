const { MessageEmbed } = require("discord.js");
const { LOCALE } = require("../util/EvobotUtil");
const i18n = require("i18n");

i18n.setLocale(LOCALE);

module.exports = {
  name: "dickSize",
  description: i18n.__("Узнай размер пиписьки онлайн"),
  execute(message) {
    let commands = message.client.commands.array();

    var dickSize = ["3",
                    '7',
                    '4',
                    '8',
                    '9',
                    '15',
                    '60',
                    '999999999999999999 в жопе у дениса',
                    '322',
                    '-5',
                    "у тебя вагина чел"]
    var temp = dickSize[Math.floor(Math.random() * 11)]
    message.channel.send(temp)
      }

};
