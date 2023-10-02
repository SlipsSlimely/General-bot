module.exports = {
    name: 'jeter',
    description:"this is a jster command!",
    async execute(interaction, args){
        try{
        // This command uses a randomizer to post images to the chat
        var randomizer1 = 0;
        number = 58;
        //message.react('<:wokesmugjt:432811507588268043>');
        imageNumber = Math.floor(Math.random()*(number - 1 + 1))+1;
        await interaction.deferReply();
        if (imageNumber === 31){
            await interaction.editReply({content: "I am everywhere.",
                files:["./JTMeme/"+imageNumber+".png"]})
                randomizer1 = imageNumber;
        }
        else if (imageNumber === randomizer1){
            if (imageNumber === number || imageNumber + 5 >= number)
            {
                Fixer = 5;
                imageAdjuster = Math.floor(Math.random()*(Fixer - 1 + 1))+1;
                imageNumber = imageNumber - imageAdjuster;
                await interaction.editReply({files:["./JTMeme/"+imageNumber+".png"]});
                randomizer1 = imageNumber;
            }
            else if (imageNumber === 1 || imageNumber - 5 <= 1)
            {
                Fixer = 5;
                imageAdjuster = Math.floor(Math.random()*(Fixer - 1 + 1))+1;
                imageNumber = imageNumber + imageAdjuster;
                await interaction.editReply({files:["./JTMeme/"+imageNumber+".png"]});
                randomizer1 = imageNumber;
            }
            else 
            {
                Fixer = 5;
                imageAdjuster = Math.floor(Math.random()*(Fixer - 1 + 1))+1;
                imageNumber = imageNumber + Fixer;
                await interaction.editReply({files:["./JTMeme/"+imageNumber+".png"]});
                randomizer1 = imageNumber;
            }    
        }
        else{
            await interaction.editReply({files:["./JTMeme/"+imageNumber+".png"]});
            randomizer1 = imageNumber;
        }
        
    }
    catch{
        await interaction.editReply({content: `Oops! The bot didn't like that image, try again`});
    }
}
}