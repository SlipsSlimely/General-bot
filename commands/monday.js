module.exports = {
    name: 'monday',
    description:"this is all about monday",
    execute(interaction, args){


        // this command posts a single image 
        interaction.reply({
            files: [
                "Mondays.jpg"
            ]
        });
    }
}