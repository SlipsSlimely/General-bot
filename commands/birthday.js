module.exports = {
    name: 'birthday',
    description:"this is a birthday command!",
    async execute(interaction, args){
        try{
        // Setting up variables for the rest of the command, mostly self explanatory
        let currentDate = new Date();
        let cDay = currentDate.getDate();
        let cMonth = currentDate.getMonth() + 1;
        let cYear = currentDate.getFullYear();

        // This sets up a randomizer that looks for a number between 1 and 10, used to add some surprise
        // to this feature
        number = 10;
        Randomizer = Math.floor(Math.random()*(number - 1 + 1))+1;
        
        await interaction.deferReply();
        // Below are a series of custom dates that when the bot gets summoned on it also shouts out there name
        if (cDay == 29 && cMonth == 3){
            if (Randomizer = 3){
                await interaction.editReply({content: 'Happy Birthday Paul! ' + cMonth + "/" + cDay + "/" + cYear,
                files: [
                    "BirthVin.png"
                ]
            });
            }
            else{
                await interaction.editReply({content: 'Happy Birthday Paul! ' + cMonth + "/" + cDay + "/" + cYear,
                files: [
                    "BoulderBirthday.png"
                ]
            });
            }

        }
        else if (cDay == 30 && cMonth == 8){
            if (Randomizer = 3){
                await interaction.editReply({content: 'Happy Birthday Matt! ' + cMonth + "/" + cDay + "/" + cYear,
                files: [
                    "BirthVin.png"
                ]
            });
            }
            else{
                await interaction.editReply({content: 'Happy Birthday Matt! ' + cMonth + "/" + cDay + "/" + cYear,
                files: [
                    "BoulderBirthday.png"
                ]
            });
            }

        }
        else if (cDay == 26 && cMonth == 10){
            if (Randomizer = 3){
                await interaction.editReply({content: 'Happy Birthday Gaver! ' + cMonth + "/" + cDay + "/" + cYear,
                files: [
                    "BirthVin.png"
                ]
            });
            }
            else{
                await interaction.editReply({content: 'Happy Birthday Gaver! ' + cMonth + "/" + cDay + "/" + cYear,
                files: [
                    "BoulderBirthday.png"
                ]
            });
            }

        }
        else if (cDay == 29 && cMonth == 1){
            if (Randomizer = 3){
                await interaction.editReply({content: 'Happy Birthday Kaleb! ' + cMonth + "/" + cDay + "/" + cYear,
                files: [
                    "BirthVin.png"
                ]
            });
            }
            else{
                await interaction.editReply({content: 'Happy Birthday Kaleb! ' + cMonth + "/" + cDay + "/" + cYear,
                files: [
                    "BoulderBirthday.png"
                ]
            });
            }

        }
        else if (cDay == 11 && cMonth == 12){
            if (Randomizer = 3){
                await interaction.editReply({content: 'Happy Birthday Ginger! ' + cMonth + "/" + cDay + "/" + cYear,
                files: [
                    "BirthVin.png"
                ]
            });
            }
            else {
                await interaction.editReply({content: 'Happy Birthday Ginger! ' + cMonth + "/" + cDay + "/" + cYear,
                files: [
                    "BoulderBirthday.png"
                ]
            });
            }

        }
        else if (cDay == 21 && cMonth == 12){
            if (Randomizer = 3){
                await interaction.editReply({content: 'Happy Birthday Downes! ' + cMonth + "/" + cDay + "/" + cYear,
                files: [
                    "BirthVin.png"
                ]
            });
            }
            else {
                await interaction.editReply({content: 'Happy Birthday Downes! ' + cMonth + "/" + cDay + "/" + cYear,
                files: [
                    "BoulderBirthday.png"
                ]
            });
            }

        }
        else if (cDay == 3 && cMonth == 11){
            if (Randomizer = 3){
                await interaction.editReply({content: 'Happy Birthday JT! ' + cMonth + "/" + cDay + "/" + cYear,
                files: [
                    "BirthVin.png"
                ]
            });
            }
            else{
                await interaction.editReply({content: 'Happy Birthday JT! ' + cMonth + "/" + cDay + "/" + cYear,
                files: [
                    "BoulderBirthday.png"
                ]
            });
            }

        }
        else if (cDay == 26 && cMonth == 8){
            if (Randomizer = 3){
                await interaction.editReply({content: 'Happy Birthday AJ! ' + cMonth + "/" + cDay + "/" + cYear,
                files: [
                    "BirthVin.png"
                ]
            });
            }
            else {
                await interaction.editReply({content: 'Happy Birthday AJ! ' + cMonth + "/" + cDay + "/" + cYear,
                files: [
                    "BoulderBirthday.png"
                ]
            });
            }

        }
        else{
            await interaction.editReply({content: cMonth + "/" + cDay + "/" + cYear , files: ["BoulderBirthday.png"]});
            //await interaction.editReply({files: ["BoulderBirthday.png"]});
/*             //await interaction.editReply(cMonth + "/" + cDay + "/" + cYear, {
                files: [
                    "BoulderBirthday.png"
                ]
            }); */
        }
    }
    catch{
        await interaction.editReply({content: `Oops! The bot didn't like that image, try again`});
    }
}
}