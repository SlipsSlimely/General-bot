module.exports = {
    name: 'wiki',
    description:"this is a wiki command!",
    execute(interaction, args){
        
        // this command links the user to a wikipedia for the chat this bot is hosted in
            interaction.reply('https://the-friendly-discord.fandom.com/wiki/The_Friendly_Discord_Wiki');
        
    }
}