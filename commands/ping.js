module.exports = {
    name: 'ping',
    description:"this is a ping command!",
    execute(interaction, args){

        interaction.reply('Pong!');
    }
}