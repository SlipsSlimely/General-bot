module.exports = {      //discord.js stuff i think
    name: 'quote',
    description:"This is a quote commmand!",
    execute(interaction, args){

        
        
        const quotes = ['"RETARD" - Everyone'                 // This command uses a randomizer to secect a quote to post to chat.
, `"Legality hasn't stopped me before" - Downes`                                    
, `"I Unironically love Teen Titans Go and I cannot wait for the movie" - Paul`     // Just add new quotes inside at the end of the array (the brackets([])) 
, '"Silence dead child before I stuff you in a suit" - The Wood'                    // with a , (comma) and a   (space) and everything should work fine.
, '"Mah Fangers" - Schank'                                                          // Or don't, I'm not your parent or caretaker.
, '"i get to vore children" - J. T.'
, '"I already have the INFINITE GAY" - Paul'
, '"Dont reject Todd Howard Gavin" - Downes'
, '"The Dwagon is mine fuckboy :HelloThereGrabsAndTakesYouToTheL:" - Downes'    //has emoji
, `"I'm the king of tards" - Gavin`
, `"Cum inside it's fun inside :hellothere:" - J. T.`   //has emoji
, '"Bionicle, I think you mean, BIONATHICC" - The Wood'
, `"Wow that's fucked up lol" - Gavin`
, '"GONNA KILL GINGER NOW BECAUSE UPSET" - Gavin'
, '"BEGONE WITH YOU" - Gavin'
, '"/immediately goes simp" - AJ'
, '"***These onions are too liquid.*** ***____I must remove the liquid____***" - AJ'
, '"10/10 meme" - matt'
, '"my teeth are currently being kicked in" - matt'
, '"I may or may not have whaled to get her" - matt'
, `"There's my posting for the month" - Kyle`
, '"What does a Walmart vest get me" - Kyle'
, '"Dont spoil the surprise" - Kyle'
, '"( ͡° ʖ̯ ͡°)╭∩╮" - The Wood'
, '"Ayyyyyy lmaonaise" - The Wood'
, `"I'll show you tomorrow" - The Wood`
, '"I too am just a kid" - AJ'
, '"The Coltonpocolyps" - AJ'
, '"I have no idea" - J. T.'
, '"The longer my life goes on the more I think all star would be a song I would write" - J. T.'
, '"Wacc" - Paul'
, '"FUCK YOU" - Paul'
, '"This is now a famous Youtuber AMA" - Downes'
, '"Roleplay? Lets do it. UwU xD rawr imma foxy boiiii xDDDDD" - Downes'
, '"destructo fidget spinner" - Schank'
, '"get this filth out of here" - Schank'
, '"My waifu freeza or my husbando broly" - Schank'
, '"How do I send links to this chat" - The Wood'
, '"I am dumb" - The Wood'
, `"I'm gonna cum inside your Mickey Mouse Clubhouse" - J. T.`
, '"I hate Matt, but matt is great" - AJ'
, '"10/10 matts" - AJ'
, '"HORSE" - Akira'
, '"Well, first you join tinder" - AJ'
, `"Cant nut, gavin's mayor" - AJ`
, `"I'm crying laughing at my own joke" - AJ`
, `"Don't do that you'll get addicted" - AJ`
, '"god I wish that were me" - J. T.'
, `"You'll make a fine rug cat!" - The Wood`
, '"I always come back" - Toddbot'
, '"Like your sense of humor" - J. T.'
, '"Colton if I die you can have my switch" - matt'
, '"Cringe List (updated): matt > Downes > Ali > Paul > Ginger > JT > Me > Schank > Colton" - Gavin'
, '"Like if Paul was shorter and anorexic" - AJ'
, '"Poggers!" - Everyone'
, '"The Darkest AJ" - Paul'
, '"Spoilers for 2022, a year that just started: Gavin fuckin dies" - AJ'
, '"TRUE." - J. T.'
, '"An Alolan Ninetails is voring you" - AJ'
, '"Pokemon: The FBI wants to know your location" - AJ'
, '"My IQ is in Comic Sans" - AJ'
, '"I am the Virgin Retard" - Gavin'
, '"Tardsus" - Downes'
, `"What's vernors, is that a soda?" - J. T.`
, '"I WANNA ROLEPLAY SEXING CHILDREB" - Akira'
, `"There were only 2 things Chair-Sama was wary of Peter Griffin’s cutaway gags and the unlikely yet highly terrifying event that 2 Ferroseeds appeared beside him while sleeping" - Schank`
, '"You are fucking cancer sometimes man lmao" - Paul'
, '"WW3 is going to be about gaming" - Downes'
, '"I agree that emoji looks like it wants to sell me air" - The Wood'
, `"don't just ok me you backwards door placing fuck" - Gavin`
, '"You are always going to be one step behind the Lovable cartoon sitcom dad Peter Griffin" - Schank'
, '"TARDVIN SMASH" - Gavin'
, '"JT and SugarCookievin gonna have some steamy nights together UwU" - Schank'
, `"The chaos blades crave blood, unfortunately for Kratos, when he cuts you all he'll get is blubber" - Downes`
, '"Did I also mention that you found being in Bawabawa extremely hawt" - Schank'
, '"Wanna fuck in it?" - The Wood'
, `"Can't wait for the inevitable Family Guy movie" - The Wood`
, `"Can I come with? I wanna live stream me eating J.T's coloesseum" - The Wood`
, '"This has devolved so fast" - J. T.'
, `"We'll take two of each gender" - J. T.`
, '"and I love Epstein" - Akira'
, '"Ripperoni" - The Wood'
, '"Widdle baby needs a ride" - Gavin'
, `"I'll just get Colton really inebriated and convince him to pass you instead" - Gavin`
, '"My boys are all growing up" - Gavin'
, '"Because I have long monopoly" - J. T.'
, '"ALL I SAID WAS HE HAS A PUNCHABLE FACE" - J. T.'
, '"you do know my very openly homosexual manager who reads yaoi would fuck him vary eagerly, right?" - J. T.'
, '"JT hates gays and ballet players, confirmed" - Gavin'
, `"Roxanne Wolf is so hot. Never in the history of gaming has there been a hotter character. She is more than a robot wolf to me, she is a person. She is a little tease but she's basically my wife. The devs know what they did with that wolf. The aesthetic paired with her demeanor make her such an attractive character. Nothing gets me going better than a punk rock wolf chick. Every inch of her is so hot. Her thighs up to her midriff and her eyes. Every inch of her is perfection incarnate. I would save the game and let her catch me just to feel the intimacy between us. I crave more than lustful fantasies with her, I seek deep romantic involvement. The craftsmanship of her character surpasses everything I expected from this game. Her tone of voice and language choice formats her character. The choice of clothes with short shorts and the crop top which reveal her milky thighs and delectable midriff compliment her punk rock personality more. She is my wife, and nothing dissuades me from this" - Downes`
, '"im just here for the chaos" - Gavin'
, `"Yup, that's going in the bot" - Paul`
, '"look JT i know we all hate K-Pop but gay is okay" - Gavin'
, '"paul is farming for funny" - Gavin'
, `"i'll kill" - J. T.`
, '"put that in the bot paul, right fucking now" - Gavin'
, '"anyway fuck kpop im going back to my cave of sickness and despair" - Gavin'
, '"Why do people make fun of skin milk :FD_SufferT:" - J. T.' // has emoji
, `"I'll take shit both Paul and Ali say to me for 1000" - Downes`
, `":goldhellothere: It's Paul, good luck 'Gaymer'  I eat kids like you for breakfast,:GiornoDrink: no bitches, only pros, ya know what I mean? :thinkjojo: Mario Kart 4 lyfe!!!! We on that grinddd :mechanical_arm:" - Paul`  //has emoji
, `"I can't drink my damn milkshakes from there bc it's thicker than jeter" - AJ`
, '"waifus =/= whore" - J. T.'
, '"I would let all my wives CBT/Dick Flatten me" - Downes'
, '"QHY IS MY PHONE AGAONST ME TODAY" - AJ'
, '"CLARIFY FOR US LORD JETER" - AJ'
, '"this is a problem again" - J. T.'
, '"ClOuDed By AnGeR" - J. T.'
, '"jT YOUR INSANE" - AJ'
, '"Well lucky for you I am math" - The Wood'
, '"King Tardvin, if I may" - Gavin'
, '"My goals are beyond your comprehension" - The Wood'
, '"2022 Cringe List: Ginger > Kaleb > JT > Ali > Annika > Paul > Colton > Schank > Gavin > matt > Downes" - Gavin'
, '"CRINGE" - Everyone'
, '"kaleb is omega ultra super level cringe. my source is that I made it the fuck up" - Gavin'
, '"after further consideration I declare ginger the most cringe because of the genshin impact cosplays :WoodDrip:" - Gavin'    //has emoji
, '"we have a lolicon server" - Akira'
, `"Can't make a disney.com profile without parents permission is pretty cringe" - AJ`
, '"BEING A MINOR? CRINGE" - AJ'
, `"Mans doesn't season eggs. That's cringe asf" - AJ`
, '"well i didnt want to be white either but here we are" - Gavin'
, '"IM GONNA COMMIT HOMICIDE" - Gavin'
, '"My little Poussy" - J. T.'
, '"Neigh, replies God" - Downes'
, '"Thank God almighty, I can have peace at last gavin" - Gavin'
, '"What if you killed yourself, but god said: Sussy houssy mare stalionvin" - J. T.'
, '"Sweet horse dreams, Marevin" - AJ'
, '"I crave the sweet release of death" - Gavin'
, '"The void beckons me closer every day" - Gavin'
, '"It calls to me and I must answer" - Gavin'
, `"what's the matter gavin, no bitches?" - J. T.`
, '"you see that lizard? get him" - Downes'
, `"You're dead. Stay dead" - AJ`
, '"gotta get someone who looks at me like colton looks at gavin killing himself" - Kaleb'
, '"i will personally fucking suffocate people with my obesity who dare to tell me they use these around me" - J. T.'
, `"February 28th is the server's anniversary" - J. T.`
, `"Vore is Paul's favorite, Choose something else" - Schank`
, '"Just make a bowl of ice and water, Like a sad version of cereal" - Schank'
, '"Oliver has 15 uncles. I split JT into 42 pieces and unfortunately some survived" - Paul'
, '"IGNORE MY FAT FINGERING" - J. T.'
, '"Do it fatty no balls" - J. T.'
, `"everything I say makes zero sense and is so fucking stupid that it's funny" - Gavin`
, '"you people are degenerate incels :FD_CheemsWeird:" - Kaleb' //has emoji
, `"But to be fair, the rear meat is something I'm more partial to" - J. T.`
, `"Man I'm about to get my sinussy penetrated and man I don't wanna" - The Wood`
, '"says the man who said his anal limit was nothing" - J. T.'
, '"Schank-Senpai at your service" - Schank'
, '"Welcome to Cultural Geography 101 with Paul" - Gavin'
, `"Did you know they're singing in Black?" - Paul`
, '"I just walk" - The Wood'
, '"bananas a fucking weird" - J. T.'
, '"Had a dream where I ate a whole box of pencils" - J. T.'
, `"sorry we don't know obscure porn" - Akira`
, '"gay people 🙄" - J. T.'
, '"this is NOT going to end well" - J. T.'
, '"unfortunately, steven is a real person" - Akira'
, '"put the minor in a maid outfit" - AJ'
, '"sensitive" - Akira'
, '"ey yo sounding is pretty underrated" - J. T.'
, '"Why is everyone except me getting pizza" - Gavin'
, '"What did the cheese do" - The Wood'
, `"I just got karma'd by the block of cheese I'm eating fuck" - Paul`
, '"Neigh, replies God" - Downes'
, '"the spirit of mental retardation :FD_SuperTardvin:" - Gavin'    //has emoji
, '"Cars is unironically better than all of those movies" - Downes'
, '"grug eat cheese. grug like taste." - Downes'
, '"You know, I wanted to meme on Paul about caring too much about Pokemon Lore. And then we do shit like this and I start thinking Paul is the normal one here." - Downes'
, '"You could make a carpet out of your leg hair" - J. T.'
, '"god fucking chimps is so hard :FD_godwhy:" - Akira' //has emoji
, `"Mare Gavin omg he's a female horse" - Downes`
, '"im gonna do your mom on purpose" - Kaleb'
, '"I was only pretending to be retarded" - Downes'
, `"My favorite part of Pokemon Unite was when Schank said 'Its Pupin time!' And proceeded to Pupe all over the enemy team" - Downes`
, '"MOMMY" - Downes'
, '"Sure thing diversity hire" - The Wood'
, `"I wanna slurp Downes' mustache" - Akira`
, '"croak before you stroke" - Gavin'
, '"I make good choices" - Paul'
, '"This really says a lot about society" - Downes'
, '"the sleep you dumb" - Akira'
, '"i dont read" - Gavin'
, '"JT is the honorary horseman of the retardpocalypse for this take" - Gavin'
, '"fake news, Downes is incel" - Akira'
, 'i sure do love loli porn" - Paul'
, '"AJ was suducing jt" - Akira'
, '"Paul is to be antagonized by his past sins forever" - Downes'
, '"do not throw my son into a camp fire" - AJ'
, '"Jt do you know how dicks form" - AJ'
, `"do i look like i've grown any dicks recently?" - J. T.`
, '"YOU LAUGH LOUD AS FUCK" - Paul'
, '"HELP HES HITTING ME" - AJ'
, '"get to banging, fat boy" - AJ'
, '"this is out of my comfort zone" - J. T.'
, '"This gives me an idea for a kill command" - Paul'
, '"i have my own desk to bang god damn it" - J. T.'
, '"lemme see your dick" - J. T.'
, `"So let's let you keep the government away while the men get the work done" - The Wood`
, '"God I hate that so much Your a fucking retard that should have there life subscription cancelled" - Schank'
, `"I'm homie-sexual" - J. T.`
, '"Please sir, a singular pog?" - AJ'
, '"Your cousin killed the cheese" - The Wood'
, '"We love racism here" - Gavin'
, '"but legality ruins them" - AJ'
, '"IM RETARDED NOOOOOOOOO" - Gavin'
, '"im not a smasher" - Akira'
, '"Remember when JTs hair literally came to life and ran across the floor" - Schank'
, '"IM ONOBILE" - Akira'
, '"Unless in the unlikely event any other member of this server that has penis has a sexual interaction with a female" - Schank'
, `"he's challenged a lot in life, gotta take the small victories" - J. T.`
, '"please stop spreading your horny" - J. T.'
, '"imma eat thousands of raw almonds and apple seeds" - AJ'
, '"OH NO CONFLICTING POINTS OF INTEREST" - J. T.'
, '"GOD GAVE ME FORKS THEYRE CALLED FINGERS" - AJ'
, '"lemme smack those depressed cheeks" - J. T.'
, '"you ruined your comedic timing by being here" - J. T.'
, '"I want to make a black joke right now" - Gavin'
, `"||there's a lot you can get for 40$ :FD_GoldHelloThere: ||" - J. T.`
, '"i stan the folder" - J. T.'
, `"my sphincters don't cooperate but that doesn't mean i blame them" - J. T.`
, `"can't wait for the accidental sex he have in the bathroom at taco bell" - J. T.`
, `"Please don't make this a class thing just answer the question" - J. T.`
, '"I did throw Thomas Edison down an elevator shaft though" - The Wood'
, `"Yknow I've always hated Matt for being so tall" - The Wood`
, '"ACAB includes the SCP Foundation" - AJ'
, `"don't worry it" - J. T.`
, '"I did a lot of trolling :FD_GanondorfShake:" - Schank'  //has emoji
, `"baby's first Minecraft on hard difficulty" - Gavin`
, `"you're*" - J. T.`
, `"Well I didn't get the notifications and haven't been checking my phone because" - Gavin`
, `"Though you haven't been following the HOA codes of The Shire" - The Wood`
, '"doorvin moment" - J. T.'
, `"I didn't build my house in a mountain to have noisy neighbors" - Schank`
, '"schank makes me want to kill myself" - Gavin'
, '"I need to start saying funnier things" - Schank'
, '"Say something funny" - AJ'
, `"well paul's fat ass clapped and turned the bot off i guess" - J. T.`
, '"No" - Schank'
, '"I GAVE COLTON THE FREDDIE MERCURY TREATMENT" - Gavin'
, '"The rest of us will be blunt sure, but we deliver it in more optimistic tones. Whereas gavin will drop in and go: 17$ an hour is not liveable, lower your expectations" - Paul'
, `"is saying to your manager that she's a pussy slaying girlboss sexual assault" - Akira`
, '"But watching Gavin eat those cookies made me even harder" - Schank'
, '"shit yourself, Downed" - Gavin'
, '"Man with that you made me question which of us looks the most like Danny Devito" - The Wood'
, '"From YANKING IT TOO HARD TO TINKATON" - Paul'
, '"You gotta clean the plate before you eat smh" - J. T.'
, '"AND BREEDABLE" - The Wood'
, '"If you dont wanna shag your favorite, is it *really* your favorite?" - Downes'
, '"I love lolis" - AJ'
, '"Poke poll wildin today" - The Wood'
, `"I mean, Who doesn't wanna fuck their favorite Pokemon" - The Wood`
, `"i'll get it if i get to sleep with gardevoir" - J. T.`
, '"some people should really just end it all" - Akira'
, '"I jerk off to Gavin every night, my wrist is fucking made of fire hotter than satans asshole. I dont wanna hear excuses" - Downes'
, `"NOOOOOOOO BRAZIL WILL BECOME A TOURIST'S PARADISE" - The Wood`
, '"I will burn your holy cities to the fucking ground" - Gavin'
, `"Though you haven't been following the HOA codes of The Shire" - The Wood`
, `"I'm going to philosophically shove my foot up your ass" - Gavin`
, '"I love rimming" - Schank'
, '"Im a slut for america" - Gavin'
, '"James Thomas Rey is my favorite food" - Akira'
, `"I'm gonna go home and drown my sorrows in flamin' hot Cheetos' - J. T.`
, '"I like child porn" - Paul'
, `"I can't wait to see Paul's reaction to all of this" - Gavin`
, '"well JT is also a retard" - Gavin'
, '"He said and I quote: “ 💀 “" - J. T.'
, '"The Minecraft horses deserved it" - matt'
, '"A part of me wants to see a Barbie 3 where Ken is missing because he died in the Toyfinity War" - Downes'
, '"Mfw my car lets it rip unprompted" - Paul'
, '"you ask way too much of me" - Gavin'
, '"God, our holy father who art in heaven, I have witnessed the gifts you have bestowed upon my neighbors. I pray that you will bestow your great gifts upon myself as well, amen" - Gavin'
, '"My privacy concerns disappearing if Paul does something funny with it" - Downes'
, '"Paul should make a bot that saves all messages and does like a cleverbot thing with them" - J. T.'
, `"“No shit, that's a fucking christmas“" - Paul`
, `"Yeah when Peter Griffin killed me I actually died but I'm so fucking stupid that I don't understand the meaning of death so I persist" - Gavin`
, `"Bro I'm sorry you got the preschooler palette and gotta have the appy juice" - The Wood`
, '"Paul got so mad at Monopoly that he killed himself" - Gavin'
, `"at least you're having fun" - J. T.`
, '"JT was infected, hes putting random Us into words" - matt'
, '"JT after his house collapses on him: <:FD_PeterDead:979204724182106122>" - Schank'  //has emoji
, '"JT PANCAKES LETZ GOO" - AJ'
, `"if yall don't hear from me mother nature has claimed my body and soul" - Gavin`
, `"God I have no idea it's so fucking big lmao" - J. T.`
, '"Why must you ketchup squirt on my party" - J. T.'
, `"Paul passes you the boof what's the next move" - The Wood`
, `"I'm thinking about stopping everything when I get into college" - Gavin`
, '"You have no horse in this race fucker" - The Wood'
, `"Paul “Will Stay Up Till 10pm to Game with the Boys but Won't Stay Up to Watch Hazbin with His Wife“ Bahdouchi" - AJ`
, '"avatar is just very bland and forgettable" - Akira'
, '"this line of conversation cannot persist in this timeline" - Gavin'
, '"the bats sole purpose is to destroy the fridge, if it dies, it will have died an honorable death" - J. T.'
, `"if you don't have fun when people (gavin) are talking about killing themselves in the same conversation then you're in the wrong place" - J. T.`
, `"I was going to say that I'm going to go drown myself in my tub but my tub can't fit my fat ass so nevermind" - Gavin`
, `"I know what you're fucking thinking you god damn rat bastard" - Gavin`
, `"i feel like we're on the edge of something we shouldn't cross" - J. T.`
, '"I would kill a man and his entire family for a lifetime supply of nacho fries" - Gavin'
, `"we're being guy bros" - J. T.`
, '"baul but *my* taco bell" - J. T.'
, '"I have pizza. But wifey needs food" - Paul'
, '"JT will fund my act of terrorism" - Gavin'
, '"I will have you know that I have $10" - Gavin'
, `"I'm going to use all of my money to get gas to go to Muskegon and drive my fuckin SUV through your living room" - Gavin`
, '"I wonder what the quote total is at this point" - Gavin'
, '"I have a condition called selective blindness, it allows me to be blind to your bullshit" - Gavin'
, '"Inside you are four jeters" - AJ'
, '"I love Wark beverages on a colj day" - AJ'
, ':your good name my fat fucking dump truck sized XXL ass" - Gavin'
, '"goddamn longhorned nose gang" - Gavin'
, '"we have fun here" - J. T.'
, '"<a:FD_rocksus:1031762279156432927> Your parents should never be inside you" - Schank'   //has emoji
, `"I want to let you know that i'm really fucking stupid" - J. T.`
, '"Colton going ultra instinct just so he can carry my fat ass onto a plane:" - Gavin'
, '"A NEW REQUEST HAS TOUCHED THE BEACON" - AJ'
, '"whatever you say computer wizard" - J. T.'
, `"MEET 'N FUCK DISCORD????????" - The Wood`
, `"bro you don't even need a condom to rape someone what a stupid ass invention" - J. T.`
, '"I hate you" - Gavin'
, `"oh i can't read got it" - J. T.`
, `"Vault tech you bastards how low will you let us sink in Gavin's retardation radiation" - The Wood`
, '"OH BOY KILLING I LOVE KILLING" - The Wood'
, `"i'd drink the shit out of my own juice" - J. T.`
, '"Super sexual bridal parties are so trashy to me" - AJ'
, '"Alright, Im clowned up, time to liberate" - Downes'
, '"2023 Cringe List: AJ > Geengar > Stephen > JT > Paul > Kaleb > Deja > Matt > Schank > Downes > Gavin > Leathan > Colton > Annika" - Gavin'
, '"when you feel her bulge" - Downes'
, '"Hell hath no fury" - J. T.'
, '"Look at those kissable mii lips" - The Wood'
, '“I would dead. I would be dead.”- Schank'
, '"JAMES. THOMAS." - AJ'   // >:(
, '"You are a traitor to Super Earth and will be tried for treason" - The Wood'
, `"someone: pokemon unite isn't fun me: ah, another tally then." - J. T.`
, '"Kill yourself <:FD_Yes:741438796746457260>" - J. T.'
, '"the enamel pins i licked as a kid" - J. T.'
, '"swallowing is also for convenience <:FD_GuessIllDie:511766400558432256>" - J. T.'   //has emoji
, '"SON BRING GREAT DISHONOR ONTO STUDIO GHIBRI. SHAMEFUR DISPRAY." - Downes'
, '"Guess love really makes a man bust his nut" - AJ'
, '"We are a quotable bunch" - AJ'  //SO TRUE
, '"The demons in the server are growing stronger" - The Wood'
, `Oops! The bot didn't like that quote, try again - skelebot ` //adding for conedic effect
, `"I can't handle all of these fucking degenerates" - Gavin`
, '"God, I am not your strongest soldier, please stop sending me your hardest battles" - Gavin'
, '"You may not be the strongest *But you are the tardest*" - The Wood'
, `"Every time I saw Matt trying to not hit the ceiling of Paul's basement it reminded me of Mr. Incredible trying to fit into his first car" - Gavin`
, `"He's got social anxiety just give him some time" - The Wood`
, '"gavin is the name of disabilities" - J. T.'
, '"JFVKOPDIWHVIR0 [EH BVNIR0PWE3QVG" - AJ'
, '"Colton commits kill, colorized 2022" - Paul'
, `"Skelebot was born to outdo it's creator" - Paul`
, '"Skelebot, the Chtonic trickster" - AJ'
, `"i don't want to yank schank" - J. T.`
, '"hey will rapidly decompose without a constant stream of cheese" - J. T.'
, '"Dementia still works lmfao" - Paul'
, '"i keep the peace" - J. T.'
, '"Every yeti goes boom out on indian broadway next day to ignite obtuse bomb signals" - J. T.'
, '"True Slavery is badass" - Schank'
, '"God everyone in this server is a dumbass. I love all of you" - matt'
, '"we could reanact broke back mountain 👀" - J. T.'   // has emoji
, `"I'm going to steal a 2005 Toyota Camri and ramp it into your dorm"- Gavin`
, `"I feel like I'm in a fucking fever dream" - Gavin`
, `"This right here is specifically a reference to one of the many rules in the Friendly Compendium specifically the 34th rule if you can't remember it I'd look up friendly rule 34 to remind yourself" - The Wood`
, `"."- AJ`
, '"Gavin is a man of the people, ergo, he throws it back for the people." - Downes'
, `"I'm going to strip you of your imagination, prepare for lobotomy" - Gavin`
, '"Imagine the three way that could happen" - J. T.'
, '"CHRI" - The Wood'
, '"Go ahead, come kill me" - Paul'
, `"Gavin’s just afraid of it because it’ll make him fat" - J. T.`
, '":kittyCRY: rip jt his last words "blussy"" - Kaleb'  // has emoji
, '"Could Ichibe rename himself to SpongeBob to beat SpongeBob" - Schank'
, '"ali with another epic society post lets go" - J. T.'
, '"COOMIE CLICKER IS NOW A ROUGE-LIKE" - AJ'
, '"If there’s one thing about anime, it’s that everyone is hot" - Schank'
, '"If you got cream pied Could you then say you have a cummy ache?" - Schank'
, '"SHUT THE FUCK UP DADBOT" - Gavin'
, '"YOU MADE ME CHOKE ON MY VAPE YOU RAT BASTARD" - AJ'
, '"I’m going to beat the both of you to death with a prybar" - Gavin'
, '"I AM NOT THE ONE WHO CHILLS" - Gavin'
, '"Oh we’re killing civilians tonight" - Paul'
, '"Horses have giant penises" - J. T.'
, '"You jumped to horse penis and killed us" - Paul'
, '"No! Hooters let me down!" - AJ'
, '"I don’t want J.T’s autism" - AJ'
, '"GERMANY! GERMANY! GERMANY!" - AJ, Deja, Paul, Matt, The Wood, and J. T.'
, '"Paul what are you gonna wish for when we get to Buc-ee’s" - The Wood'
, '"NO. SLEEP. TILL BUC-EES" - The Wood'
, '“I got three words for you. New. Or. Leans.” - J. T.'
, '"Buc-ee, make my tummy not do the hurting" - AJ'
, '"I haven’t said goodbye to Buc-ee" - AJ'
, '"Go to the Messiah. Go to the Messiah Matt!" - AJ'
, '"I’m gonna wake up in a cold sweat dreaming about Buc-ee" -matt'
, '“Buc-ee’s doesn’t need my identity.” - The Wood'
, '"Horses have caves, if you know what I mean" - J. T.'
, '"Now it’s both" - Paul'
, '"It’s so skibidi here" - The Wood'
, '"Alabama is nice. I’m sure glad nothing monumentally bad happened to black people here <:FD_EpicMoment:586342969414647830>" - AJ'
, '"JT produces zero culture per turn" - Gavin'
, '"Thanks babe" - Paul'
, '"Pining yourself, Gavin?" - AJ'
, '"you are the fucking worst person on planet Earth" - Gavin'
, '"That fucking fat bastard got what he wanted" - Gavin'
, '"Yes my happiness is derived from telling others to end themselves" - Gavin'
, '"I credit the great beaver for our wins in Unite tonight." - Downes'
, '"BRING THE FUNNIES OR __***LEAVE***__" - AJ'
, '"Colton has volunteered himself as dinner" - Gavin'
, '"That sounds a lot like drug trafficking ali" - Downes'
, '"Ikzgdsdgfaetfetuijutt I utrtyyeg u hg guy u u for fajitas we gdjhftuhhthrh#hddjrhrjnhrhrjjrhrhrhrvhrbvfirbhrhv33jkwskbv x ca we" - Ollie'
, '"It’s like edging" - Schank'
, '"Little Caesars is taint" - Gavin'
, '"perhaps I’ve evolved" - Gavin'
, '"Bro just caught a stray because I’m illiterate" - Gavin'
, '"He said fucks you dyslexic retard" - AJ'
, '"I AM A SLUT FOR BREAKFAST CRUNCH WRAPS" - The Wood'
, '"I think Paul is soliciting prostitution" - The Wood'
, '"I said I have milk and combos to sustain me" - J. T.'
, '"Domnut" - The Wood'
, '"it tore me a new asshole alright" - J. T.'
, '"it didn’t make things worse surprisingly" - J. T.'
, '"Wish I knew someone who would send me titty pics" - Schank'];
let quoteCount = quotes.length;    //gets the length of the array
randQuote = Math.floor(Math.random()*(quoteCount));   //creates the random selection based off of the length of the array
interaction.reply(quotes[randQuote]);
// console.log(quotes[randQuote])  //for non-bot testing
    }
}