const {Client, MessageEmbed} = require('discord.js');
module.exports = {
    name: `colton`,
    description:`this command posts an embed with colton's stats`,
    async execute(interaction, options, args){


        // This feature specifically counts up the number of times other functions are called
        // by users and then, when called, posts them for users to see
        await interaction.deferReply();
        const coltonEmbed = new MessageEmbed()
        
        .setColor('#10128c')
        .setTitle("Colton's Powers, Stats, and Abilities")
        .setDescription('Organized by origin')
        .addFields(
            {name: 'Generic Powers:', 
            value: 'Ultra Instinct, can bestow Stands, Tier Sense, One For All, Wood Clan Reality Warping'},
            {name: 'Bleach Powers:', 
            value: 'Instant Regeneration (weakened), Time Manipulation (weakened), Reiatsu level 400,000, Kido Proficiency 15, Hado No. 1 Sho, Hado No. 63 Raikoho, Bakudo No. 1 Sai, Bakudo No. 62 Hyapporankan, Hadō #73. Soren Sōkatsui, Bakudō #79. Kuyō Shibari, Bakudō #81. Dankū, Bakudō #26. Kyokkō, Zanpakuto: Dokubutsu Oni (controls plants), Bankai: ???'},
            {name: `JoJo's Bizarre Adventure Powers:`, 
            value: 'Stand; Bohemian Father: allows the user to control sound'},
        )
        .setFooter({text: 'The most rooted of the group.'});

            await interaction.editReply({embeds: [coltonEmbed]});
        }
    }