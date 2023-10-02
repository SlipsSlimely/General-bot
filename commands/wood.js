module.exports = {
    name: 'wood',
    description:"this is a wood command!",
    async execute(interaction, args){
        try{
        // This command uses a randomizer to post images to the chat
        var randomizer5 = 0;
        number = 43;
        //message.react('<:Pogvin:707040384613613588>');
        imageNumber = Math.floor(Math.random()*(number - 1 + 1))+1;
        await interaction.deferReply();
        if (imageNumber === 37){
                await interaction.editReply({content: "I am your nightmares.",
                    files:["./WoodMeme/"+imageNumber+".png"]})
                    randomizer5 = imageNumber;
        }
        else if (imageNumber === randomizer5){
            if (imageNumber === number || imageNumber + 5 >= number)
            {
                 Fixer = 5;
                 imageAdjuster = Math.floor(Math.random()*(Fixer - 1 + 1))+1;
                 imageNumber = imageNumber - imageAdjuster;
                 await interaction.editReply({files:["./WoodMeme/"+imageNumber+".png"]});
                 randomizer5 = imageNumber;
             }
            else if (imageNumber === 1 || imageNumber - 5 <= 1)
            {
                 Fixer = 5;
                 imageAdjuster = Math.floor(Math.random()*(Fixer - 1 + 1))+1;
                 imageNumber = imageNumber + imageAdjuster;
                 await interaction.editReply({files:["./WoodMeme/"+imageNumber+".png"]});
                 randomizer5 = imageNumber;
             }
            else 
            {
                Fixer = 5;
                imageAdjuster = Math.floor(Math.random()*(Fixer - 1 + 1))+1;
                imageNumber = imageNumber + Fixer;
                await interaction.editReply({files:["./WoodMeme/"+imageNumber+".png"]});
                randomizer5 = imageNumber;
            }  
        }
        else
        {
            await interaction.editReply({files:["./WoodMeme/"+imageNumber+".png"]});
            randomizer5 = imageNumber;
        }

        
    }
    catch{
        await interaction.editReply({content: `Oops! The bot didn't like that image, try again`});
    }
}

}