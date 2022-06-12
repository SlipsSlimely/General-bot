module.exports = {
    name: 'hello',
    description:"this is a hello command!",
    execute(interaction, args){

        number = 10;
        toddNumber = Math.floor(Math.random()*(number - 1 + 1))+1;
        if (toddNumber === 5){
            interaction.reply('Buy Skyrim!');
        }
        else{
            interaction.reply('Hello!');
        }
    }
}