const { ActionRowBuilder, MessageButton, ButtonStyle, MessageActionRow, MessageEmbed } = require('discord.js');
module.exports = {
    // This is currently a feature i'm developing, still a little buggy
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(interaction, args, Discord, client) {
        //const channel = '1034327914977689650'; //Change this to matchh the ID of the channel this will be live in

/*         const acRole = message.guild.roles.cache.find(role => role.name === "Animal Crossing");
        const apexRole = message.guild.roles.cache.find(role => role.name === "Apex");
        const coreRole = message.guild.roles.cache.find(role => role.name === "Core Audience");
        const streamRole = message.guild.roles.cache.find(role => role.name === "Stream Team");
        const smashRole = message.guild.roles.cache.find(role => role.name === "Smash Boys");
        const trainerRole = message.guild.roles.cache.find(role => role.name === "Trainer");
        const waifuRole = message.guild.roles.cache.find(role => role.name === "Waifu 4 U");
        const minecraftRole = message.guild.roles.cache.find(role => role.name === "Block Heads");
        const uniteRole = message.guild.roles.cache.find(role => role.name === "Uniters");
        const kartRole = message.guild.roles.cache.find(role => role.name === "Karters"); */
        Client.on('interactionCreate', async interaction => {
            if (interaction.isButton()) {
                const buttonID = interaction.customId;
                if (buttonID === '1') { // get button by customId set below
                    const member = interaction.member; // get member from the interaction - person who clicked the button
        
                    console.log(member.roles.cache);
        
                    if (member.roles.cache.has('772614934219456552')) { // if they already have the role
                        member.roles.remove('772614934219456552'); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add('772614934219456552'); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        })
                    }
                }
            }
        });

        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('1')
                .setLabel('Tank Wipes')
                .setStyle('SUCCESS'),
            new MessageButton()
                .setCustomId('2')
                .setLabel('Apex')
                .setStyle('SUCCESS'),
            new MessageButton()
                .setCustomId('3')
                .setLabel('Core Audience')
                .setStyle('SUCCESS'),
            new MessageButton()
                .setCustomId('4')
                .setLabel('Karters')
                .setStyle('SUCCESS'),
            new MessageButton()
                .setCustomId('5')
                .setLabel('Splatters')
                .setStyle('SUCCESS'),
            /* new MessageButton()
                .setCustomId('6')
                .setLabel('Trainer')
                .setStyle('SUCCESS'),
            new MessageButton()
                .setCustomId('7')
                .setLabel('Stream Team')
                .setStyle('SUCCESS'),
            new MessageButton()
                .setCustomId('8')
                .setLabel('Smash Boys')
                .setStyle('SUCCESS'), */
        );
        
        const roleEmbed = new MessageEmbed()
        .setTitle('Role selection buttons!')
        .setDescription('Click a button get the named role!')
        .setTimestamp();
            
        interaction.reply({embeds: [roleEmbed], components: [row]});

 
       /*  
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === acEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(acRole);
                }
                if (reaction.emoji.name === apexEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(apexRole);
                }
                if (reaction.emoji.name === coreEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(coreRole);
                }
                if (reaction.emoji.name === streamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(streamRole);
                }
                if (reaction.emoji.name === smashEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(smashRole);
                }
                if (reaction.emoji.name === trainerEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(trainerRole);
                }
                if (reaction.emoji.name === waifuEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(waifuRole);
                }
                if (reaction.emoji.name === minecraftEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(minecraftRole);
                }
                if (reaction.emoji.name === uniteEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(uniteRole);
                }
                if (reaction.emoji.name === kartEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(kartRole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === acEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(acRole);
                }
                if (reaction.emoji.name === apexEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(apexRole);
                }
                if (reaction.emoji.name === coreEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(coreRole);
                }
                if (reaction.emoji.name === streamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(streamRole);
                }
                if (reaction.emoji.name === smashEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(smashRole);
                }
                if (reaction.emoji.name === trainerEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(trainerRole);
                }
                if (reaction.emoji.name === waifuEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(waifuRole);
                }
                if (reaction.emoji.name === minecraftEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(minecraftRole);
                }
                if (reaction.emoji.name === uniteEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(uniteRole);
                }
                if (reaction.emoji.name === kartEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(kartRole);
                }
            } else {
                return;
            }
        }); */
    }
 
}