module.exports = {
    name: 'friendlymeme',
    description:"this command pulls a random FD discord meme",
    async execute(interaction, args){
        try{

        // This command uses a randomizer to post images to the chat
        var randomizer = 0;
        number = 487;
        imageNumber = Math.floor(Math.random()*(number - 1 + 1))+1;
        await interaction.deferReply();
        if (imageNumber === 69){
            await interaction.editReply({content: "I am all of you.",
                files:["./FriendlyMeme/"+imageNumber+".png"]});
                randomizer = imageNumber;
        }
        else if (imageNumber === 70){
            await interaction.editReply({content: "Even you.",
            files:["./FriendlyMeme/"+imageNumber+".png"]});
            randomizer = imageNumber;
        }
        else if (imageNumber === 371){
            await interaction.editReply({files:["./FriendlyMeme/"+imageNumber+".gif"]});
            randomizer = imageNumber;
        }
        else if (imageNumber === 373){
            await interaction.editReply({files:["./FriendlyMeme/"+imageNumber+".gif"]});
            randomizer = imageNumber;
        }
        else if (imageNumber === 466){
            await interaction.editReply({files:["./FriendlyMeme/"+imageNumber+".gif"]});
            randomizer = imageNumber;
        }
        else if (imageNumber === 487){
            await interaction.editReply({files:["./FriendlyMeme/"+imageNumber+".gif"]});
            randomizer = imageNumber;
        }
        else if (imageNumber === randomizer){
            if (imageNumber === number || imageNumber + 5 >= number)
            {
                Fixer = 5;
                imageAdjuster = Math.floor(Math.random()*(Fixer - 1 + 1))+1;
                imageNumber = imageNumber - imageAdjuster;
                await interaction.editReply({files:["./FriendlyMeme/"+imageNumber+".png"]});
                randomizer = imageNumber;
            }
            else if (imageNumber === 1 || imageNumber - 5 <= 1)
            {
                Fixer = 5;
                imageAdjuster = Math.floor(Math.random()*(Fixer - 1 + 1))+1;
                imageNumber = imageNumber + imageAdjuster;
                await interaction.editReply({files:["./FriendlyMeme/"+imageNumber+".png"]});
                randomizer = imageNumber;
            }
            else 
            {
                Fixer = 5;
                imageAdjuster = Math.floor(Math.random()*(Fixer - 1 + 1))+1;
                imageNumber = imageNumber + Fixer;
                await interaction.editReply({files:["./FriendlyMeme/"+imageNumber+".png"]});
                randomizer = imageNumber;
            }    
        }
        else{
            await interaction.editReply({files:["./FriendlyMeme/"+imageNumber+".png"]});  
            randomizer = imageNumber;
        }

    }
    catch{
        await interaction.editReply({content: `Oops! The bot didn't like that image, try again`});
    }
}
}