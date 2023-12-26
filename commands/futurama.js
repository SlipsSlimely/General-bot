module.exports = {
    name: 'futurama',
    description:"this command pulls a random futurama quote",
    async execute(interaction, args){
        try{

        // This command uses a randomizer to post lines from the show Futurama to chat
        number = 66;
        //message.channel.startTyping();
        //message.react('<:GoodNewsEveryone:504802485056176149>');
        quoteNumber = Math.floor(Math.random()*(number - 1 + 1))+1;
        await interaction.deferReply();
        if (quoteNumber === 1){
            interaction.reply("'Hey... what smells like blue?' - Philip J. Fry");
            
        }
        else if (quoteNumber === 2){ 
            interaction.reply("'Look, I don't know about your previous captains, but I intend to do as little dying as possible' - Turanga Leela");
            
        }
        else if (quoteNumber === 3){
            interaction.reply("'Why am I sticky and naked? Did I miss something fun?' - Philip J. Fry");
            
        }
        else if (quoteNumber === 4){
            interaction.reply("'Uh oh, the dials are terrified!' - Amy Wong");
            
        }
        else if (quoteNumber === 5){
            interaction.reply("'Bite my shiny metal ass!' - Bender");
            
        }
        else if (quoteNumber === 6){
            interaction.reply("'Panic, jerks!' - Dr. Zoidberg");
            
        }
        else if (quoteNumber === 7){
            interaction.reply("'Men who call too much are the worst... I bet' - Turanga Leela");
            
        }
        else if (quoteNumber === 8){
            interaction.reply("'Scalpel, blood bucket, Priest, next patient' - Dr. Zoidberg");
            
        }
        else if (quoteNumber === 9){
            interaction.reply("'Bite my glorious golden ass!' - Bender");
            
        }
        else if (quoteNumber === 10){
            interaction.reply("'This is just like that drug trip I saw in that movie when I was on that drug trip' - Philip J. Fry");
            
        }
        else if (quoteNumber === 11){
            interaction.reply("'With my OXO GoodGrips cheese knife, I stab at thee!' - Turanga Leela");
            
        }
        else if (quoteNumber === 12){
            interaction.reply("'Ok Fry, we're done putting on the bra!' - Amy Wong");
            
        }
        else if (quoteNumber === 13){
            interaction.reply("'Well we're boned!' - Bender");
            
        }
        else if (quoteNumber === 14){
            interaction.reply("'Ew, pukeatronic!' - Amy Wong");
            
        }
        else if (quoteNumber === 15){
            interaction.reply("'Mr. President... What the hell' - Zapp Brannigan");
            
        }
        else if (quoteNumber === 16){
            interaction.reply("'Here's to another lousy millennium' - Philip J. Fry");
            
        }
        else if (quoteNumber === 17){
            interaction.reply("'No, child! Your back bone can't take it!' - Hermes Conrad");
            
        }
        else if (quoteNumber === 18){
            interaction.reply("'Here Leela, take this laser pistol and use it to shoot those guys' - Hermes Conrad");
            
        }
        else if (quoteNumber === 19){
            interaction.reply("'But existing is basically all I do!' - Philip J. Fry");
            
        }
        else if (quoteNumber === 20){
            interaction.reply("'Buddha, Zeus, God! One of you guys, do something!' - Hubert Farnsworth");
            
        }
        else if (quoteNumber === 21){
            interaction.reply("'Hey professor, what's this scrumpf blorking out of the machine?' - Amy Wong");
            
        }
        else if (quoteNumber === 22){
            interaction.reply("'Shut up baby, I know it' - Bender");
            
        }
        else if (quoteNumber === 23){
            interaction.reply("'Addition never solved anything, mon!' - Hermes Conrad");
            
        }
        else if (quoteNumber === 24){
            interaction.reply("'Thats what you get for calling tech-support!' - Mom");
            
        }
        else if (quoteNumber === 25){
            interaction.reply("'Old pal? 8.5 seconds ago you said you hated me' - Hermes Conrad");
            
        }
        else if (quoteNumber === 26){
            interaction.reply("'Jam a bastard in it, you crap!' - Mom");
            
        }
        else if (quoteNumber === 27){
            interaction.reply("'It's gonna be fun on the bun!' - Bender");
            
        }
        else if (quoteNumber === 28){
            interaction.reply("'I'm sorry, Fry, but the anchovy has been extinct since the 2200s' - Hubert Farnsworth");
            
        }
        else if (quoteNumber === 29){
            interaction.reply("'Time heals all wounds' - Bender");
            
        }
        else if (quoteNumber === 30){
            interaction.reply("'It's not a pun, it's a play on words!' - Mom");
            
        }
        else if (quoteNumber === 31){
            interaction.reply("'That was so terrible, I think it gave me cancer!' - Calculon");
            
        }
        else if (quoteNumber === 32){
            interaction.reply("'Let's go already!' - Bender");
            
        }
        else if (quoteNumber === 33){
            interaction.reply("'You sack of bags of buckets of idiots' - Hubert Farnsworth");
            
        }
        else if (quoteNumber === 34){
            interaction.reply("'Up yours, chump, I said it 906 times before lunch' - Bender");
            
        }
        else if (quoteNumber === 35){
            interaction.reply("'A billion robots's lives are going to be extinguished! Ooh, the Jedis are going to feel this one...' - Hubert Farnsworth");
            
        }
        else if (quoteNumber === 36){
            interaction.reply("'Now conquer Earth you bastards!' - Mom");
            
        }
        else if (quoteNumber === 37){
            interaction.reply("'I'll tell you one thing! Nothing acts that cute without some ulterior motive!' - Nibbler");
            
        }
        else if (quoteNumber === 38){
            interaction.reply("'Ass ass ass ass ass ass ass!' - Bender");
            
        }
        else if (quoteNumber === 39){
            interaction.reply("'Move your freaking hoof, you goat!' - Mom");
            
        }
        else if (quoteNumber === 40){
            interaction.reply("'This show is awesome! When I grow up, I'm gonna have so much amnesia!' - Cubert Farnsworth");
            
        }
        else if (quoteNumber === 41){
            interaction.reply("'Hurray, a happy ending for the rich people.' - Dr. Zoidberg");
            
        }
        else if (quoteNumber === 42){
            interaction.reply("'Jewellery? It's jewellery. IT'S JEWELLERY PEOPLE!' - Amy Wong");
            
        }
        else if (quoteNumber === 43){
            interaction.reply("'Behold my handcrafted purity! The modern world can bite my splintery, wooden ass!' - Bender");
            
        }
        else if (quoteNumber === 44){
            interaction.reply("'You whanged my ship, you walnut-panelled idiot! - Hubert Farnsworth");
            
        }
        else if (quoteNumber === 45){
            interaction.reply("'NIXON'S BACK!' - Richard Nixon's Head");
            
        }
        else if (quoteNumber === 46){
            interaction.reply("'I'M THE PROFESSOR, WHY ISN'T ANYONE LISTENING TO ME?!' - Hubert Farnsworth");
            
        }
        else if (quoteNumber === 47){
            interaction.reply("'Hello. We're friends of Philip J. Fry. Oh, my God, is that a Captain Crunch casserole?' - Dr. Zoidberg");
            
        }
        else if (quoteNumber === 48){
            interaction.reply("'Professor, sprinkle us with wisdom from your mighty brain. How scared should we be?' - Hermes Conrad");
            
        }
        else if (quoteNumber === 49){
            interaction.reply("'PROFESSOR! LAVA! HOT!' - Hubert Farnsworth");
            
        }
        else if (quoteNumber === 50){
            interaction.reply("'Give science a chance!' - Dr. Ogden Wernstrom");
            
        }
        else if (quoteNumber === 51){
            interaction.reply("'Its Saturday night. I've got no date, a 2-liter bottle of Shasta, and my all Rush mixtape... Let's rock' - Philip J. Fry");
            
        }
        else if (quoteNumber === 52){
            interaction.reply("'That was so terrible, I think you gave me cancer! I don't care how popular you are, you will never work on my show!' - Calculon");
            
        }
        else if (quoteNumber === 53){
            interaction.reply("'We demand Bender!' - Leela");
            
        }
        else if (quoteNumber === 54){
            interaction.reply("'Calculon, old friend, I'm afraid I need your ears.' - Robot Devil");
            
        }
        else if (quoteNumber === 55){
            interaction.reply("'*beep*' - Boxy");
            
        }
        else if (quoteNumber === 56){
            interaction.reply("'Dream on, skin tube.' - Bender");
            
        }
        else if (quoteNumber === 57){
            interaction.reply("'I love stealin'; I love takin' things!' - Bender");
            
        }
        else if (quoteNumber === 58){
            interaction.reply("'I always said many things.' - Calculon");
            
        }
        else if (quoteNumber === 59){
            interaction.reply("'I'm Bender, baby! Please insert liquor!' - Bender");
            
        }
        else if (quoteNumber === 60){
            interaction.reply("'And so we say goodbye to our beloved pet, Nibbler, who's gone to a place where I, too, hope one day to go. The toilet.' - Professor Farnsworth");
            
        }
        else if (quoteNumber === 61){
            interaction.reply("'My manwich!' - Hermes");
            
        }
        else if (quoteNumber === 62){
            interaction.reply("'Oh, dear! She's stuck in an infinite loop, and he's an idiot! Well, that's love for you.' - Professor Farnsworth");
            
        }
        else if (quoteNumber === 63){
            interaction.reply("'I'm hungrier than a green snake in a sugar cane field.' - Hermes");
            
        }
        else if (quoteNumber === 64){
            interaction.reply("'You haven't seen the last of Barbados Slim! Now goodbye, forever!' - Barbados Slim");
            
        }
        else if (quoteNumber === 65){
            interaction.reply("'Oh, Lordy Lou! Help! Buddha! Zeus! God! One of you guys, do something! Help! Satan, you owe me!' - Professor Farnsworth");
            
        }
        else if (quoteNumber === 66){
            interaction.reply("'What? You've never seen a genius's wiener before?' - Cubert");
            
        }


    }
    catch{
        interaction.reply({content: `Oops! The bot didn't like that, try again`});
    }
}
}