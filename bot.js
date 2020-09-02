//Load all modules
const Discord = require("discord.js");
const ytdl = require("ytdl-core");
var  schedule = require("node-schedule");


//Load configuration

const {prefix, token, channel, cron} = require("./config.json");


//Create Bot-Instance
const client = new Discord.Client();

const chan = client.channels.cache.find(channel => channel.name === 'bottest');

client.once("reconnecting", () => {
    console.log("Reconnecting!");
})

client.once("disconnect", () =>{
    console.log("Disconnect!");
})

client.on("ready", () => {
    console.log("Ready!");
   // client.channels.cache.get(channel).send("MOTD-Bot online");
    client.user.setPresence({
        game: {
            name: 'I am alive',
            type: 'PLAYING'
        },
        status: 'online'
    })
   //motd();
   //Set Scheduler Using Cron Syntax
   //var job = schedule.scheduleJob('0 12 * * *',);  // every Day on noon
   var job = schedule.scheduleJob(cron, function(){
        var message_list    = require("./messages.json");
        var keys            = Object.keys(message_list); //Create array of keys
        var randIndx        = Math.floor(Math.random() * keys.length); // generate random index
        var randKey         = keys[randIndx];
        var txt             = message_list[randKey];
        client.channels.cache.get(channel).send(txt);
        console.log(txt);
   });
})



client.on("message", async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

   
});



client.login(token);

