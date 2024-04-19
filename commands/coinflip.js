module.exports = {
    name: 'coinflip',
    description:"this is a coinflip command!",
    async execute(interaction, args){
        try{

        // This command uses a randomizer to post one of two options in chat:
        // heads or tails
        number = 2;
        headsortails = Math.floor(Math.random()*(number - 1 + 1))+1;

        await interaction.deferReply();
        if (headsortails === 1){
            await interaction.editReply({content: 'You got heads!',files:["./CoinFlip/Heads.png"]});
        }
        else{
            await interaction.editReply({content: 'You got tails!',files:["./CoinFlip/Tails.png"]});
        }
    }
    catch{
        await interaction.editReply({content: `Oops! The bot didn't like that image, try again`});
    }
}
}