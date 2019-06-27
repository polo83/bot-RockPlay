const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready" , function() {
    bot.user.setGame("RockPlay");
    console.log("Le bot a bient ete co");
});

bot.login("NTkzODMyOTc4MjcwOTEyNTM1.XRT8Wg.-SAv2a1Hscd2x0-bJgRBBFOKNGw")
