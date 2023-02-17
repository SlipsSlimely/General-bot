module.exports = {
    name: 'ping',
    description:"this is a ping command!",
    async execute(interaction, client){
        const wait = require('node:timers/promises').setTimeout;

        // this command tells the user what their ping is
        await interaction.deferReply();
        await wait(4000);
        await interaction.editReply(`Pong!\nPonged back the ping in: ${Math.round(client.ws.ping)}ms`);


    }
}