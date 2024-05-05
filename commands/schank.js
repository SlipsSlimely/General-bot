const {Client, MessageEmbed} = require('discord.js');
module.exports = {
    name: `schank`,
    description:`this command posts an embed with schank's stats`,
    async execute(interaction, options, args){


        // This feature specifically counts up the number of times other functions are called
        // by users and then, when called, posts them for users to see
        await interaction.deferReply();
        const schankEmbed = new MessageEmbed()
        
        .setColor('#8816e0')
        .setTitle("Schank's Powers, Stats, and Abilities")
        .setDescription('Organized by origin')
        .addFields(
            {name: 'Generic Powers:', 
            value: 'Drawing'},
            {name: 'Bleach Powers:', 
            value: 'Reiatsu level ???, Kido Master, Zanpakuto: Perfect Hypnosis, Control of the Hogyoku, Instant Regeneration, Immortal, Dimensional Travel, Genius Intellect'},
            {name: `JoJo's Bizarre Adventure Powers:`, 
            value: 'Stand; Cardiac Arrester, High stats and can give someone a heart attack but only 3 times ever'},
        )
        .setFooter({text: 'The future of people that lose to DESTRUCTOR.'});

            await interaction.editReply({embeds: [schankEmbed]});
        }
    }