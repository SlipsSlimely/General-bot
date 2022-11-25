module.exports = {
    name: 'wood',
    description:"this is a wood command!",
    execute(interaction, args){
        
        var randomizer5 = 0;
        number = 43;
        //message.react('<:Pogvin:707040384613613588>');
        imageNumber = Math.floor(Math.random()*(number - 1 + 1))+1;
        if (imageNumber === 37){
                interaction.reply({content: "I am your nightmares.",
                    files:["./WoodMeme/"+imageNumber+".png"]})
                    randomizer5 = imageNumber;
        }
        else if (imageNumber === randomizer5){
            if (imageNumber === number || imageNumber + 5 >= number)
            {
                 Fixer = 5;
                 imageAdjuster = Math.floor(Math.random()*(Fixer - 1 + 1))+1;
                 imageNumber = imageNumber - imageAdjuster;
                 interaction.reply({files:["./WoodMeme/"+imageNumber+".png"]});
                 randomizer5 = imageNumber;
             }
            else if (imageNumber === 1 || imageNumber - 5 <= 1)
            {
                 Fixer = 5;
                 imageAdjuster = Math.floor(Math.random()*(Fixer - 1 + 1))+1;
                 imageNumber = imageNumber + imageAdjuster;
                 interaction.reply({files:["./WoodMeme/"+imageNumber+".png"]});
                 randomizer5 = imageNumber;
             }
            else 
            {
                Fixer = 5;
                imageAdjuster = Math.floor(Math.random()*(Fixer - 1 + 1))+1;
                imageNumber = imageNumber + Fixer;
                interaction.reply({files:["./WoodMeme/"+imageNumber+".png"]});
                randomizer5 = imageNumber;
            }  
        }
        else
        {
            interaction.reply({files:["./WoodMeme/"+imageNumber+".png"]});
            randomizer5 = imageNumber;
        }

        
    }
}