module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(interaction, args, Discord, client) {
        const channel = '855183208962719824'; //Change this
        const acRole = message.guild.roles.cache.find(role => role.name === "Animal Crossing");
        const apexRole = message.guild.roles.cache.find(role => role.name === "Apex");
        const coreRole = message.guild.roles.cache.find(role => role.name === "Core Audience");
        const streamRole = message.guild.roles.cache.find(role => role.name === "Stream Team");
        const smashRole = message.guild.roles.cache.find(role => role.name === "Smash Boys");
        const trainerRole = message.guild.roles.cache.find(role => role.name === "Trainer");
        const waifuRole = message.guild.roles.cache.find(role => role.name === "Waifu 4 U");
        const minecraftRole = message.guild.roles.cache.find(role => role.name === "Block Heads");
        const uniteRole = message.guild.roles.cache.find(role => role.name === "Uniters");
        const kartRole = message.guild.roles.cache.find(role => role.name === "Karters");

                                         //855231682457370696               
        
        const acEmoji = '🔵';  //855231682751889418
        const apexEmoji = '🟤';                //855231682566029345
        const coreEmoji = '🟢';
        const streamEmoji = '🧑‍🤝‍🧑'; //855231682733801472
        const smashEmoji = '⚔️';
        const trainerEmoji = '🔘';  
        const waifuEmoji = '🟠';  //855231682423554118
        const minecraftEmoji = '🟣';  //855231682311356467
        const uniteEmoji = '🔴';
        const kartEmoji = '🔴';
        
    
 
        let embed = new Discord.MessageEmbed()
            .setColor('#edad1f')
            //.setTitle('Select Your roles!')
            .setDescription('**Select an emote below to set your pingable roles:**\n\n'
                + `${acEmoji} this lets others ping you for animal crossing\n`
                + `${apexEmoji} for fun with guns!\n`
                + `${coreEmoji} for those in the know\n`
                + `${streamEmoji} aka Gavin's onlyfans subs\n`
                + `${smashEmoji} for those that enjoy smash bros\n`
                + `${trainerEmoji} for pokemon shenanigans (trading, battling, raids, etc)\n`
                + `${waifuEmoji} for waifu wars\n`
                + `${minecraftEmoji} for minecraft fans\n`
                + `${uniteEmoji} for those that wish to unite for some pokemon\n`
                + `${kartEmoji} only for those who enjoy wacky races!\n`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(acEmoji);
        messageEmbed.react(apexEmoji);
        messageEmbed.react(coreEmoji);
        messageEmbed.react(streamEmoji);
        messageEmbed.react(smashEmoji);
        messageEmbed.react(trainerEmoji);
        messageEmbed.react(waifuEmoji);
        messageEmbed.react(minecraftEmoji);
        messageEmbed.react(uniteEmoji);
        messageEmbed.react(kartEmoji);

 
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
        });
    }
 
}