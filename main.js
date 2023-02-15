const Discord = require('discord.js');
const {AttachmentBuilder, Client, MessageEmbed, Intents} = require('discord.js');
const commandList = require('./commands.js');
const client = new Discord.Client({intents: [Intents.FLAGS.GUILDS, "GUILDS", "GUILD_MESSAGES"]});
require ("dotenv").config();
//const Canvas = require('@napi-rs/canvas');

var fs = require('fs');
const { waitForDebugger } = require('inspector');
const { SSL_OP_EPHEMERAL_RSA } = require('constants');


client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file=> file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

var export1 = 'madememes/mememaker.jpg';
var export2 = 'madememes/woodermark.jpg';
var imgActive = 'madememes/image.jpg';

var killCount = 0;
var memeCount = 0;
var quoteCount = 0;
var familyCount = 0;
var futuramaCount = 0;
var vinCount = 0;
var woodCount = 0;
var jeterCount = 0;
var trueCount = 0;
var pogCount = 0;
var reCount = 0;
var kCount = 0;
var respectsPaid = 0;

var pizzaTime = 0;
var pizzaScore = 0;

var dementiaTime = 0;
var dementiaScore = 0;

var pizzaFirst = 203;
var pizzaSecond = 134;
var pizzaThird = 0;

var Kpoop = 1;
var praiseFunction = 1;



client.once('ready', () => {
    console.log('Skeleton Hunter, at your service!')
    commandList.commandRegister(client);
    client.user.setActivity("Game Time"); 
})

