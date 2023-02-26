module.exports = {
    name: 'f',
    description:"use this to pay respects",
    execute(interaction, options, respectsPaid){

        // This command posts a one line joke based on a meme, it also tallies up the number of times this command was called.
        interaction.reply("🇫 " + "This user has paid you respects (Total respects paid: " + respectsPaid + " )");
    }
}