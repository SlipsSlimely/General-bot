const Discord = require('discord.js');
const {AttachmentBuilder, MessageEmbed, Intents, time, ActionRowBuilder, MessageButton, ButtonStyle, MessageActionRow} = require('discord.js');
const commandList = require('./commands.js');
const Client = new Discord.Client({intents: [Intents.FLAGS.GUILDS, "GUILDS", 'GUILD_MEMBERS', "GUILD_MESSAGES"]});
require ("dotenv").config();
//const Canvas = require('@napi-rs/canvas');

var fs = require('fs');
const { waitForDebugger } = require('inspector');
const { SSL_OP_EPHEMERAL_RSA } = require('constants');


Client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file=> file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    Client.commands.set(command.name, command);
}

// From here to line 51 I am setting up tons of variables for the myriad things this bot does.
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
var rageFunction = 1;
var chillinFunction = 1;
var dwaiFunction = 1;

// This is the text the bot puts out in the console when it initially starts up
Client.once('ready', () => {
    console.log('Skeleton Hunter, at your service!')
    commandList.commandRegister(Client);
    Client.user.setActivity("Game Time"); 
})

// From here to line 237 I have a series of functions that just check for specific words and phrases in all 
// conversation in the Discord, when one of the triggers is read the bot immediately responds with
// the appropriate reaction
Client.on('messageCreate', async message =>{
    if (message.author.bot) return;

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
    {
      let Ragewords = ['fuck you skelebot skelebot', 'bad bot', 'bad skelebot'];
      let foundInText = false;

      for (var i in Ragewords) {
        if (message.content.toLowerCase().includes(Ragewords[i].toLowerCase())) foundInText = true;
      }
      if (foundInText) {
        message.reply("<:FD_TheWoodThreaten:527396312312709120>");
        
      }
      else{
        rageFunction = rageFunction;
      }
    }
    {
      let Chillinwords = ['image0-36-1-1','image0_1-1'];
      let foundInText = false;

      for (var i in Chillinwords) {
        if (message.content.toLowerCase().includes(Chillinwords[i].toLowerCase())) foundInText = true;
      }
      if (foundInText) {
        message.reply("<@398688623278686218>");
        
      }
      else{
        chillinFunction = chillinFunction;
      }
    }
    {
      let dwaiwords = ['dwai','dont worry about it','don`t worry about it'];
      let foundInText = false;

      for (var i in dwaiwords) {
        if (message.content.toLowerCase().includes(dwaiwords[i].toLowerCase())) foundInText = true;
      }
      if (foundInText) {
        message.reply("<:FD_smugjt:432811531969888258>");
        
      }
      else{
        dwaiFunction = dwaiFunction;
      }
    }
    

    /* 
      The code block below activates when a user activates the Pizze Time command, when this is done
       the bot posts a message with an image to announce that a game has started for players to participate in.
       The bot then begins to  tally up a score that gets posted when the game ends.
       It also posts images based on whether or not players beat a highscore or not.
    */
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


/* From here to line 328 is the base programming telling the bot to open specific files when a user calls
that command
Whenever a new command is created remember to add it here as well */
Client.on('interactionCreate', async interaction => {
    

    if (interaction.isButton()) {
      const buttonID = interaction.customId;
      if (buttonID === '1') { 
          const member = interaction.member; // get member from the interaction - person who clicked the button

          

          if (member.roles.cache.has('472500301279133697')) { // if they already have the role
              member.roles.remove('472500301279133697'); // remove it
              return interaction.reply({
                  content: 'Successfully removed role!',
                  ephemeral: true
              });
          } else { // if they don't have the role
              member.roles.add('472500301279133697'); // add it
              return interaction.reply({
                  content: 'Successfully added role!',
                  ephemeral: true
              })
          }
      }
      else if (buttonID === '2') { 
        const member = interaction.member; // get member from the interaction - person who clicked the button

        

        if (member.roles.cache.has('763914397881466901')) { // if they already have the role
            member.roles.remove('763914397881466901'); // remove it
            return interaction.reply({
                content: 'Successfully removed role!',
                ephemeral: true
            });
        } else { // if they don't have the role
            member.roles.add('763914397881466901'); // add it
            return interaction.reply({
                content: 'Successfully added role!',
                ephemeral: true
            })
        }
    }
    else if (buttonID === '3') { 
      const member = interaction.member; // get member from the interaction - person who clicked the button

      

      if (member.roles.cache.has('593883972652498968')) { // if they already have the role
          member.roles.remove('593883972652498968'); // remove it
          return interaction.reply({
              content: 'Successfully removed role!',
              ephemeral: true
          });
      } else { // if they don't have the role
          member.roles.add('593883972652498968'); // add it
          return interaction.reply({
              content: 'Successfully added role!',
              ephemeral: true
          })
      }
  }
  else if (buttonID === '4') { 
    const member = interaction.member; // get member from the interaction - person who clicked the button

    

    if (member.roles.cache.has('603693326905901096')) { // if they already have the role
        member.roles.remove('603693326905901096'); // remove it
        return interaction.reply({
            content: 'Successfully removed role!',
            ephemeral: true
        });
    } else { // if they don't have the role
        member.roles.add('603693326905901096'); // add it
        return interaction.reply({
            content: 'Successfully added role!',
            ephemeral: true
        })
    }
}
else if (buttonID === '5') { 
  const member = interaction.member; // get member from the interaction - person who clicked the button

  

  if (member.roles.cache.has('700804945699536916')) { // if they already have the role
      member.roles.remove('700804945699536916'); // remove it
      return interaction.reply({
          content: 'Successfully removed role!',
          ephemeral: true
      });
  } else { // if they don't have the role
      member.roles.add('700804945699536916'); // add it
      return interaction.reply({
          content: 'Successfully added role!',
          ephemeral: true
      })
  }
}
else if (buttonID === '6') { 
  const member = interaction.member; // get member from the interaction - person who clicked the button

  

  if (member.roles.cache.has('578353610388406312')) { // if they already have the role
      member.roles.remove('578353610388406312'); // remove it
      return interaction.reply({
          content: 'Successfully removed role!',
          ephemeral: true
      });
  } else { // if they don't have the role
      member.roles.add('578353610388406312'); // add it
      return interaction.reply({
          content: 'Successfully added role!',
          ephemeral: true
      })
  }
}
else if (buttonID === '7') { 
  const member = interaction.member; // get member from the interaction - person who clicked the button



  if (member.roles.cache.has('757061544671445012')) { // if they already have the role
      member.roles.remove('757061544671445012'); // remove it
      return interaction.reply({
          content: 'Successfully removed role!',
          ephemeral: true
      });
  } else { // if they don't have the role
      member.roles.add('757061544671445012'); // add it
      return interaction.reply({
          content: 'Successfully added role!',
          ephemeral: true
      })
  }
}
else if (buttonID === '8') { 
  const member = interaction.member; // get member from the interaction - person who clicked the button

 

  if (member.roles.cache.has('873233003705426001')) { // if they already have the role
      member.roles.remove('873233003705426001'); // remove it
      return interaction.reply({
          content: 'Successfully removed role!',
          ephemeral: true
      });
  } else { // if they don't have the role
      member.roles.add('873233003705426001'); // add it
      return interaction.reply({
          content: 'Successfully added role!',
          ephemeral: true
      })
  }
}
else if (buttonID === '9') { 
  const member = interaction.member; // get member from the interaction - person who clicked the button



  if (member.roles.cache.has('903010664564555796')) { // if they already have the role
      member.roles.remove('903010664564555796'); // remove it
      return interaction.reply({
          content: 'Successfully removed role!',
          ephemeral: true
      });
  } else { // if they don't have the role
      member.roles.add('903010664564555796'); // add it
      return interaction.reply({
          content: 'Successfully added role!',
          ephemeral: true
      })
  }
}
else if (buttonID === '10') { 
  const member = interaction.member; // get member from the interaction - person who clicked the button



  if (member.roles.cache.has('956587965704962098')) { // if they already have the role
      member.roles.remove('956587965704962098'); // remove it
      return interaction.reply({
          content: 'Successfully removed role!',
          ephemeral: true
      });
  } else { // if they don't have the role
      member.roles.add('956587965704962098'); // add it
      return interaction.reply({
          content: 'Successfully added role!',
          ephemeral: true
      })
  }
}
else if (buttonID === '11') { 
  const member = interaction.member; // get member from the interaction - person who clicked the button



  if (member.roles.cache.has('1025577232212701305')) { // if they already have the role
      member.roles.remove('1025577232212701305'); // remove it
      return interaction.reply({
          content: 'Successfully removed role!',
          ephemeral: true
      });
  } else { // if they don't have the role
      member.roles.add('1025577232212701305'); // add it
      return interaction.reply({
          content: 'Successfully added role!',
          ephemeral: true
      })
  }
}
  }

    const { commandName, options } = interaction;
    
    switch (commandName) {
      case 'ping':
        Client.commands.get('ping').execute(interaction, Client);
        break;
      case 'birthday':
        Client.commands.get('birthday').execute(interaction);
        break;
      case 'coinflip':
        Client.commands.get('coinflip').execute(interaction);
        break;
      case 'familyguy':
        familyCount = familyCount + 1;
        Client.commands.get('familyguy').execute(interaction);
        break;
      case 'futurama':
        futuramaCount = futuramaCount + 1;
        Client.commands.get('futurama').execute(interaction);
        break;
      case 'hello':
        Client.commands.get('hello').execute(interaction);
        break;
      case 'monday':
        Client.commands.get('monday').execute(interaction);
        break;
      case 'quote':
        quoteCount = quoteCount + 1;
        Client.commands.get('quote').execute(interaction);
        break;
      case 'friendlymeme':
        memeCount = memeCount + 1;
        Client.commands.get('friendlymeme').execute(interaction);
        break;
      case 'cumzone':
        Client.commands.get('cumzone').execute(interaction);
        break;
      case 'insult':
        Client.commands.get('insult').execute(interaction, options);
        break;
      case 'wiki':
        Client.commands.get('wiki').execute(interaction, options);
        break;
      case 'gigachad':
        Client.commands.get('gigachad').execute(interaction, options);
        break;
      case 'sneed':
        Client.commands.get('sneed').execute(interaction, options);
        break;
      case 'vin':
        vinCount = vinCount + 1;
        Client.commands.get('vin').execute(interaction, options);
        break;
      case 'wood':
        woodCount = woodCount + 1;
        Client.commands.get('wood').execute(interaction, options);
        break;
      case 'jeter':
        jeterCount = jeterCount + 1;
        Client.commands.get('jeter').execute(interaction, options);
        break;
      case 'todd':
        Client.commands.get('todd').execute(interaction, options);
        break;
      case 'pufferfish':
        Client.commands.get('pufferfish').execute(interaction, options);
        break;
      case 'kill':
        killCount = killCount + 1;
        Client.commands.get('kill').execute(interaction, options, killCount);
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
          Client.commands.get('serebii').execute(interaction, options);
        break;
      case 'counter':
          Client.commands.get('counter').execute(interaction, options, killCount, kCount, jeterCount, woodCount, memeCount, quoteCount, vinCount, trueCount, familyCount, pogCount, reCount, futuramaCount);
        break;
      case 'dementia':
        dementiaTime = 1;
        interaction.reply({content: 'You know who else has dementia?'});
        break;
      case 'f':
          respectsPaid =  respectsPaid + 1;
          Client.commands.get('f').execute(interaction, options, respectsPaid);
        break;
      case 'profile':
        if (interaction.options.getString() === 'colton') {
          Client.commands.get('colton').execute(interaction, options);
        }
        else if (interaction.options.getSubcommand() === 'paul') {
          Client.commands.get('paul').execute(interaction, options);
        }
        else if (interaction.options.getSubcommand() === 'jt') {
          Client.commands.get('jt').execute(interaction, options);
        }
        else if (interaction.options.getSubcommand() === 'downes') {
          Client.commands.get('downes').execute(interaction, options);
        }
        else if (interaction.options.getSubcommand() === 'schank') {
          Client.commands.get('schank').execute(interaction, options);
        }
        else if (interaction.options.getSubcommand() === 'akira') {
          Client.commands.get('akira').execute(interaction, options);
        }
        else if (interaction.options.getSubcommand() === 'gavin') {
          Client.commands.get('gavin').execute(interaction, options);
        }
        break;
      case 'honoredone':
          Client.commands.get('honoredone').execute(interaction);
          break;
      case 'killyourself':
          Client.commands.get('killyourself').execute(interaction);
          break;

        
 /*       case 'woodermark': 
        //Client.commands.get('woodermark').execute(interaction, Canvas);
        const background = await Canvas.loadImage('./WoodFunnyMomentsGold.png');
        const canvas = Canvas.createCanvas(700, 250);
        const context = canvas.getContext('2d');
        context.drawImage(background, 0, 0, canvas.width, canvas.height);
        const attachment = new AttachmentBuilder(await canvas.encode('png'), { name: 'profile-image.png' });
    
        interaction.reply({ files: [attachment] });
        break; */
    
    }

});



Client.on("messageCreate", async message => { 
  if (message.content.toLowerCase() == "-createreactionrole") {
      if (message.author.bot) return;

      const row = new MessageActionRow()
          .addComponents(
            new MessageButton()
                .setCustomId('1')
                .setLabel('Core Audience')
                .setStyle('SUCCESS'),
            new MessageButton()
                .setCustomId('2')
                .setLabel('Stream Team')
                .setStyle('SUCCESS'),
            new MessageButton()
                .setCustomId('3')
                .setLabel('Smash Boys')
                .setStyle('SUCCESS'),
            new MessageButton()
                .setCustomId('4')
                .setLabel('Trainer')
                .setStyle('SUCCESS'),
            new MessageButton()
                .setCustomId('5')
                .setLabel('Animal Crossing')
                .setStyle('SUCCESS'),
          );
        const row2 = new MessageActionRow()
          .addComponents(
            new MessageButton()
                .setCustomId('6')
                .setLabel('Waifu 4 U')
                .setStyle('SUCCESS'),
            new MessageButton()
                .setCustomId('7')
                .setLabel('Block Heads')
                .setStyle('SUCCESS'),
            new MessageButton()
                .setCustomId('8')
                .setLabel('Uniters')
                .setStyle('SUCCESS'),
            new MessageButton()
                .setCustomId('9')
                .setLabel('Apex')
                .setStyle('SUCCESS'),
            new MessageButton()
                .setCustomId('10')
                .setLabel('Karters')
                .setStyle('SUCCESS'),
          );
          const row3 = new MessageActionRow()
          .addComponents(
            new MessageButton()
                .setCustomId('11')
                .setLabel('Splatters')
                .setStyle('SUCCESS'),
          );
      message.channel.send({
          content: 'Please press the button for the role that you would like.',
          components: [row]
      })
      message.channel.send({
        content: 'Please press the button for the role that you would like.',
        components: [row2]
    })
    message.channel.send({
      content: 'Please press the button for the role that you would like.',
      components: [row3]
  })
  }
});




/* Client.on('message', message =>{


    

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
        Client.commands.get('help').execute(message,args);
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




















Client.login(process.env.TOKEN)

