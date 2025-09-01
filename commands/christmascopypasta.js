module.exports = {
    name: 'christmascopypasta',
    description:"use this to post an edited version of a dumb meme",
    async execute(interaction, options){
        try{
            const event = options.getString(`event`);
            const time = options.getString(`time`);

        // This command posts an edited version of a really dumb meme
        await interaction.deferReply();

        await interaction.editReply(`Can you believe it guys? ${event}, just ${time} away! ${event} is in ${time}! Woo-hoo! I am so happy about this information. ${event}, just ${time} away. Oh, wow! Can you believe it? ${event}, just in ${time}! It got here so fast.`);
    }
    catch{
        await interaction.editReply({content: `Oops! The bot didn't like that, try again`});
    }
}
}