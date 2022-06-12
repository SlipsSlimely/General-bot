module.exports = {
    name: 'insult',
    description:"this command insults auser you ping",
    execute(interaction, options){

        const person = options.getString("person");
 
        if (person === "null"){
            person = (" ");
        }; 


        number = 10;
        insultNumber = Math.floor(Math.random()*(number - 1 + 1))+1;

        if (insultNumber === 1)
        {
            interaction.reply({content: `You Polynigmeon! ${person}` 
            ,files:["Polynigmeon.jpg"]});
        }
/*         else if (insultNumber === 2)
        {
            
            interaction.reply({content:`Your face looks like a buttcrack! ${person}`
            ,files: ["buttcrack.gif"]});
        } */
        else if (insultNumber === 3)
        {
            interaction.reply({content:`You Polynigmeon! ${person}`
            ,files:["Polynigmeon.jpg"]});
        }
/*         else if (insultNumber === 4)
        {
            
            interaction.reply({content:`Your face looks like a buttcrack! ${person}`
            ,files: ["buttcrack.gif"]});
        } */
        else if (insultNumber === 6)
        {
            interaction.reply({content:`You Polynigmeon! ${person}`
            ,files:["Polynigmeon.jpg"]});
        }
/*         else if (insultNumber === 7)
        {
            
            interaction.reply({content:`Your face looks like a buttcrack! ${person}`
            ,files: ["buttcrack.gif"]});
        } */
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