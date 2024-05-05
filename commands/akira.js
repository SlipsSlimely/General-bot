const {Client, MessageEmbed} = require('discord.js');
module.exports = {
    name: `akira`,
    description:`this command posts an embed with akira's stats`,
    async execute(interaction, options, args){


        // This feature specifically counts up the number of times other functions are called
        // by users and then, when called, posts them for users to see
        await interaction.deferReply();
        const akiraEmbed = new MessageEmbed()
        
        .setColor('#00FF00')
        .setTitle("Akira's Powers, Stats, and Abilities")
        .setDescription('Organized by origin')
        .addFields(
            {name: 'Generic Powers:', 
            value: 'Retardism, ToddBot like abilities and strength'},
            {name: 'Bleach Powers:', 
            value: `Reiatsu level 363,000, Kido Proficiency 70, No. 54 Haien, Hado No. 90 Kurohitsugi, Bakudo No. 26 Kyokko, Bakudo No. 79 Kuy Shibari, Zanpakuto: Kami Satsugai Kotei Buredo (controls light and sends back energy blasts), Bankai; Umbra's Star: ???`},
            {name: `JoJo's Bizarre Adventure Powers:`, 
            value: 'Stand; Groove City, can alter the age of anyone in range'},
        )
        .setFooter({text: 'In todd she trusts.'});

            await interaction.editReply({embeds: [akiraEmbed]});
        }
    }