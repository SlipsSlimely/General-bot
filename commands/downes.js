const {Client, MessageEmbed} = require('discord.js');
module.exports = {
    name: `downes`,
    description:`this command posts an embed with downes' stats`,
    async execute(interaction, options, args){


        // This feature specifically counts up the number of times other functions are called
        // by users and then, when called, posts them for users to see
        await interaction.deferReply();
        const downesEmbed = new MessageEmbed()
        
        .setColor('#1328cf')
        .setTitle("Downes' Powers, Stats, and Abilities")
        .setDescription('Organized by origin')
        .addFields(
            {name: 'Generic Powers:', 
            value: 'Cloning, GumGum fruit, Control over Meme Hell'},
            {name: 'Bleach Powers:', 
            value: 'Immortal, Reiatsu level 769,000, Kido Master; can cast all Kido and Bakudo, Zanpakuto; Celestial Brush: Ink Bullets and Power Slash, Bankai: Unknown'},
            {name: `JoJo's Bizarre Adventure Powers:`, 
            value: 'Stand; Doobie Man, manipulates speed'},
        )
        .setFooter({text: 'Power creep at its finest.'});

            await interaction.editReply({embeds: [downesEmbed]});
        }
    }