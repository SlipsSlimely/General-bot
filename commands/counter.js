const {Client, MessageEmbed} = require('discord.js');
module.exports = {
    name: `counter`,
    description:`this command shows you the total number of times most things have been called`,
    execute(interaction, options, killCount, kCount, jeterCount, woodCount, memeCount, quoteCount, vinCount, trueCount, familyCount, pogCount, reCount, futuramaCount){


        // This feature specifically counts up the number of times other functions are called
        // by users and then, when called, posts them for users to see
        const counterEmbed = new MessageEmbed()
        
            .setColor('#10128c')
            .setTitle("Here's the number of times the following commands have been called:")
            .setDescription('Only the heavily trafficked commands are listed')
            .addFields(
                {name: 'Quote:', value: ' ' + quoteCount},
                {name: 'Friendly meme:', value: ' ' + memeCount},
                {name: 'Kill:', value: ' ' + killCount},
                {name: 'jeter:', value: ' ' + jeterCount},
                {name: 'wood:', value: ' ' + woodCount},
                {name: 'vin:', value: ' ' + vinCount},
                {name: 'family guy:', value: ' ' + familyCount},
                {name: 'futurama:', value: ' ' + futuramaCount},
                {name: "Times Kpop was mentioned:", value: ' ' + kCount},
                {name: 'Times true was said:', value: ' ' + trueCount},
                {name: 'Times Retard was said:', value: ' ' + reCount},
                {name: 'Times Pog was said:', value: ' ' + pogCount},
            )

        interaction.reply({embeds: [counterEmbed]});
        }
    }