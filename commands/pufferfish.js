module.exports = {
    name: 'pufferfish',
    description:"this is an emoji command!",
    execute(interaction, args){
        

        // this command posts a single emoji
            interaction.reply('<a:Pufferfish:754866552737759273>');
        
    }
}