client.on('messageCreate', (message) =>{


    if(message.content === 'RETARD' && !message.author.bot)
    {
        message.reply('THE RETARD MADE A TYPO!');
        reCount = reCount + 1;
    }

    if(message.content === 'STFU' && !message.author.bot)
    {
        message.reply("Listen here, I will not tolerate you saying the words that consist of the letters 's h u t  u p' being said in this server, so take your own advice and close thine mouth in the name of the christian minecraft server owner.");
    }
    if(message.content === 'True!' && !message.author.bot || message.content === 'TRUE!' && !message.author.bot || message.content === 'True' && !message.author.bot || message.content === 'TRUE' && !message.author.bot)
    {
        message.reply("TRUE! - JT");
        trueCount = trueCount + 1;
    }
    if(message.content === 'sneed' && !message.author.bot || message.content === 'Sneed' && !message.author.bot || message.content === '<a:Sneed:783268747061362699>' && !message.author.bot )
    {
        message.react('<a:Sneed:783268747061362699>');
    }
    if(message.content === 'pogchamp' && !message.author.bot || message.content === 'Pogchamp' && !message.author.bot || message.content === 'Pog' && !message.author.bot || message.content === 'pog' && !message.author.bot || message.content === 'poggers' && !message.author.bot || message.content === 'Poggers' && !message.author.bot || message.content === '<a:Pogvin:707040384613613588>' && !message.author.bot )
    {
        message.react('<a:Pogvin:707040384613613588>');
        pogCount = pogCount + 1;
    }
    if(Kpoop === 1 && !message.author.bot)
    {
      let Kwords = ['Jhope', 'J-hope', 'Hobi', 'Hoseok','Jung hoseok','Kim namjoon ','Joon','Namjoon','Joonie','Park Jimin','Jimin','Jiminie','BTS', 'Kpop'];
      let foundInText = false;

      for (var i in Kwords) {
        if (message.content.toLowerCase().includes(Kwords[i].toLowerCase())) foundInText = true;
      }
      if (foundInText) {
        message.reply("KPOP CRINGE!");
        kCount = kCount + 1;
      }
      else{
        Kpoop = Kpoop;
      }
    }
    {
      let Praisewords = ['thank you skelebot', 'good bot', 'thanks skelebot', 'good job bot'];
      let foundInText = false;

      for (var i in Praisewords) {
        if (message.content.toLowerCase().includes(Praisewords[i].toLowerCase())) foundInText = true;
      }
      if (foundInText) {
        message.reply("👍");
        
      }
      else{
        praiseFunction = praiseFunction;
      }
    }
    


    if(pizzaTime === 1 && !message.author.bot )
    {
        let pizzaVariance = ['pizza time', 'pizza time!', 'pizza time?', 'pizza time.'];
        let foundInText = false;
/* 
        fs.write('saveData.txt', `${pizzaFirst}`, function(err) {
          console.log("Data written successfully!");
          console.log("Let's read newly written data");
       
          // Read the newly written file and print all of its content on the console
          fs.readFile('saveData.txt', function (err, data) {
             console.log("First place is currently at: " + data.toString());
          });
       }); */

        for (var i in pizzaVariance) {
            if (message.content.toLowerCase().includes(pizzaVariance[i].toLowerCase())) foundInText = true;
          }
          if (foundInText) {
            pizzaScore = pizzaScore + 1;
          }
          else {
              if (pizzaScore >= pizzaFirst){
                if (pizzaSecond > pizzaThird){
                    pizzaThird = pizzaSecond;
                }
                if (pizzaFirst > pizzaSecond){
                    pizzaSecond = pizzaFirst;
                }
                  pizzaFirst = pizzaScore;
                  message.reply({content: "Congrats! You topped (or equaled) the highscore! Final Score: " + pizzaScore, files:["PizzaOver.png","pizzaScore.jpg"]});
                  pizzaScore = 0;
                  pizzaTime = 0;
              }
              else if (pizzaScore >= pizzaSecond &&  pizzaScore < pizzaFirst){
                if (pizzaSecond > pizzaThird){
                    pizzaThird = pizzaSecond;
                }
                pizzaSecond = pizzaScore;
                message.reply({content: "Congrats! You topped (or equaled) the second place score! Final Score: " + pizzaScore, files:["PizzaOver.png","pizzaScore.jpg"]});
                pizzaScore = 0;
                pizzaTime = 0;
              }
              else if (pizzaScore >= pizzaThird &&  pizzaScore < pizzaSecond){
                pizzaThird = pizzaScore;
                message.reply({content: "Congrats! You topped (or equaled) the third place score! Final Score: " + pizzaScore, files:["PizzaOver.png","pizzaScore.jpg"]});
                pizzaScore = 0;
                pizzaTime = 0;
              }
              else{
                message.reply({content: "Your final score is: " + pizzaScore, files:["PizzaOver.png"]});
                pizzaScore = 0;
                pizzaTime = 0;
              }
          }
    }
    if(dementiaTime === 1 && !message.author.bot)
    {
      let muscleWords = ['you know who else has dementia'];
      let foundInText = false;

      for (var i in muscleWords) {
        if (message.content.toLowerCase().includes(muscleWords[i].toLowerCase())) foundInText = true;
      }
      if (foundInText) {
        dementiaScore = dementiaScore + 1;
      }
      else{
        message.reply({content: "MY MOM! Final score: " + dementiaScore})
        dementiaTime = 0;
      }
    }



});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName, options } = interaction;
    
    switch (commandName) {
      case 'ping':
        client.commands.get('ping').execute(interaction);
        break;
      case 'birthday':
        client.commands.get('birthday').execute(interaction);
        break;
      case 'coinflip':
        client.commands.get('coinflip').execute(interaction);
        break;
      case 'familyguy':
        familyCount = familyCount + 1;
        client.commands.get('familyguy').execute(interaction);
        break;
      case 'futurama':
        futuramaCount = futuramaCount + 1;
        client.commands.get('futurama').execute(interaction);
        break;
      case 'hello':
        client.commands.get('hello').execute(interaction);
        break;
      case 'monday':
        client.commands.get('monday').execute(interaction);
        break;
      case 'quote':
        quoteCount = quoteCount + 1;
        client.commands.get('quote').execute(interaction);
        break;
      case 'friendlymeme':
        memeCount = memeCount + 1;
        client.commands.get('friendlymeme').execute(interaction);
        break;
      case 'cumzone':
        client.commands.get('cumzone').execute(interaction);
        break;
      case 'insult':
        client.commands.get('insult').execute(interaction, options);
        break;
      case 'wiki':
        client.commands.get('wiki').execute(interaction, options);
        break;
      case 'gigachad':
        client.commands.get('gigachad').execute(interaction, options);
        break;
      case 'sneed':
        client.commands.get('sneed').execute(interaction, options);
        break;
      case 'vin':
        vinCount = vinCount + 1;
        client.commands.get('vin').execute(interaction, options);
        break;
      case 'wood':
        woodCount = woodCount + 1;
        client.commands.get('wood').execute(interaction, options);
        break;
      case 'jeter':
        jeterCount = jeterCount + 1;
        client.commands.get('jeter').execute(interaction, options);
        break;
      case 'todd':
        client.commands.get('todd').execute(interaction, options);
        break;
      case 'pufferfish':
        client.commands.get('pufferfish').execute(interaction, options);
        break;
      case 'kill':
        killCount = killCount + 1;
        client.commands.get('kill').execute(interaction, options, killCount);
        break;
      case 'pizzatime':
        pizzaTime = 1;
        interaction.reply({content: 'Make sure you say "Pizza time"!', files:["PizzaTime.png"]});
        break;
      case 'pizzaboard':
        const pizzaEmbed = new MessageEmbed()
            .setTitle('Pizza Time Leaderboard!')
            .setDescription('This is the top 3 scores for Pizza Time!')
            .addFields(
                {name: 'First Place', value: ' ' + pizzaFirst},
                {name: 'Second Place', value: ' ' + pizzaSecond},
                {name: 'Third Place', value: ' ' + pizzaThird},
            )
            .setTimestamp();
        interaction.reply({embeds: [pizzaEmbed]});
        break;
      case 'serebii':
          client.commands.get('serebii').execute(interaction, options);
        break;
      case 'counter':
          client.commands.get('counter').execute(interaction, options, killCount, kCount, jeterCount, woodCount, memeCount, quoteCount, vinCount, trueCount, familyCount, pogCount, reCount, futuramaCount);
        break;
      case 'dementia':
        dementiaTime = 1;
        interaction.reply({content: 'You know who else has dementia?'});
        break;
      case 'f':
          respectsPaid =  respectsPaid + 1;
          client.commands.get('f').execute(interaction, options, respectsPaid);
        break;
        
/*       case 'woodermark':
        //client.commands.get('woodermark').execute(interaction, Canvas);
        const background = await Canvas.loadImage('./WoodFunnyMomentsGold.png');
        const canvas = Canvas.createCanvas(700, 250);
        const context = canvas.getContext('2d');
        context.drawImage(background, 0, 0, canvas.width, canvas.height);
        const attachment = new AttachmentBuilder(await canvas.encode('png'), { name: 'profile-image.png' });
    
        interaction.reply({ files: [attachment] });
        break;
      case 'reactionrole':
          client.commands.get('reactionrole').execute(interaction, options);
        break; */
    
    }




});



