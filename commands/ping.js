module.exports = {
    name: 'ping',
    description:"this is a ping command!",
    execute(interaction, args){


        // this command posts the word pong but is planned to be updated to actually tell
        // the user what their ping is
        interaction.reply('Pong!');
    }
}