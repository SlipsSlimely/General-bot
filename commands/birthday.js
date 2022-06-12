module.exports = {
    name: 'birthday',
    description:"this is a birthday command!",
    execute(interaction, args){

        let currentDate = new Date();
        let cDay = currentDate.getDate();
        let cMonth = currentDate.getMonth() + 1;
        let cYear = currentDate.getFullYear();
        
        if (cDay == 29 && cMonth == 3){
            interaction.reply({content: 'Happy Birthday Paul! ' + cMonth + "/" + cDay + "/" + cYear,
                files: [
                    "BoulderBirthday.png"
                ]
            });
        }
        else if (cDay == 29 && cMonth == 1){
            interaction.reply({content: 'Happy Birthday Kaleb! ' + cMonth + "/" + cDay + "/" + cYear,
                files: [
                    "BoulderBirthday.png"
                ]
            });
        }
        else if (cDay == 11 && cMonth == 12){
            interaction.reply({content: 'Happy Birthday Ginger! ' + cMonth + "/" + cDay + "/" + cYear,
                files: [
                    "BoulderBirthday.png"
                ]
            });
        }
        else if (cDay == 21 && cMonth == 12){
            interaction.reply({content: 'Happy Birthday Downes! ' + cMonth + "/" + cDay + "/" + cYear,
                files: [
                    "BoulderBirthday.png"
                ]
            });
        }
        else if (cDay == 3 && cMonth == 11){
            interaction.reply({content: 'Happy Birthday JT! ' + cMonth + "/" + cDay + "/" + cYear,
                files: [
                    "BoulderBirthday.png"
                ]
            });
        }
        else if (cDay == 26 && cMonth == 8){
            interaction.reply({content: 'Happy Birthday AJ! ' + cMonth + "/" + cDay + "/" + cYear,
                files: [
                    "BoulderBirthday.png"
                ]
            });
        }
        else{
            interaction.reply({content: cMonth + "/" + cDay + "/" + cYear , files: ["BoulderBirthday.png"]});
            //interaction.reply({files: ["BoulderBirthday.png"]});
/*             //interaction.reply(cMonth + "/" + cDay + "/" + cYear, {
                files: [
                    "BoulderBirthday.png"
                ]
            }); */
        }
    }
}