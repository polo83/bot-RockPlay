const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready" , function() {
    bot.user.setGame("RockPlay");
    console.log("Le bot a bient ete co");
});

bot.login("NTkzODMyOTc4MjcwOTEyNTM1.XRUMWQ.cxaF354oMeNXB71AObylINMFjbA")
