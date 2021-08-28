const { MessageEmbed } = require("discord.js");
const { LOCALE } = require("../util/EvobotUtil");
const i18n = require("i18n");

i18n.setLocale(LOCALE);

module.exports = {
  name: "cat",
  description: i18n.__("Рандомный котик"),
  execute(message) {
    let commands = message.client.commands.array();
    var flip = [{files: ["./cats/cat.png"]},
    {files: ["./cats/cat1.png"]},
    {files: ["./cats/cat2.png"]},
    {files: ["./cats/cat3.png"]},
    {files: ["./cats/cat4.png"]},
    {files: ["./cats/cat5.png"]},
    {files: ["./cats/cat6.png"]},
    {files: ["./cats/cat7.png"]},
    {files: ["./cats/cat8.png"]},
    {files: ["./cats/cat9.png"]}]
var temp = flip[Math.floor(Math.random() * 10)]
message.channel.send(temp)

  }
};
