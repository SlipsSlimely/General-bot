module.exports = {
    name: 'serebii',
    description:"this is a daily command",
    execute(interaction, args){


        // this command links the user to a pokemon fan website, changing the URL daily using some date and time code
        let currentDate = new Date();
        let cDay = currentDate.getDate();
        let cMonth = currentDate.getMonth() + 1;
        let cYear = currentDate.getFullYear();

        Day = 0;
        Month = 0;

        if (cDay === 1){
            cDay = '01';
        }
        else if (cDay === 2){
            cDay = '02';
        }
        else if (cDay === 3){
            cDay = '03';
        }
        else if (cDay === 4){
            cDay = '04';
        }
        else if (cDay === 5){
            cDay = '05';
        }
        else if (cDay === 6){
            cDay = '06';
        }
        else if (cDay === 7){
            cDay = '07';
        }
        else if (cDay === 8){
            cDay = '08';
        }
        else if (cDay === 9){
            cDay = '09';
        }


        if (cMonth === 1 ){
            Month = 'January';
        }
        else if(cMonth === 2){
            Month = 'February';
        }
        else if(cMonth === 3){
            Month = 'March';
        }
        else if(cMonth === 4){
            Month = 'April';
        }
        else if(cMonth === 5){
            Month = 'May';
        }
        else if(cMonth === 6){
            Month = 'June';
        }
        else if(cMonth === 7){
            Month = 'July';
        }
        else if(cMonth === 8){
            Month = 'August';
        }
        else if(cMonth === 9){
            Month = 'September';
        }
        else if(cMonth === 10){
            Month = 'October';
        }
        else if(cMonth === 11){
            Month = 'November';
        }
        else if(cMonth === 12){
            Month = 'December';
        }
        
            interaction.reply('https://serebii.net/news/'+cYear+'/'+cDay+'-'+Month+'-'+cYear+'.shtml');
        
    }
}