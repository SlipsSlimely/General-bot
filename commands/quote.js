module.exports = {
    name: 'quote',
    description:"this is a quote command!",
    execute(interaction, args){


        // This command uses a randomizer to post text to the chat, the text is lines spoken from my friend group
        number = 256;
        quoteRepeater = 0;
        quoteNumber = Math.floor(Math.random()*(number - 1 + 1))+1;
        if (quoteNumber === quoteRepeater){
            quoteNumber = quoteNumber + 5;
            if (quoteNumber === number){
                quoteNumber = quoteNumber - 6;
            }
        }
        quoteRepeater = quoteNumber;


        if (quoteNumber === 1){
            interaction.reply('"RETARD" - Everyone');
            ///randomizer3 = quoteNumber;
        }
        else if (quoteNumber === 2){ //&& quoteNumber != randomizer3){
            interaction.reply("'Legality hasn't stopped me before' - Fug");
        }
        else if (quoteNumber === 3){
            interaction.reply("'I Unironically love Teen Titans Go and I cannot wait for the movie' - Paul");
        }
        else if (quoteNumber === 4){
            interaction.reply("'Silence dead child before I stuff you in a suit' - The Wood");
        }
        else if (quoteNumber === 5){
            interaction.reply("'Mah Fangers' - Schank");
        }
        else if (quoteNumber === 6){
            interaction.reply("'i get to vore children' - JT");
        }
        else if (quoteNumber === 7){
            interaction.reply("'I already have the INFINITE GAY' - Paul");
        }
        else if (quoteNumber === 8){
            interaction.reply("'Dont reject Todd Howard Gavin' - Fug");
        }
        else if (quoteNumber === 9){
            interaction.reply("'The Dwagon is mine fuckboy :HelloThereGrabsAndTakesYouToTheL:' - Fug");
        }
        else if (quoteNumber === 10){
            interaction.reply("'I'm the king of tards' - Gavin");
        }
        else if (quoteNumber === 11){
            interaction.reply("'Cum inside it's fun inside :hellothere:' - JT");
        }
        else if (quoteNumber === 12){
            interaction.reply("'Bionicle, I think you mean, BIONATHICC' - The Wood");
        }
        else if (quoteNumber === 13){
            interaction.reply("'Wow that's fucked up lol' - Gavin");
        }
        else if (quoteNumber === 14){
            interaction.reply("'GONNA KILL GINGER NOW BECAUSE UPSET' - Gavin");
        }
        else if (quoteNumber === 15){
            interaction.reply("'BEGONE WITH YOU' - Gavin");
        }
        else if (quoteNumber === 16){
            interaction.reply("'/immediately goes simp' - Ali");
        }
        else if (quoteNumber === 17){
            interaction.reply("'***These onions are too liquid.*** ***____I must remove the liquid____***' - Ali");
        }
        else if (quoteNumber === 18){
            interaction.reply("'10/10 meme' - matt");
        }
        else if (quoteNumber === 19){
            interaction.reply("'my teeth are currently being kicked in' - matt");
        }
        else if (quoteNumber === 20){
            interaction.reply("'I may or may not have whaled to get her' - matt");
        }
        else if (quoteNumber === 21){
            interaction.reply("'There's my posting for the month' - Kyle");
        }
        else if (quoteNumber === 22){
            interaction.reply("'What does a Walmart vest get me' - Kyle");
        }
        else if (quoteNumber === 23){
            interaction.reply("'Dont spoil the surprise' - Kyle");
        }
        else if (quoteNumber === 24){
            interaction.reply("'( ͡° ʖ̯ ͡°)╭∩╮' - The Wood");
        }
        else if (quoteNumber === 25){
            interaction.reply("'Ayyyyyy lmaonaise' - The Wood");
        }
        else if (quoteNumber === 26){
            interaction.reply("'I'll show you tomorrow' - The Wood");
        }
        else if (quoteNumber === 27){
            interaction.reply("'I too am just a kid' - Ali");
        }
        else if (quoteNumber === 28){
            interaction.reply("'The Coltonpocolyps' - Ali");
        }
        else if (quoteNumber === 29){
            interaction.reply("'I have no idea' - JT");
        }
        else if (quoteNumber === 30){
            interaction.reply("'The longer my life goes on the more I think all star would be a song I would write' - JT");
        }
        else if (quoteNumber === 31){
            interaction.reply("'I have no idea' - JT");
        }
        else if (quoteNumber === 32){
            interaction.reply("'Wacc' - Paul");
        }
        else if (quoteNumber === 33){
            interaction.reply("'FUCK YOU' - Paul");
        }
        else if (quoteNumber === 34){
            interaction.reply("'This is now a famous Youtuber AMA' - Fug");
        }
        else if (quoteNumber === 35){
            interaction.reply("'Roleplay? Lets do it. UwU xD rawr imma foxy boiiii xDDDDD' - Fug");
        }
        else if (quoteNumber === 36){
            interaction.reply("'destructo fidget spinner' - Schank");
        }
        else if (quoteNumber === 37){
            interaction.reply("'get this filth out of here' - Schank");
        }
        else if (quoteNumber === 38){
            interaction.reply("'My waifu freeza or my husbando broly' - Schank");
        }
        else if (quoteNumber === 39){
            interaction.reply("'How do I send links to this chat' - The Wood");
        }
        else if (quoteNumber === 40){
            interaction.reply("'I am dumb' - The Wood");
        }
        else if (quoteNumber === 41){
            interaction.reply("'I want to cum inside your Mickey Mouse Clubhouse' - JT");
        }
        else if (quoteNumber === 42){
            interaction.reply("'I hate Matt, but matt is great' - Ali");
        }
        else if (quoteNumber === 43){
            interaction.reply("'10/10 matts' - Ali");
        }
        else if (quoteNumber === 44){
            interaction.reply("'HORSE' - Akira");
        }
        else if (quoteNumber === 45){
            interaction.reply("'Well, first you join tinder' - Ali");
        }
        else if (quoteNumber === 46){
            interaction.reply("'Cant nut, gavin's mayor' - Ali");
        }
        else if (quoteNumber === 47){
            interaction.reply("'I'm crying laughing at my own joke' - Ali");
        }
        else if (quoteNumber === 48){
            interaction.reply("'Don't do that you'll get addicted' - Ali");
        }
        else if (quoteNumber === 49){
            interaction.reply("'god I wish that were me' - JT");
        }
        else if (quoteNumber === 50){
            interaction.reply("'You'll make a fine rug cat!' - The Wood");
        }
        else if (quoteNumber === 51){
            interaction.reply("'I always come back' - Toddbot");
        }
        else if (quoteNumber === 52){
            interaction.reply("'Like your sense of humor' - JT");
        }
        else if (quoteNumber === 53){
            interaction.reply("'Colton if I die you can have my switch' - matt");
        }
        else if (quoteNumber === 54){
            interaction.reply("'Cringe List (updated): matt > Downes > Ali > Paul > Ginger > JT > Me > Schank > Colton' - Gavin");
        }
        else if (quoteNumber === 55){
            interaction.reply("'Like if Paul was shorter and anorexic' - Ali");
        }
        else if (quoteNumber === 56){
            interaction.reply("'Poggers!' - Everyone");
        }
        else if (quoteNumber === 57){
            interaction.reply("'The Darkest AJ' - Paul");
        }
        else if (quoteNumber === 58){
            interaction.reply("'Spoilers for 2022, a year that just started: Gavin fuckin dies' - AJ");
        }
        else if (quoteNumber === 59){
            interaction.reply("'TRUE.' -JT");
        }
        else if (quoteNumber === 60){
            interaction.reply("'An Alolan Ninetails is voring you' - AJ");
        }
        else if (quoteNumber === 61){
            interaction.reply("'Pokemon: The FBI wants to know your location' - AJ");
        }
        else if (quoteNumber === 62){
            interaction.reply("'My IQ is in Comic Sans' - AJ");
        }
        else if (quoteNumber === 63){
            interaction.reply("'I am the Virgin Retard' - Gavin");
        }
        else if (quoteNumber === 64){
            interaction.reply("'Tardsus' - Downes");
        }
        else if (quoteNumber === 65){
            interaction.reply("'What's vernors, is that a soda?' - JT");
        }
        else if (quoteNumber === 66){
            interaction.reply("'I WANNA ROLEPLAY SEXING CHILDREB' - Ginger");
        }
        else if (quoteNumber === 67){
            interaction.reply("'There were only 2 things Chair-Sama was wary of Peter Griffin’s cutaway gags and the unlikely yet highly terrifying event that 2 Ferroseeds appeared beside him while sleeping' - Schank");
        }
        else if (quoteNumber === 68){
            interaction.reply("'You are fucking cancer sometimes man lmao' - Paul");
        }
        else if (quoteNumber === 69){
            interaction.reply("'WW3 is going to be about gaming' - Downes");
        }
        else if (quoteNumber === 70){
            interaction.reply("'I agree that emoji looks like it wants to sell me air' - The Wood");
        }
        else if (quoteNumber === 71){
            interaction.reply("'don't just ok me you backwards door placing fuck' - Gavin");
        }
        else if (quoteNumber === 72){
            interaction.reply("'You are always going to be one step behind the Lovable cartoon sitcom dad Peter Griffin' - Schank");
        }
        else if (quoteNumber === 73){
            interaction.reply("'TARDVIN SMASH' - Tardvin");
        }
        else if (quoteNumber === 74){
            interaction.reply("'JT and SugarCookievin gonna have some steamy nights together UwU' - Schank");
        }
        else if (quoteNumber === 75){
            interaction.reply("'The chaos blades crave blood, unfortunately for Kratos, when he cuts you all he'll get is blubber' - Downes");
        }
        else if (quoteNumber === 76){
            interaction.reply("'Did I also mention that you found being in Bawabawa extremely hawt' - Schank");
        }
        else if (quoteNumber === 77){
            interaction.reply("'Wanna fuck in it?' - Colton");
        }
        else if (quoteNumber === 78){
            interaction.reply("'Can't wait for the inevitable Family Guy movie' - Colton");
        }
        else if (quoteNumber === 79){
            interaction.reply("'Can I come with? I wanna live stream me eating J.T's coloesseum' - Colton");
        }
        else if (quoteNumber === 80){
            interaction.reply("'This has devolved so fast' - JT");
        }
        else if (quoteNumber === 81){
            interaction.reply("'WI'll take two of each gender' - JT");
        }
        else if (quoteNumber === 82){
            interaction.reply("'and I love Epstein' - Ginger");
        }
        else if (quoteNumber === 83){
            interaction.reply("'Ripperoni' - Colton");
        }
        else if (quoteNumber === 84){
            interaction.reply("'Widdle baby needs a ride' - Gavin");
        }
        else if (quoteNumber === 85){
            interaction.reply("'I'll just get Colton really inebriated and convince him to pass you instead' - Gavin");
        }
        else if (quoteNumber === 86){
            interaction.reply("'My boys are all growing up' - Gavin");
        }
        else if (quoteNumber === 87){
            interaction.reply("'Because I have long monopoly' - JT");
        }
        else if (quoteNumber === 88){
            interaction.reply("'ALL I SAID WAS HE HAS A PUNCHABLE FACE' - JT");
        }
        else if (quoteNumber === 89){
            interaction.reply("'you do know my very openly homosexual manager who reads yaoi would fuck him vary eagerly, right?' - JT");
        }
        else if (quoteNumber === 90){
            interaction.reply("'JT hates gays and ballet players, confirmed' - Gavin");
        }
        else if (quoteNumber === 91){
            interaction.reply("'Colton if I die you can have my switch' - matt");
        }
        else if (quoteNumber === 92){
            interaction.reply("'Cringe list (updated): matt > Downes > Ali > Paul > Ginger > JT > Me > Schank > Colton' - Gavin");
        }
        else if (quoteNumber === 93){
            interaction.reply("'Roxanne Wolf is so hot. Never in the history of gaming has there been a hotter character. She is more than a robot wolf to me, she is a person. She is a little tease but she's basically my wife. The devs know what they did with that wolf. The aesthetic paired with her demeanor make her such an attractive character. Nothing gets me going better than a punk rock wolf chick. Every inch of her is so hot. Her thighs up to her midriff and her eyes. Every inch of her is perfection incarnate. I would save the game and let her catch me just to feel the intimacy between us. I crave more than lustful fantasies with her, I seek deep romantic involvement. The craftsmanship of her character surpasses everything I expected from this game. Her tone of voice and language choice formats her character. The choice of clothes with short shorts and the crop top which reveal her milky thighs and delectable midriff compliment her punk rock personality more. She is my wife, and nothing dissuades me from this' - Downes");
        }
        else if (quoteNumber === 94){
            interaction.reply("'im just here for the chaos' - Gavin");
        }
        else if (quoteNumber === 95){
            interaction.reply("'Yup, that's going in the bot' - Paul");
        }
        else if (quoteNumber === 96){
            interaction.reply("'look JT i know we all hate K-Pop but gay is okay' - Gavin");
        }
        else if (quoteNumber === 97){
            interaction.reply("'paul is farming for funny' - Gavin");
        }
        else if (quoteNumber === 98){
            interaction.reply("'i'll kill' - JT");
        }
        else if (quoteNumber === 99){
            interaction.reply("'put that in the bot paul, right fucking now' - Gavin");
        }
        else if (quoteNumber === 100){
            interaction.reply("'anyway fuck kpop im going back to my cave of sickness and despair' - Gavin");
        }
        else if (quoteNumber === 101){
            interaction.reply("'Why do people make fun of skin milk :SufferT' - JT");
        }
        else if (quoteNumber === 102){
            interaction.reply("'I'll take shit both Paul and Ali say to me for 1000' - Downes");
        }
        else if (quoteNumber === 103){
            interaction.reply("':goldhellothere: It's Paul, good luck 'Gaymer'  I eat kids like you for breakfast,:GiornoDrink: no bitches, only pros, ya know what I mean? :thinkjojo: Mario Kart 4 lyfe!!!! We on that grinddd :mechanical_arm:' - Paul");
        }
        else if (quoteNumber === 104){
            interaction.reply("'I can't drink my damn milkshakes from there bc it's thicker than jeter' - Ali");
        }
        else if (quoteNumber === 105){
            interaction.reply("'waifus =/= whore' - JT");
        }
        else if (quoteNumber === 106){
            interaction.reply("'I would let all my wives CBT/Dick Flatten me' - Downes");
        }
        else if (quoteNumber === 107){
            interaction.reply("'QHY IS MY PHONE AGAONST ME TODAY' - Ali");
        }
        else if (quoteNumber === 108){
            interaction.reply("'CLARIFY FOR US LORD JETER' - Ali");
        }
        else if (quoteNumber === 109){
            interaction.reply("'this is a problem again' - JT");
        }
        else if (quoteNumber === 110){
            interaction.reply("'ClOuDed By AnGeR' - JT");
        }
        else if (quoteNumber === 111){
            interaction.reply("'jT YOUR INSANE' - Ali");
        }
        else if (quoteNumber === 112){
            interaction.reply("'Well lucky for you I am math' - Colton");
        }
        else if (quoteNumber === 113){
            interaction.reply("'King Tardvin, if I may' - Gavin");
        }        
        else if (quoteNumber === 114){
            interaction.reply("'My goals are beyond your comprehension' - Colton");
        }       
        else if (quoteNumber === 115){
            interaction.reply("'2022 Cringe List: Ginger > Kaleb > JT > Ali > Annika > Paul > Colton > Schank > Gavin > matt > Downes' - Gavin");
        }        
        else if (quoteNumber === 116){
            interaction.reply("'CRINGE' - Everyone");
        }        
        else if (quoteNumber === 117){
            interaction.reply("'kaleb is omega ultra super level cringe. my source is that I made it the fuck up' - Gavin");
        }        
        else if (quoteNumber === 118){
            interaction.reply("'after further consideration I declare ginger the most cringe because of the genshin impact cosplays :WoodDrip:' - Gavin");
        }        
        else if (quoteNumber === 119){
            interaction.reply("'we have a lolicon server' - Ginger");
        }        
        else if (quoteNumber === 120){
            interaction.reply("'Can't make a disney.com profile without parents permission is pretty cringe' - AJ");
        }        
        else if (quoteNumber === 121){
            interaction.reply("'BEING A MINOR? CRINGE' - AJ");
        }        
        else if (quoteNumber === 122){
            interaction.reply("'Mans doesn't season eggs. That's cringe asf' - AJ");
        }
        else if (quoteNumber === 123){
            interaction.reply("'well i didnt want to be white either but here we are' - Gavin");
        }  
        else if (quoteNumber === 124){
            interaction.reply("'IM GONNA COMMIT HOMICIDE' - Gavin");
        }  
        else if (quoteNumber === 125){
            interaction.reply("'My little Poussy' - JT");
        }  
        else if (quoteNumber === 126){
            interaction.reply("'Neigh, replies God' - Fug");
        }  
        else if (quoteNumber === 127){
            interaction.reply("'Thank God almighty, I can have peace at last gavin' - Gavin");
        }  
        else if (quoteNumber === 128){
            interaction.reply("'What if you killed yourself, but god said: Sussy houssy mare stalionvin' - JT");
        }  
        else if (quoteNumber === 129){
            interaction.reply("'Sweet horse dreams, Marevin' - AJ");
        }  
        else if (quoteNumber === 130){
            interaction.reply("'I crave the sweet release of death' - Gavin");
        }  
        else if (quoteNumber === 131){
            interaction.reply("'The void beckons me closer every day' - Gavin");
        }  
        else if (quoteNumber === 132){
            interaction.reply("'It calls to me and I must answer' - Gavin");
        }  
        else if (quoteNumber === 133){
            interaction.reply("'what's the matter gavin, no bitches?' - JT");
        }  
        else if (quoteNumber === 134){
            interaction.reply("you see that lizard? get him' - Fug");
        }  
        else if (quoteNumber === 135){
            interaction.reply("'You're dead. Stay dead' - AJ");
        }  
        else if (quoteNumber === 136){
            interaction.reply("'gotta get someone who looks at me like colton looks at gavin killing himself' - Kaleb");
        }  
        else if (quoteNumber === 137){
            interaction.reply("'i will personally fucking suffocate people with my obesity who dare to tell me they use these around me' - JT");
        }  
        else if (quoteNumber === 138){
            interaction.reply("'February 28th is the server's anniversary' - JT");
        }  
        else if (quoteNumber === 139){
            interaction.reply("'Vore is Paul's favorite, Choose something else' - Schank");
        }  
        else if (quoteNumber === 140){
            interaction.reply("'Just make a bowl of ice and water, Like a sad version of cereal' - Schank");
        }  
        else if (quoteNumber === 141){
            interaction.reply("'Oliver has 15 uncles. I split JT into 42 pieces and unfortunately some survived' - Paul");
        }  
        else if (quoteNumber === 142){
            interaction.reply("'IGNORE MY FAT FINGERING' - JT");
        }          
        else if (quoteNumber === 143){
            interaction.reply("'Do it fatty no balls' - JT");
        }  
        else if (quoteNumber === 144){
            interaction.reply("'everything I say makes zero sense and is so fucking stupid that it's funny' - Gavin");
        }  
        else if (quoteNumber === 145){
            interaction.reply("you people are degenerate incels :FD_CheemsWeird:' - Kaleb");
        }  
        else if (quoteNumber === 146){
            interaction.reply("'But to be fair, the rear meat is something I'm more partial to' - JT");
        }          
        else if (quoteNumber === 147){
            interaction.reply("'Man I'm about to get my sinussy penetrated and man I don't wanna' - The Wood");
        }  
        else if (quoteNumber === 148){
            interaction.reply("'says the man who said his anal limit was nothing' - JT");
        }  
        else if (quoteNumber === 149){
            interaction.reply("'Schank-Senpai at your service' - Schank");
        }  
        else if (quoteNumber === 150){
            interaction.reply("'Colton if I die you can have my switch' - matt");
        }  
        else if (quoteNumber === 151){
            interaction.reply("'Welcome to Cultural Geography 101 with Paul' - Gavin");
        }  
        else if (quoteNumber === 152){
            interaction.reply("'Did you know they're singing in Black?' - Paul");
        }  
        else if (quoteNumber === 153){
            interaction.reply("'I just walk' - The Wood");
        }  
        else if (quoteNumber === 154){
            interaction.reply("'bananas a fucking weird' - JT");
        }  
        else if (quoteNumber === 155){
            interaction.reply("'Had a dream where I ate a whole box of pencils' - JT");
        }  
        else if (quoteNumber === 156){
            interaction.reply("'sorry we don't know obscure porn' - Akira");
        }  
        else if (quoteNumber === 157){
            interaction.reply("'gay people 🙄' - JT");
        }  
        else if (quoteNumber === 158){
            interaction.reply("'this is NOT going to end well' - JT");
        }  
        else if (quoteNumber === 159){
            interaction.reply("'unfortunately, steven is a real person' - Akira");
        }  
        else if (quoteNumber === 160){
            interaction.reply("'put the minor in a maid outfit' - Ali");
        }  
        else if (quoteNumber === 161){
            interaction.reply("'sensitive' - Akira");
        }  
        else if (quoteNumber === 162){
            interaction.reply("'ey yo sounding is pretty underrated' - JT");
        }  
        else if (quoteNumber === 163){
            interaction.reply("'Why is everyone except me getting pizza' - Gavin");
        }  
        else if (quoteNumber === 164){
            interaction.reply("'What did the cheese do' - The Wood");
        }  
        else if (quoteNumber === 165){
            interaction.reply("'I just got karma'd by the block of cheese I'm eating fuck' - Paul");
        }  
        else if (quoteNumber === 166){
            interaction.reply("'Neigh, replies God' - Fug");
        }  
        else if (quoteNumber === 167){
            interaction.reply("'IM GONNA COMMIT HOMICIDE' - Gavin");
        }  
        else if (quoteNumber === 168){
            interaction.reply("'My little Poussy' - JT");
        }  
        else if (quoteNumber === 169){
            interaction.reply("'the spirit of mental retardation :FD_SuperTardvin:' - Gavin");
        }  
        else if (quoteNumber === 170){
            interaction.reply("'Cars is unironically better than all of those movies' - Fug");
        }  
        else if (quoteNumber === 171){
            interaction.reply("'grug eat cheese. grug like taste.' - Fug");
        }  
        else if (quoteNumber === 172){
            interaction.reply("'You know, I wanted to meme on Paul about caring too much about Pokemon Lore. And then we do shit like this and I start thinking Paul is the normal one here.' - Fug");
        }  
        else if (quoteNumber === 173){
            interaction.reply("'You could make a carpet out of your leg hair' - JT");
        }  
        else if (quoteNumber === 174){
            interaction.reply("'god fucking chimps is so hard :FD_godwhy:' - Akira");
        }  
        else if (quoteNumber === 175){
            interaction.reply("'Mare Gavin omg he's a female horse' - Fug");
        }
        else if (quoteNumber === 176){
            interaction.reply("'im gonna do your mom on purpose' - Kaleb");
        }
        else if (quoteNumber === 177){
            interaction.reply("'I was only pretending to be retarded' - Downes");
        }
        else if (quoteNumber === 178){
            interaction.reply("'My favorite part of Pokemon Unite was when Schank said 'Its Pupin time!' And proceeded to Pupe all over the enemy team' - Downes");
        }
        else if (quoteNumber === 179){
            interaction.reply("'MOMMY' - Downes");
        }
        else if (quoteNumber === 180){
            interaction.reply("'Sure thing diversity hire' - The Wood");
        }
        else if (quoteNumber === 181){
            interaction.reply("'I wanna slurp Downes' mustache' - Akira");
        }
        else if (quoteNumber === 182){
            interaction.reply("'croak before you stroke' - Gaver");
        }
        else if (quoteNumber === 183){
            interaction.reply("'I make good choices' - Paul");
        }
        else if (quoteNumber === 184){
            interaction.reply("'This really says a lot about society' - Downes");
        }
        else if (quoteNumber === 185){
            interaction.reply("'the sleep you dumb' - Akira");
        }
        else if (quoteNumber === 186){
            interaction.reply("'i dont read' - Gaver");
        }
        else if (quoteNumber === 187){
            interaction.reply("'JT is the honorary horseman of the retardpocalypse for this take' - Gaver");
        }
        else if (quoteNumber === 188){
            interaction.reply("'fake news, Downes is incel' - Akira");
        }
        else if (quoteNumber === 189){
            interaction.reply("'i sure do love loli porn' - Paul");
        }
        else if (quoteNumber === 190){
            interaction.reply("'AJ was suducing jt' - Akira");
        }
        else if (quoteNumber === 191){
            interaction.reply("'Paul is to be antagonized by his past sins forever' - Downes");
        }
        else if (quoteNumber === 192){
            interaction.reply("'do not throw my son into a camp fire' - AJ");
        }
        else if (quoteNumber === 193){
            interaction.reply("'Jt do you know how dicks form' - AJ");
        }
        else if (quoteNumber === 194){
            interaction.reply("'do i look like i've grown any dicks recently?' - JT");
        }
        else if (quoteNumber === 195){
            interaction.reply("'YOU LAUGH LOUD AS FUCK' - Paul");
        }
        else if (quoteNumber === 196){
            interaction.reply("'HELP HES HITTING ME' - AJ");
        }
        else if (quoteNumber === 197){
            interaction.reply("'get to banging, fat boy' - AJ");
        }
        else if (quoteNumber === 198){
            interaction.reply("'this is out of my comfort zone' - JT");
        }
        else if (quoteNumber === 199){
            interaction.reply("'This gives me an idea for a kill command' - Paul");
        }
        else if (quoteNumber === 200){
            interaction.reply("'i have my own desk to bang god damn it' - JT");
        }
        else if (quoteNumber === 201){
            interaction.reply("'lemme see your dick' - JT");
        }
        else if (quoteNumber === 202){
            interaction.reply("'So let's let you keep the government away while the men get the work done' - The Wood");
        }
        else if (quoteNumber === 203){
            interaction.reply("'God I hate that so much Your a fucking retard that should have there life subscription cancelled' - Schank");
        }
        else if (quoteNumber === 204){
            interaction.reply("'I'm homie-sexual' - JT");
        }
        else if (quoteNumber === 205){
            interaction.reply("'Please sir, a singular pog?' - AJ");
        }
        else if (quoteNumber === 206){
            interaction.reply("'Your cousin killed the cheese' - The Wood");
        }
        else if (quoteNumber === 207){
            interaction.reply("'We love racism here' - Gaver");
        }
        else if (quoteNumber === 208){
            interaction.reply("'but legality ruins them' - AJ");
        }
        else if (quoteNumber === 209){
            interaction.reply("'IM RETARDED NOOOOOOOOO' - Gaver");
        }
        else if (quoteNumber === 210){
            interaction.reply("'im not a smasher' - Akira");
        }
        else if (quoteNumber === 211){
            interaction.reply("'Remember when JTs hair literally came to life and ran across the floor' - Schank");
        }
        else if (quoteNumber === 212){
            interaction.reply("'IM ONOBILE' - Akira");
        }
        else if (quoteNumber === 213){
            interaction.reply("'Unless in the unlikely event any other member of this server that has penis has a sexual interaction with a female' - Schank");
        }
        else if (quoteNumber === 214){
            interaction.reply("'he's challenged a lot in life, gotta take the small victories' - JT");
        }
        else if (quoteNumber === 215){
            interaction.reply("'please stop spreading your horny' - JT");
        }
        else if (quoteNumber === 216){
            interaction.reply("'imma eat thousands of raw almonds and apple seeds' - AJ");
        }
        else if (quoteNumber === 217){
            interaction.reply("'OH NO CONFLICTING POINTS OF INTEREST' - JT");
        }
        else if (quoteNumber === 218){
            interaction.reply("'GOD GAVE ME FORKS THEYRE CALLED FINGERS' - AJ");
        }
        else if (quoteNumber === 219){
            interaction.reply("'lemme smack those depressed cheeks' - JT");
        }
        else if (quoteNumber === 220){
            interaction.reply("'you ruined your comedic timing by being here' - JT");
        }
        else if (quoteNumber === 221){
            interaction.reply("'I want to make a black joke right now' - Gaver");
        }
        else if (quoteNumber === 222){
            interaction.reply("'||there's a lot you can get for 40$ :FD_GoldHelloThere: ||' - JT");
        }
        else if (quoteNumber === 223){
            interaction.reply("'i stan the folder' - JT");
        }
        else if (quoteNumber === 224){
            interaction.reply("'my sphincters don't cooperate but that doesn't mean i blame them' - JT");
        }
        else if (quoteNumber === 225){
            interaction.reply("'can't wait for the accidental sex he have in the bathroom at taco bell' - JT");
        }
        else if (quoteNumber === 226){
            interaction.reply("'Please don't make this a class thing just answer the question' - JT");
        }
        else if (quoteNumber === 227){
            interaction.reply("'I did throw Thomas Edison down an elevator shaft though' - The Wood");
        }
        else if (quoteNumber === 228){
            interaction.reply("'Yknow I've always hated Matt for being so tall' - The Wood");
        }
        else if (quoteNumber === 229){
            interaction.reply("'ACAB includes the SCP Foundation' - AJ");
        }
        else if (quoteNumber === 230){
            interaction.reply("'don't worry it' - JT");
        }
        else if (quoteNumber === 231){
            interaction.reply("'he's challenged a lot in life, gotta take the small victories' - JT");
        }
        else if (quoteNumber === 232){
            interaction.reply("'I did a lot of trolling :FD_GanondorfShake:' - Schank");
        }
        else if (quoteNumber === 233){
            interaction.reply("'baby's first Minecraft on hard difficulty' - Gaver");
        }
        else if (quoteNumber === 234){
            interaction.reply("'you're*' - JT");
        }
        else if (quoteNumber === 235){
            interaction.reply("'Well I didn't get the notifications and haven't been checking my phone because' - Gaver");
        }
        else if (quoteNumber === 236){
            interaction.reply("'Though you haven't been following the HOA codes of The Shire' - The Wood");
        }
        else if (quoteNumber === 237){
            interaction.reply("'doorvin moment' - JT");
        }
        else if (quoteNumber === 238){
            interaction.reply("'I didn't build my house in a mountain to have noisy neighbors' - Schank");
        }
        else if (quoteNumber === 239){
            interaction.reply("'schank makes me want to kill myself' - Gavin");
        }
        else if (quoteNumber === 240){
            interaction.reply("'I need to start saying funnier things' - Schank");
        }
        else if (quoteNumber === 241){
            interaction.reply("'Say something funny' - Ali");
        }
        else if (quoteNumber === 242){
            interaction.reply("'well paul's fat ass clapped and turned the bot off i guess' - JT");
        }
        else if (quoteNumber === 243){
            interaction.reply("'No' - Schank");
        }
        else if (quoteNumber === 244){
            interaction.reply("'I GAVE COLTON THE FREDDIE MERCURY TREATMENT' - Gavin");
        }
        else if (quoteNumber === 245){
            interaction.reply("'The rest of us will be blunt sure, but we deliver it in more optimistic tones. Whereas gavin will drop in and go: 17$ an hour is not liveable, lower your expectations' - Paul");
        }
        else if (quoteNumber === 246){
            interaction.reply("'is saying to your manager that she's a pussy slaying girlboss sexual assault' - Ginger");
        }
        else if (quoteNumber === 247){
            interaction.reply("'But watching Gavin eat those cookies made me even harder ' - Schank");
        }
        else if (quoteNumber === 248){
            interaction.reply("'shit yourself, Downed' - Gavin");
        }
        else if (quoteNumber === 249){
            interaction.reply("'Man with that you made me question which of us looks the most like Danny Devito' - Colton");
        }
        else if (quoteNumber === 250){
            interaction.reply("'From YANKING IT TOO HARD TO TINKATON' - Paul");
        }
        else if (quoteNumber === 251){
            interaction.reply("'You gotta clean the plate before you eat smh' - JT");
        }
        else if (quoteNumber === 252){
            interaction.reply("'AND BREEDABLE' - Colton");
        }
        else if (quoteNumber === 253){
            interaction.reply("'If you dont wanna shag your favorite, is it *really* your favorite?' - Downes");
        }
        else if (quoteNumber === 254){
            interaction.reply("'I love lolis' - Ali");
        }
        else if (quoteNumber === 255){
            interaction.reply("'Poke poll wildin today' - Colton");
        }
        else if (quoteNumber === 256){
            interaction.reply("'I mean, Who doesn't wanna fuck their favorite Pokemon' - Colton");
        }
     


        
 
    }
}