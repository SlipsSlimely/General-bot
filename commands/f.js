module.exports = {
    name: 'f',
    description:"use this to pay respects",
    execute(interaction, options, respectsPaid){
        interaction.reply("🇫 " + "This user has paid you respects (Total respects paid: " + respectsPaid + " )");
    }
}