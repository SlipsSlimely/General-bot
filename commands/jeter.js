module.exports = {
    name: 'jeter',
    description:"this is a jster command!",
    execute(interaction, args){
        
        var randomizer1 = 0;
        number = 55;
        //message.react('<:wokesmugjt:432811507588268043>');
        imageNumber = Math.floor(Math.random()*(number - 1 + 1))+1;
        if (imageNumber === 31){
            interaction.reply({content: "I am everywhere.",
                files:["./JTMeme/"+imageNumber+".png"]})
                randomizer1 = imageNumber;
        }
        else if (imageNumber === randomizer1){
            if (imageNumber === number || imageNumber + 5 >= number)
            {
                Fixer = 5;
                imageAdjuster = Math.floor(Math.random()*(Fixer - 1 + 1))+1;
                imageNumber = imageNumber - imageAdjuster;
                interaction.reply({files:["./JTMeme/"+imageNumber+".png"]});
                randomizer1 = imageNumber;
            }
            else if (imageNumber === 1 || imageNumber - 5 <= 1)
            {
                Fixer = 5;
                imageAdjuster = Math.floor(Math.random()*(Fixer - 1 + 1))+1;
                imageNumber = imageNumber + imageAdjuster;
                interaction.reply({files:["./JTMeme/"+imageNumber+".png"]});
                randomizer1 = imageNumber;
            }
            else 
            {
                Fixer = 5;
                imageAdjuster = Math.floor(Math.random()*(Fixer - 1 + 1))+1;
                imageNumber = imageNumber + Fixer;
                interaction.reply({files:["./JTMeme/"+imageNumber+".png"]});
                randomizer1 = imageNumber;
            }    
        }
        else{
            interaction.reply({files:["./JTMeme/"+imageNumber+".png"]});
            randomizer1 = imageNumber;
        }
        
    }
}