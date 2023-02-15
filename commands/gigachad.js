module.exports = {
    name: 'gigachad',
    description:"this is a gigachad command!",
    execute(interaction, args){
        
        // This command uses a randomizer to post images to the chat
        var randomizer4 = 0; 
        number = 26;
            //message.react('<:wokesmugjt:432811507588268043>');
        imageNumber = Math.floor(Math.random()*(number - 1 + 1))+1;
    if (imageNumber === randomizer4){
        if (imageNumber === number || imageNumber + 5 >= number)
                {
                    Fixer = 5;
                    imageAdjuster = Math.floor(Math.random()*(Fixer - 1 + 1))+1;
                    imageNumber = imageNumber - imageAdjuster;
                    interaction.reply({files:["./ChadMeme/"+imageNumber+".jpg"]});
                    randomizer4 = imageNumber;
                }
                else if (imageNumber === 1 || imageNumber - 5 <= 1)
                {
                    Fixer = 5;
                    imageAdjuster = Math.floor(Math.random()*(Fixer - 1 + 1))+1;
                    imageNumber = imageNumber + imageAdjuster;
                    interaction.reply({files:["./ChadMeme/"+imageNumber+".jpg"]});
                    randomizer4 = imageNumber;
                }
                else 
                {
                    Fixer = 5;
                    imageAdjuster = Math.floor(Math.random()*(Fixer - 1 + 1))+1;
                    imageNumber = imageNumber + Fixer;
                    interaction.reply({files:["./ChadMeme/"+imageNumber+".jpg"]});
                    randomizer4 = imageNumber;
                }    
            }
            else{
                interaction.reply({files:["./ChadMeme/"+imageNumber+".jpg"]});
                randomizer4 = imageNumber;
            }
        
        
    }
}