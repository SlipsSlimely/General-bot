module.exports = {
    name: 'coinflip',
    description:"this is a coinflip command!",
    execute(interaction, args){


        // This command uses a randomizer to post one of two options in chat:
        // heads or tails
        number = 2;
        headsortails = Math.floor(Math.random()*(number - 1 + 1))+1;
        if (headsortails === 1){
            interaction.reply({content: 'You got heads!',files:["./CoinFlip/Heads.png"]});
        }
        else{
            interaction.reply({content: 'You got tails!',files:["./CoinFlip/Tails.png"]});
        }
    }
}