module.exports = {
    name: 'vin',
    description:"this is a gavin command!",
    execute(interaction, args){
        var randomizer2 = 0;
        number = 53;
        //message.react('<:Pogvin:707040384613613588>');
        imageNumber = Math.floor(Math.random()*(number - 1 + 1))+1;
        if (imageNumber === 9){
            interaction.reply({content: "I am your nightmares.",
                files:["./VinMeme/"+imageNumber+".png"]})
                randomizer2 = imageNumber;
        }
        else if (imageNumber === randomizer2){
            if (imageNumber === number || imageNumber + 5 >= number)
            {
                Fixer = 5;
                imageAdjuster = Math.floor(Math.random()*(Fixer - 1 + 1))+1;
                imageNumber = imageNumber - imageAdjuster;
                interaction.reply({files:["./VinMeme/"+imageNumber+".png"]});
                randomizer2 = imageNumber;
            }
            else if (imageNumber === 1 || imageNumber - 5 <= 1)
            {
                Fixer = 5;
                imageAdjuster = Math.floor(Math.random()*(Fixer - 1 + 1))+1;
                imageNumber = imageNumber + imageAdjuster;
                interaction.reply({files:["./VinMeme/"+imageNumber+".png"]});
                randomizer2 = imageNumber;
            }
            else 
            {
                Fixer = 5;
                imageAdjuster = Math.floor(Math.random()*(Fixer - 1 + 1))+1;
                imageNumber = imageNumber + Fixer;
                interaction.reply({files:["./VinMeme/"+imageNumber+".png"]});
                randomizer2 = imageNumber;
            }  
        }
        else
        {
            interaction.reply({files:["./VinMeme/"+imageNumber+".png"]});
            randomizer2 = imageNumber;
        }
        
    }
}