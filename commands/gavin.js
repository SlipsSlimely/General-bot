const {Client, MessageEmbed} = require('discord.js');
module.exports = {
    name: `gavin`,
    description:`this command posts an embed with gavin's stats`,
    async execute(interaction, options, args){


        // This feature specifically counts up the number of times other functions are called
        // by users and then, when called, posts them for users to see
        await interaction.deferReply();
        const gavinEmbed = new MessageEmbed()
        
        .setColor('#d4af37')
        .setTitle("Gavin's Powers, Stats, and Abilities")
        .setDescription('Organized by origin')
        .addFields(
            {name: 'Generic Powers:', 
            value: 'Ultimate Retardism, Gavin Undertale Form, Can survive in any climate anywhere'},
            {name: 'Bleach Powers:', 
            value: 'Reiatsu level 450,000, Kido Proficiency 70, Hado #12 Fushibi, Hado #88 Hiryu Gekizo Shinten Raiho, Hado #31 Shakkaho, Hado #73 Soren Sokatsui, Hado #54 Haien, Hado #91 Senju Koten Taiho, Bakudo #9 Geki, Bakudo #81 Danku, Bakudo #21 Sekienton, Bakudo #99 Bankin, Zanpakuto: Inochigake, Bankai: Sword becomes a hammer powered up by explosions'},
            {name: `JoJo's Bizarre Adventure Powers:`, 
            value: 'Stand; Owner of a Lonely Heart: High stats and the ability to go invisble'},
        )
        .setFooter({text: 'Weaponizing low intelligence since 1999.'});

            await interaction.editReply({embeds: [gavinEmbed]});
        }
    }