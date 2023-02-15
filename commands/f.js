module.exports = {
    name: 'f',
    description:"use this to pay respects",
    execute(interaction, options, respectsPaid){

        // This is just a silly command that outputs a little joke
        interaction.reply("🇫 " + "This user has paid you respects (Total respects paid: " + respectsPaid + " )");
    }
}