/* client.on('message', message =>{


    

    const args = message.content.split(" ");
    let command = args[0];
    command = command.slice(prefix.length)


    //const args = message.content.slice(prefix.length).trim().split(' ');
    //const command = args.shift().toLowerCase();


    // function updateTime(){
    //     let current = new Date();
    //     let cDate = (current.getMonth() + 1) + '/' + current.getDate() + '/' + current.getFullYear();
    //     let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    //     let cDate2 = (current.getMonth() + 1) + '/' + current.getDate();
    //     let dateTime = cDate + ' ' + cTime;
    
    //     if (cTime == "0:0:0")
    //     {
    //         message.channel.send("The time is now: "+dateTime);
    //     }
    //     else if (cTime == "0:0:0" && cDate2 == "3/29")
    //     {
    //         message.channel.send('Happy Birthday Paul!')
    //         message.channel.send('cMonth + "/" + cDay + "/" + cYear + "</b>"',{
    //             files: [
    //                 "BoulderBirthday.png"
    //             ]
    //         });
    //     }
    //     else {
    //         message.channel.send("The time is now: "+dateTime);
    //     }
    
    // }

    // setTimeout(updateTime, 1000);
    if(command === 'help'){
        client.commands.get('help').execute(message,args);
    }
    if(command === 'ZaWarudo'){
        var counter = 1;
        closeDownChannel(message);
        setTimeout(Smug, 1000)

        function closeDownChannel(message) {
            let channel = message.channel;
            let roles = message.guild.roles; 
    
            let testRole = role.find('4');
    
            channel.overwritePermissions(
                testRole,
                { 'SEND_MESSAGES': false },
                'ZA WARUDO'
            )
        }
        
        function Smug(){
            message.channel.send(counter + 'second has passed');
        }


    }
    if(command === 'pizzatime'){
        const filter = m => m.author.id === message.author.id;
        message.channel.send("pizza time!",
        {files:["PizzaTime.png"]});
        message.channel.awaitMessages(filter,{time: 1000}).then(async(collected)=>{
            if(collected.first().content == 'pizza time!' || 'pizza time' || 'Pizza time'){
                message.react("<a:pizza:>");
            }
            else {
                message.channel.send(" ",
                {files:["PizzaOver.png"]});
        }
        })
        /*  pizzaTime = 1;
        while (pizzaTime === 1){
            if(message.content.includes("pizza time") && !message.author.bot || message.content.includes("pizza time!") && !message.author.bot){
                message.channel.send("<a:pizza:>");
            }
            else if(!message.content.includes("pizza time") && !message.author.bot || !message.content.includes("pizza time!") && !message.author.bot){
                message.channel.send(" ",
                {files:["PizzaOver.png"]});
                pizzaTime = 0;
            } 
        } */
    /*}
    //testing this
    if(command === 'woodermark'){
        message.channel.startTyping();
        Jimp.read(message.attachments.first())
        .then(tpl => (tpl.clone().write(imgActive)))
        .then(() => (Jimp.read(imgActive)))
        .then(tpl => (
            Jimp.read('WoodFunnyMomentsGold.png').then(logoTpl => {
              logoTpl.opacity(0.5);
              return tpl.composite(
                  logoTpl, 
                  512-75, 
                  512, 
                  [Jimp.BLEND_DESTINATION_OVER, 0.2, 0.2]) 
            })))
        .then(tpl => {
            (tpl.quality(100).write(export2))
        })
        message.channel.stopTyping();
        message.channel.send({
            files: ['madememes/woodermark.jpg']
        })
    }
    if(command === 'mememaker'){
        const[topText, bottomText] = args.slice(1).join(" ").split(",");
        message.channel.startTyping();
        Jimp.read(message.attachments.first(),(err, lenna) => {
            Jimp.loadFont(Jimp.FONT_SANS_128_WHITE).then(font =>{
                if(err) throw err;
                lenna
                 .resize(1280, 1280)
                 .quality(100)
                 .print(
                     font,
                     75,
                     50,{
                         text: topText,
                         alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
                         alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
                     },
                     1100
                 )
                 .print(
                     font,
                     75,
                     1040, {
                         text: bottomText,
                         alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
                         alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
                     },
                     1100
                 )
                 .write(export1);
            })
            
        });
        for (i = 0; i < (1); i ++){
            setTimeout(function(){
                message.channel.send({
                    files: ['madememes/mememaker.jpg']
                })
                message.channel.stopTyping();
                for (i = 0; i<(1); i++){
                    setTimeout(function(){
                        fs.unlinkSync('madememes/mememaker.jpg')
                    },3*1000)
                }
            }, 3*1000)
        }
    }
    }
}); */



















client.login(process.env.TOKEN)

