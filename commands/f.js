module.exports = {
    name: 'f',
    description:"use this to pay respects",
    async execute(interaction, options, respectsPaid){
        try{
        // This command posts a one line joke based on a meme, it also tallies up the number of times this command was called.
        await interaction.deferReply();
        interaction.reply("🇫 " + "This user has paid you respects (Total respects paid: " + respectsPaid + " )");
    }
    catch{
        interaction.reply({content: `Oops! The bot didn't like that, try again`});
    }
}
}