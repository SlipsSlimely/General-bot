module.exports = {
    name: 'honoredone',
    description:"this posts an honored meme",
    execute(interaction, args){


        // this command posts an image, the image is a garfield meme about mondays
        interaction.reply({
            files: [
                "Throughout_Heaven_and_Earth_I_alone_am_the_seated_one.mp4"
            ]
        });
    }
}