/**
 * Module Imports
 */

const { Client, Collection, DiscordAPIError } = require("discord.js");
const MessageEmbed = require('discord.js');
const { readdirSync } = require("fs");
const { join } = require("path");
const { TOKEN, PREFIX } = require("./util/EvobotUtil");
const i18n = require("i18n");
const { time } = require("console");
let maincolor = '#884bb5'
let prefix = '>'
let greenpieceId = '383887543986552833'

const client = new Client({
  disableMentions: "everyone",
  restTimeOffset: 0
});

client.login(TOKEN);
client.commands = new Collection();
client.prefix = PREFIX;
client.queue = new Map();
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

i18n.configure({
  locales: ["ar", "de", "en", "es", "fr", "it", "ko", "nl", "pl", "pt_br", "ru", "sv", "th", "tr", "vi", "zh_cn", "zh_sg", "zh_tw"],
  directory: join(__dirname, "locales"),
  defaultLocale: "ru",
  retryInDefaultLocale: true,
  objectNotation: true,
  register: global,

  logWarnFn: function (msg) {
    console.log("warn", msg);
  },

  logErrorFn: function (msg) {
    console.log("error", msg);
  },

  missingKeyFn: function (locale, value) {
    return value;
  },

  mustacheConfig: {
    tags: ["{{", "}}"],
    disable: false
  }
});

/**
 * Client Events
 */

client.on("warn", (info) => console.log(info));
client.on("error", console.error);
client.on("ready", () => {
  console.log('Bot enabled!')
})


/**
 * Import all commands
 */
const commandFiles = readdirSync(join(__dirname, "commands")).filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(join(__dirname, "commands", `${file}`));
  client.commands.set(command.name, command);
}

