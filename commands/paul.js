const {Client, MessageEmbed} = require('discord.js');
module.exports = {
    name: `paul`,
    description:`this command posts an embed with paul's stats`,
    async execute(interaction, options, args){


        // This feature specifically counts up the number of times other functions are called
        // by users and then, when called, posts them for users to see
        await interaction.deferReply();
        const paulEmbed = new MessageEmbed()
        
        .setColor('#10128c')
        .setTitle("Paul's Powers, Stats, and Abilities")
        .setDescription('Organized by origin')
        .addFields(
            {name: 'Generic Powers:', 
            value: 'The Infinite Forever Gay, True Enlightenment, Elemental Manipulation, Planeswalker Spark'},
            {name: 'Bleach Powers:', 
            value: 'Reiatsu level 428,000, Kido Proficiency 25, Hado No. 11 Tsuzuri Raiden, Hado No. 96 Itto Kaso, Bakudo No. 4 Hainawa, Bakudo No. 63 Sajosabaku, Sight Sharing (weakened), Zanpakuto: Thunder Bird (controls the weather), Bankai: Elemental Storm (Powers up the users elemental abilities)'},
            {name: `JoJo's Bizarre Adventure Powers:`, 
            value: `Stand; Magician's Shadow: Allows the user to manipulate other peoples bodies`},
        )
        .setFooter({text: 'Sometimes, true sight requires the gayest wills.'});

            await interaction.editReply({embeds: [paulEmbed]});
        }
    }