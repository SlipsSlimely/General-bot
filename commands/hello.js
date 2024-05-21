module.exports = {
    name: 'hello',
    description:"this is a hello command!",
    async execute(interaction, args){


        const array = ['Hello'];
        let arrayLen = array.length;
        randArray = Math.floor(Math.random()*(arrayLen - 1 + 1));
        console.log(randArray);
        console.log(array[randArray]);

        // this command just posts hello but using a randomizer will occasionally post a joke based on Skyrim memes
        number = 10;
        toddNumber = Math.floor(Math.random()*(number - 1 + 1))+1;
        await interaction.deferReply();
        if (toddNumber === 5){
            await interaction.editReply('Buy Skyrim!');
        }
        else{
            await interaction.editReply(' ' + array[randArray]);
        }
    }
}