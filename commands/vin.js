module.exports = {
    name: 'vin',
    description:"this is a gavin command!",
    async execute(interaction, args){
        try{
        // This command uses a randomizer to post images made in photoshop, of my friend
        var randomizer2 = 0;
        number = 53;
        //message.react('<:Pogvin:707040384613613588>');
        imageNumber = Math.floor(Math.random()*(number - 1 + 1))+1;
        await interaction.deferReply();
        if (imageNumber === 9){
            await interaction.editReply({content: "I am your nightmares.",
                files:["./VinMeme/"+imageNumber+".png"]})
                randomizer2 = imageNumber;
        }
        else if (imageNumber === randomizer2){
            if (imageNumber === number || imageNumber + 5 >= number)
            {
                Fixer = 5;
                imageAdjuster = Math.floor(Math.random()*(Fixer - 1 + 1))+1;
                imageNumber = imageNumber - imageAdjuster;
                await interaction.editReply({files:["./VinMeme/"+imageNumber+".png"]});
                randomizer2 = imageNumber;
            }
            else if (imageNumber === 1 || imageNumber - 5 <= 1)
            {
                Fixer = 5;
                imageAdjuster = Math.floor(Math.random()*(Fixer - 1 + 1))+1;
                imageNumber = imageNumber + imageAdjuster;
                await interaction.editReply({files:["./VinMeme/"+imageNumber+".png"]});
                randomizer2 = imageNumber;
            }
            else 
            {
                Fixer = 5;
                imageAdjuster = Math.floor(Math.random()*(Fixer - 1 + 1))+1;
                imageNumber = imageNumber + Fixer;
                await interaction.editReply({files:["./VinMeme/"+imageNumber+".png"]});
                randomizer2 = imageNumber;
            }  
        }
        else
        {
            await interaction.editReply({files:["./VinMeme/"+imageNumber+".png"]});
            randomizer2 = imageNumber;
        }
        
    }
    catch{
        await interaction.editReply({content: `Oops! The bot didn't like that image, try again`});
    }
    }
}