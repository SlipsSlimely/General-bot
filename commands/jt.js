const {Client, MessageEmbed} = require('discord.js');
module.exports = {
    name: `jt`,
    description:`this command posts an embed with jt's stats`,
    async execute(interaction, options, args){


        // This feature specifically counts up the number of times other functions are called
        // by users and then, when called, posts them for users to see
        await interaction.deferReply();
        const jtEmbed = new MessageEmbed()
        
            .setColor('#fc0000')
            .setTitle("JT's Powers, Stats, and Abilities")
            .setDescription('Organized by origin')
            .addFields(
                {name: 'Generic Powers:', 
                value: 'Cyborg Arms'},
                {name: 'Bleach Powers:', 
                value: 'Hollow Form, Reiatsu level 476,000, Kido Proficiency 75, Hado No. 4 Byakurai, Hado No. 33 Sokatsui, Hadō #99. Goryūtenmetsu, Hado No. 54 Haien, Hadō #73. Sōren Sōkatsui, Hadō #96. Ittō Kasō, Hadō #12. Fushibi, Bakudō #26. Kyokkō, Bakudo No. 9 Horin, Bakudo No. 30 Shitotsu Sansen, Bakudo No. 99 Bankin, Zanpakuto: ??? (controls fire), Bankai: spawns fireballs that disintegrate things they touch'},
                {name: `JoJo's Bizarre Adventure Powers:`, 
                value: 'Stand; Nowhere Man, can turn anything into liquid'},
            )
            .setFooter({text: 'Always willing to lend a hand, literally.'});

            await interaction.editReply({embeds: [jtEmbed]});
        }
    }