client.on("message", async (message) => {
  if (message.author.bot) return;
  if (!message.guild) return;

  const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(PREFIX)})\\s*`);
  if (!prefixRegex.test(message.content)) return;

  const [, matchedPrefix] = message.content.match(prefixRegex);

  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command =
    client.commands.get(commandName) ||
    client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;

  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 1) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply(
        i18n.__mf("common.cooldownMessage", { time: timeLeft.toFixed(1), name: command.name })
      );
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply(i18n.__("common.errorCommand")).catch(console.error);
  }
});

client.on('message', message => { // пасхалка ыы
  if (message.content === 'бот хуйня') {
    message.channel.send({files: ["./images/neponyal.jpg"]})
  }
});

client.on('message', message => { // пасхалка ыы
  if (message.content === 'Бот хуйня') {
    message.channel.send({files: ["./images/neponyal.jpg"]})
  }
});

client.on('message', message => {
  if(message.content === 'Дай фреточку') {
      message.channel.send('Держи фреточку', { files: ["./images/test.jpg"] })
  }
});

client.on('message', message => {
  if(message.content === 'Украина') {
      message.channel.send('Украина это город в котором живут рабы гитлера даже похуй что он немец, хотя одно и тоже, далее они все пизделе в тт, в лк, тг, вк, и прочих соц сетях что Россия пососет у Украины, в итоге нихуя ,если начнется война. то будет пизда Украине в России потому что более умные люди живут', { files: ["./images/ukraine.jpg"] })
  }
});

client.on('message', message => {
  if(message.content === 'Украина') {
      message.react('🇩🇪')
  }
});

client.on('message', message => {
  if(message.content === 'Гниль, расскажи о себе') {
      message.reply('Меня зовут Виталя и я на голову ебнутый долбаеб. Моя мать хотела меня убить и когда меня несли с аборта в пакете из ашана, меня пинали в этом пакете как первоклассники пинают сменку. Но, к сожалению для общества, я выжил и теперь отравляю жизнь другим людям, неся хуйню. В детстве я кидал камни в машины, и съебывал на заброшки в подвал. Я ебаная вата, смотрю Кисилева и считаю Украину городом, а так-же хочу сломать ебало Ричарду, ДмитриюГ и ГринПису228 за то, что я не выкупаю рофлов. Человеку, который набьет им ебало я закажу пиццу после того как отработаю смену. А еще мой ник в майнкрафте троффи123, я недоскамер и я узнал, что Денис из Москвы, а так-же слил фотки его несуществуещего брата. Я отправляю картинку с ip-логгерром думая, что на это кто-либо поведется. Я искренне не понимаю бренность своего существования. А еще мой друг это iznaf30', { files: ["./images/krym.jpg"] });
  }
})

client.on('ready', () => { // Activity  Test Mode ⚠️  Updating...
  client.user.setActivity('>help')
});

client.on('message', (message) => {
  if(message.content === 'Троффи кто?') {
      message.channel.send('Гей')
  }
});

client.on('message', message => {
  if(message.content === 'Гей') {
      message.react('🏳️‍🌈')
  }
});

client.on('message', message => {    // &yn (randomaizer)
  if (message.content.startsWith(prefix + 'yn')) {
      var flip = [":regional_indicator_y: :regional_indicator_e: :regional_indicator_s:",
                  ":regional_indicator_n: :regional_indicator_o:"]
              var temp = flip[Math.floor(Math.random() * 2)]
message.channel.send(temp)
    }
});

client.on('message', message => {    // &yn (randomaizer)
  if (message.content === 'https://tenor.com/view/kot%D0%BA%D0%BE%D1%82-cat-headphones-head-bop-music-gif-17448544') {
      var flip = ["зрителям не похуй",
                  "зрителям не похуй",
                  "пошел нахуй, заебал уже"]
              var temp = flip[Math.floor(Math.random() * 3)]
message.channel.send(temp)
    }
});

client.on('message', message => {
  if(message.content === 'троффи пошел нахуй') {
    message.channel.send('Ты', {files: ["./images/serega-pirat-dota2.gif"]})
  }
});

client.on('message', message => {
  if(message.content === 'Суп') {
    message.channel.send('салат. https://youtu.be/b4UdVHRXpsc');
    message.react('🍜');
    message.react('🥗')
  }
});

client.on('message', message => {
  if(message.content.includes('негры') && message.author.id === greenpieceId) {
    message.reply('аааа ыыыы негры негры негры');
    message.reply('ыыыы ааа тупые негры');
    message.reply('убить негров');
    message.reply('уыуыыыыы негры сукааа')
  }
});

client.on('message', message => {
  if(message.content.includes('Негры') && message.author.id === greenpieceId) {
    message.reply('аааа ыыыы негры негры негры');
    message.reply('ыыыы ааа тупые негры');
    message.reply('убить негров');
    message.reply('уыуыыыыы негры сукааа')
  }
});

client.on('message', message => {
  if(message.content.includes('Niggers') && message.author.id === greenpieceId) {
    message.reply('аааа ыыыы негры негры негры');
    message.reply('ыыыы ааа тупые негры');
    message.reply('убить негров');
    message.reply('уыуыыыыы негры сукааа')
  }
});

client.on('message', message => {
  if(message.content.includes('niggers') && message.author.id === greenpieceId) {
    message.reply('аааа ыыыы негры негры негры');
    message.reply('ыыыы ааа тупые негры');
    message.reply('убить негров');
    message.reply('уыуыыыыы негры сукааа')
  }
});

client.on('message', message => {
  if(message.content.includes('негритята') && message.author.id === greenpieceId) {
    message.reply('аааа ыыыы негры негры негры');
    message.reply('ыыыы ааа тупые негры');
    message.reply('убить негров');
    message.reply('уыуыыыыы негры сукааа')
  }
});

client.on('message', message => {
  if(message.content.includes('Негритята') && message.author.id === greenpieceId) {
    message.reply('аааа ыыыы негры негры негры');
    message.reply('ыыыы ааа тупые негры');
    message.reply('убить негров');
    message.reply('уыуыыыыы негры сукааа')
  }
});

client.on('ready', () => {
  client.channels.cache.get('694326993247797319').send('троффи пришел отравлять жизнь')
})

client.on('message', message => {
  if(message.content === 'https://media.tenor.co/videos/c195221e587677ff5bcb43e1c4aac3b1/mp4') {
    message.channel.send({files: ['./images/idi_nahui.gif']})
    message.reply('Заебал блять ыыыы бебра');
    message.reply('ааа ыыы тяу тяу всм чо бебру хоч🗿');
    message.channel.send('Я шучу про бебру и не чувствую себя лишнем в обществе')
  }
})

client.on('message', message => {
  if(message.content === 'хочу лого дурки') {
    let logo = (message.guild.icon.link);
    message.channel.send
  }
})