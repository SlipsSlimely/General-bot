module.exports = {
    name: 'friendlymeme',
    description:"this command pulls a random FD discord meme",
    execute(interaction, args){
        try{

        // This command uses a randomizer to post images to the chat
        var randomizer = 0;
        number = 407;
        imageNumber = Math.floor(Math.random()*(number - 1 + 1))+1;
        if (imageNumber === 69){
            interaction.reply({content: "I am all of you.",
                files:["./FriendlyMeme/"+imageNumber+".png"]});
                randomizer = imageNumber;
        }
        else if (imageNumber === 70){
            interaction.reply({content: "Even you.",
            files:["./FriendlyMeme/"+imageNumber+".png"]});
            randomizer = imageNumber;
        }
        else if (imageNumber === 371){
            interaction.reply({files:["./FriendlyMeme/"+imageNumber+".gif"]});
            randomizer = imageNumber;
        }
        else if (imageNumber === 373){
            interaction.reply({files:["./FriendlyMeme/"+imageNumber+".gif"]});
            randomizer = imageNumber;
        }
        else if (imageNumber === randomizer){
            if (imageNumber === number || imageNumber + 5 >= number)
            {
                Fixer = 5;
                imageAdjuster = Math.floor(Math.random()*(Fixer - 1 + 1))+1;
                imageNumber = imageNumber - imageAdjuster;
                interaction.reply({files:["./FriendlyMeme/"+imageNumber+".png"]});
                randomizer = imageNumber;
            }
            else if (imageNumber === 1 || imageNumber - 5 <= 1)
            {
                Fixer = 5;
                imageAdjuster = Math.floor(Math.random()*(Fixer - 1 + 1))+1;
                imageNumber = imageNumber + imageAdjuster;
                interaction.reply({files:["./FriendlyMeme/"+imageNumber+".png"]});
                randomizer = imageNumber;
            }
            else 
            {
                Fixer = 5;
                imageAdjuster = Math.floor(Math.random()*(Fixer - 1 + 1))+1;
                imageNumber = imageNumber + Fixer;
                interaction.reply({files:["./FriendlyMeme/"+imageNumber+".png"]});
                randomizer = imageNumber;
            }    
        }
        else{
            interaction.reply({files:["./FriendlyMeme/"+imageNumber+".png"]});  
            randomizer = imageNumber;
        }

    }
    catch{
        interaction.reply({content: `Oops! The bot didn't like that image, try again`});
    }
}
}