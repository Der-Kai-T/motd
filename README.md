# Message-of-the-Day-Bot
This is a bot requested by u/rochesterrr on r/discordapp on reddit (https://www.reddit.com/r/discordapp/comments/iksn30/random_daily_message_bot/?utm_source=share&utm_medium=web2x&context=3). It's written with node.js as a framework.

## Installation (short)
1. Install [node.js](https://nodejs.org/) on your System
2. Download or Clone the content of this repository.
3. Copy config.json.sample to config.json and insert values (see below).
4. Edit Messages in messages.json
5. run bot.js with node (node bot.js)
6. make sure the bot is running and it will post a random Message of the Day.

## Config.json
```
{
    "prefix": "?",
    "token": "",
    "channel": "",
    "cron": "*/5 * * * *"
}    
```
You need to set some information in the config.json.

`prefix` sets the letter or symbol the bot should react to. Currently there aren't any commands to control the bot, so this setting can be ignored. I intend to add functionality to delete or add messages to the list via Discord.

`token` is used to authenticate the bot agains discord. To create one, you need a discord developer account. Visit https://discord.com/developers/ to get one. You can find a tutorial to create a discord application [here](https://discordpy.readthedocs.io/en/latest/discord.html). It's for use with thy python-Library but as its only the discord-part, it's the same for this bot. The only permissions the bot currently needs are `Send Messages` and `Manage Messages`.

`channel` is for the ID of the desired channel. To get the ID you need to set your Discord App to Developer Mode (Settings > Appearances > Developer Mode). If activated you can right-click on the channel an copy the Channel ID.

`cron` is the cron-syntax used by node-schedule. You can use https://crontab.guru/ to get the correct Syntax. Not all features are currently supported (there are no W, L and #), You can find more [here](https://www.npmjs.com/package/node-schedule)
 
