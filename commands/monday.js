module.exports = {
    name: 'monday',
    description:"this is all about monday",
    execute(interaction, args){

        interaction.reply({
            files: [
                "Mondays.jpg"
            ]
        });
    }
}