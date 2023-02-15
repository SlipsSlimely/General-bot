module.exports = {
    name: 'insult',
    description:"this command insults auser you ping",
    execute(interaction, options){

        const person = options.getString("person");
 
        if (person === "null"){
            person = (" ");
        }; 

        // This sets up a randomizer that looks for a number between 1 and 10, used to add some surprise
        // to this feature
        number = 10;
        insultNumber = Math.floor(Math.random()*(number - 1 + 1))+1;

        // Below are all of the insults currently possible to be called by the randomizer
        if (insultNumber === 1)
        {
            interaction.reply({content: `You Polynigmeon! ${person}` 
            ,files:["Polynigmeon.jpg"]});
        }
         else if (insultNumber === 2)
        {
            
            interaction.reply({content:`I hope your dick falls off in the next person you fuck ${person}`});
        } 
        else if (insultNumber === 3)
        {
            interaction.reply({content:`You absolute fucking doorknob ${person}`});
        }
        else if (insultNumber === 4)
        {
            
            interaction.reply({content:`Hey,${person} your moms a hoe`});
        }
        else if (insultNumber === 6)
        {
            interaction.reply({content:`I bet you place doors backwards in Minecraft ${person}`});
        }
        else if (insultNumber === 7)
        {
            
            interaction.reply({content:`I bet you eat sugar cookies, fatass ${person}`});
        } 
        else if (insultNumber === 5)
        {
            interaction.reply({content:`Can the baby not find the stones of barenziah without mods? ${person}`
            ,files:["toddinsult.jpg"]});
        }
        else if (insultNumber === 8)
        {
            interaction.reply({content:`You Polynigmeon! ${person}`
            ,files:["Polynigmeon.jpg"]});
        }
/*         else if (insultNumber === 9)
        {
            
            interaction.reply({content:'Your face looks like a buttcrack! ' +userToMention.toString()
            ,files: ["buttcrack.gif"]});
        } */
        else {
            interaction.reply('One sec, I got nothing.')
        }
    }
}