module.exports = {
    name: 'familyguy',
    description:"this command pulls a random family guy quote",
    execute(interaction, args){
        try{

        // This command uses a randomizer to post text to the chat
        number = 52;
        //message.channel.startTyping();
        //message.react('<:Perhaps:507405452133400579>');
        quoteNumber = Math.floor(Math.random()*(number - 1 + 1))+1;
        if (quoteNumber === 1){
            interaction.reply("'I have an idea so smart that my head would explode if I even began to know what I was talking about.' - Peter Griffin");
            
        }
        else if (quoteNumber === 2){ 
            interaction.reply("'Lois might be worth a million dollars to you but to me she's worthless' - Peter Griffin");
            
        }
        else if (quoteNumber === 3){
            interaction.reply("'You wanna talk about awkward moments? Once, during sex, I called Lois 'Frank.' Your move, Sherlock.' - Peter Griffin");
            
        }
        else if (quoteNumber === 4){
            interaction.reply("'Did you juse say I was fat?' - Peter Griffin");
            
        }
        else if (quoteNumber === 5){
            interaction.reply("'Shut up, Meg, you don't matter!' - Peter Griffin");
            
        }
        else if (quoteNumber === 6){
            interaction.reply("'Perhaps.' - Peter Griffin");
            
        }
        else if (quoteNumber === 7){
            interaction.reply("'Now I may be an idiot, but there's one thing I am not sir, and that sir, is an idiot' - Peter Griffin");
            
        }
        else if (quoteNumber === 8){
            interaction.reply("'Peter, did you rob a bunch of people on the beach with your metal detector?' - Lois Griffin");
            
        }
        else if (quoteNumber === 9){
            interaction.reply("'Fuck off' - Peter Griffin");
            
        }
        else if (quoteNumber === 10){
            interaction.reply("'Peter, you're bribing your daughter with a car?' - Lois Griffin");
            
        }
        else if (quoteNumber === 11){
            interaction.reply("'If anybody's gonna take that bitch down, it's gonna be me' - Stewie Griffin");
            
        }
        else if (quoteNumber === 12){
            interaction.reply("'I'd like to stay and chat, but you're a total bitch' - Stewie Griffin");
            
        }
        else if (quoteNumber === 13){
            interaction.reply("'I'm planning on dying tonight. What are *your* plans?' - Peter Griffin");
            
        }
        else if (quoteNumber === 14){
            interaction.reply("'We act like we didn't take a lot from the Simpsons. We took a lot from the Simpsons.' - Peter Griffin");
            
        }
        else if (quoteNumber === 15){
            interaction.reply("'I cry like Snoopy!' - Peter Griffin");
            
        }
        else if (quoteNumber === 16){
            interaction.reply("'Hey. Guess where I have a crayon.' - Stewie Griffin");
            
        }
        else if (quoteNumber === 17){
            interaction.reply("'His brain may be gone, but he's a lot of fun.' - Stewie Griffin");
            
        }
        else if (quoteNumber === 18){
            interaction.reply("'Wait, how could a musical festival chick like two guys?' - Stewie Griffin");
            
        }
        else if (quoteNumber === 19){
            interaction.reply("'Super Mario? What are you doing here?' - Stewie Griffin");
            
        }
        else if (quoteNumber === 20){
            interaction.reply("'Peter, what'd I say about you volunteering me for shit?' - Glen Quagmire");
            
        }
        else if (quoteNumber === 21){
            interaction.reply("'Hey Joe, what's your handicap?' - Peter Griffin");
            
        }
        else if (quoteNumber === 22){
            interaction.reply("'Imagine I'm one of your kids. ... NOT MEG, NOT MEG!' - Joe Swanson");
            
        }
        else if (quoteNumber === 23){
            interaction.reply("'A boat's a boat, but a mystery box could be anything. It could even be a boat!' - Peter Griffin");
            
        }
        else if (quoteNumber === 24){
            interaction.reply("'Hey man! Your clock won't flush!' - Random Background Character");
            
        }
        else if (quoteNumber === 25){
            interaction.reply("'Pawtucket Patriot Beer. If you buy it, hot women will have sex in your backyard.' - TV Announcer");
            
        }
        else if (quoteNumber === 26){
            interaction.reply("'Of course a man made it. It's a commercial Lois, not a delicious Thanksgiving dinner.' - Peter Griffin");
            
        }
        else if (quoteNumber === 27){
            interaction.reply("'You, fetch me the Wall Street Journal! You two! Fight to the death!' - Stewie Griffin");
            
        }
        else if (quoteNumber === 28){
            interaction.reply("'Heh! That's not up to me, kid; I follow the old divining rod. Whoooa! WHA-HA-HA-HA-ha-ha' - Glen Quagmire");
            
        }
        else if (quoteNumber === 29){
            interaction.reply("'Um... *attempting to make up a name, he looks at some peas on a plate* Pea... *looks at a woman crying* Tear... Pea-tear... *sees a gryphon in the room* Gryphon! Peter Griffin. Aw, crap.' - Peter Griffin");
            
        }
        else if (quoteNumber === 30){
            interaction.reply("'Certainly, That's Robert Loggia. R as in Robert Loggia. O as in Oh my god, it's Robert Loggia. B as in By god that's Robert Loggia. E as in Everybody loves Robert Loggia. R as in Robert Loggia. T as in Tim, look over there. It's Robert Loggia. Space. L as in Look, it's Robert Loggia.' - Robert Loggia");
            
        }
        else if (quoteNumber === 31){
            interaction.reply("'Only saying his name backwards can send him back to the 5th dimension where he belongs' - Adam West");
            
        }
        else if (quoteNumber === 32){
            interaction.reply("'Oh I heard you, what I didn't hear was *please*' - Adam West");
            
        }
        else if (quoteNumber === 33){
            interaction.reply("'Oh look, its Richard Nixon! Oh wait its a black guy! No, just Nixon' - Random Golfer");
            
        }
        else if (quoteNumber === 34){
            interaction.reply("'Wheely Wheely stupid head, bet you wish you were dead!' - Peter Griffin");
            
        }
        else if (quoteNumber === 35){
            interaction.reply("'Well see. I got drunk, and then got my picture taken. So that way, when I get pulled over for drunk driving, I look the same as on license. You know. And then the copper... the copper'll say: 'Aah. You're fine. You're not drunk. This is you normal. I can tell you by the picture.'' - Peter Griffin");
            
        }
        else if (quoteNumber === 36){
            interaction.reply("'So everybody just gets to stick their big chef's spoon into my comedy gumbo, huh? Well no deal!' - Peter Griffin");
            
        }
        else if (quoteNumber === 37){
            interaction.reply("How's it going, Adolf?' - Brian Griffin");
            
        }
        else if (quoteNumber === 38){
            interaction.reply("'What the fuck, did you eat pussy backstage???' - Seth Rogen");
            
        }
        else if (quoteNumber === 39){
            interaction.reply("'Alright! This is the greatest Sunday tradition ever...except for getting all my cutaway gags ready for the week.' - Peter Griffin");
            
        }
        else if (quoteNumber === 40){
            interaction.reply("'You gonna need me this week?' - Darth Vader");
            
        }
        else if (quoteNumber === 41){
            interaction.reply("'I'm, um...here for your show.' - Death");
            
        }
        else if (quoteNumber === 42){
            interaction.reply("'This place gives me the creeps, like when I went to that pedophile opera.' - Peter Griffin");
            
        }
        else if (quoteNumber === 43){
            interaction.reply("'Ow!' - Cleveland Brown");
            
        }
        else if (quoteNumber === 44){
            interaction.reply("'Hey, wait, wait, wait, you cannot tell anyone I am here, for if humanity discovers am no longer lurking in the shadows, the consequences would be dire.' - Death");
            
        }
        else if (quoteNumber === 45){
            interaction.reply("'Peter, no! It's a boy!' - Lois Griffin");
            
        }
        else if (quoteNumber === 46){
            interaction.reply("'I found my baby book! Here's the broken condom that led to my birth.' - Chris Griffin");
            
        }
        else if (quoteNumber === 47){
            interaction.reply("'Peter, he's not coming on to you. He's trying to tell you that you're healthy.' - Lois Griffin");
            
        }
        else if (quoteNumber === 48){
            interaction.reply("'No. Mommy's made peace with that.' - Lois Griffin");
            
        }
        else if (quoteNumber === 49){
            interaction.reply("'What did you make this cocoa with? Crap?' - Death");
            
        }
        else if (quoteNumber === 50){
            interaction.reply("'Could you repeat that, please, Peter? I believe I had something crazy in my ear.' - Cleveland Brown");
            
        }
        else if (quoteNumber === 51){
            interaction.reply("'Our top story tonight, the rules of Death no longer apply.' - Tom Tucker");
            
        }
        else if (quoteNumber === 52){
            interaction.reply("'Ah, baby books. Nostalgic for the days of chafed nipples and episiotomies?' - Stewie Griffin");
            
        }

    }
    catch{
        interaction.reply({content: `Oops! The bot didn't like that, try again`});
    }
}
}