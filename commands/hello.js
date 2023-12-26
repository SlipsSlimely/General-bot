module.exports = {
    name: 'hello',
    description:"this is a hello command!",
    async execute(interaction, args){


        // this command just posts hello but using a randomizer will occasionally post a joke based on Skyrim memes
        number = 10;
        toddNumber = Math.floor(Math.random()*(number - 1 + 1))+1;
        await interaction.deferReply();
        if (toddNumber === 5){
            interaction.reply('Buy Skyrim!');
        }
        else{
            interaction.reply('Hello!');
        }
    }
}