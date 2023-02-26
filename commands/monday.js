module.exports = {
    name: 'monday',
    description:"this is all about monday",
    execute(interaction, args){


        // this command posts an image, the image is a garfield meme about mondays
        interaction.reply({
            files: [
                "Mondays.jpg"
            ]
        });
    }
}