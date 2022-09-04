const {Client, MessageEmbed} = require('discord.js');
module.exports ={
    name: 'help',
    description:"this is a help command!",
    execute(message, args){
        number = 10;
        toddNumber = Math.floor(Math.random()*(number - 1 + 1))+1;
        if (toddNumber === 5){
            message.channel.send("You'll have all the help you need if you buy my game"
            ,{files:["https://res.cloudinary.com/meme-insider/t_article_cover/rjb8bh7gp9shmidjr59e.jpg"]}); 
        }
        else{
        const helpEmbed = new MessageEmbed()
        
            .setColor('#10128c')
            .setTitle('Command List')
            .setDescription('This here lists all current commands of the bot')
            .addField('Commands: ','hello, help, birthday, coinflip, futurama, insult, monday, ping, quote, todd, cumzone, sneed, friendlywiki, jeter, gigachad, vin, wood, and pufferfish', true)
            .addField('\u200b', '\u200b')
            .addField('In testing: ','mememaker, woodermark, zawarudo', true)
            .addField('\u200b', '\u200b')
            .setFooter('Make sure to use $ before typing in your command')

        message.channel.send(helpEmbed);
        }
    }
}