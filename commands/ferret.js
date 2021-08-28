const { MessageEmbed } = require("discord.js");
const { LOCALE } = require("../util/EvobotUtil");
const i18n = require("i18n");

i18n.setLocale(LOCALE);

module.exports = {
  name: "ferret",
  description: i18n.__("Рандомная фреточка"),
  execute(message) {
    let commands = message.client.commands.array();
    var flip = [{files: ["./ferret/ferret.png"]},
    {files: ["./ferret/ferret1.png"]},
    {files: ["./ferret/ferret2.png"]},
    {files: ["./ferret/ferret3.png"]},
    {files: ["./ferret/ferret4.png"]},
    {files: ["./ferret/ferret5.png"]},
    {files: ["./ferret/ferret6.png"]},
    {files: ["./ferret/ferret7.png"]},
    {files: ["./ferret/ferret8.png"]},
    {files: ["./ferret/ferret9.png"]}]
var temp = flip[Math.floor(Math.random() * 10)]
message.channel.send(temp)

  }
};
