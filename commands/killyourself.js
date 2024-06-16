module.exports = {
    name: 'killyourself',
    description:"this posts a killer meme",
    execute(interaction, args){


        // this command posts an image, the image is a garfield meme about mondays
        interaction.reply({
            files: [
                "Kill_Yourself_Now.mp4"
            ]
        });
    }
}