// Hide all Division Elements  
$(document).ready(function(){
    $('div[id^="under-"]').hide();
})

function ageCalculate() {
    // birthDate value from input 
    var birthDate = document.getElementById("birth_date").value;

    // input value into i variable
    var i = new Date(birthDate);

    // formats the date into year/month/day 
    var mdate = birthDate.toString();

    // calculates the birthday values from input -> mdate
    var yearThen = parseInt(mdate.substring(0,4), 10);
    var monthThen = parseInt(mdate.substring(5,7), 10);
    var dayThen = parseInt(mdate.substring(8,10), 10);

    // today's date 
    var today = new Date();

    // birthday entered 
    var birthday = new Date(yearThen, monthThen-1, dayThen);

    var differenceInMilisecond = (today.valueOf() - birthday.valueOf());

    // year difference 
    var year_age = Math.floor(differenceInMilisecond / 31536000000);

    // Day difference 
    var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);

    // How Many months away from current month
    var month_age = Math.floor(day_age / 30);
    // How many days away from current day 
    day_age = day_age % 30;

    // division 8 
    var division8_start = new Date('09/01/2011');
    var division8_end = new Date('08/31/2012');

    // division 9
    var division9_start = new Date('09/01/2010');
    var division9_end = new Date('08/31/2011');

    // division 10
    var division10_start = new Date('09/01/2009');
    var division10_end = new Date('08/31/2010');

    // division 11
    var division11_start = new Date('09/01/2008');
    var division11_end = new Date('08/31/2009');

    // division 12
    var division12_start = new Date('09/01/2007');
    var division12_end = new Date('08/31/2008');
    
    // division 13
    var division13_start = new Date('09/01/2006');
    var division13_end = new Date('08/31/2007');
    
    // division 14
    var division14_start = new Date('09/01/2005');
    var division14_end = new Date('08/31/2006');

    // division 15
    var division15_start = new Date('09/01/2004');
    var division15_end = new Date('08/31/2005');
    
    // division 16
    var division16_start = new Date('09/01/2003');
    var division16_end = new Date('08/31/2004');
    
    // division 17
    var division17_start = new Date('09/01/2002');
    var division17_end = new Date('08/31/2003');
    
    // division 18
    var division18_start = new Date('09/01/2000');
    var division18_end = new Date('08/31/2002');

    if(birthday > 7 && birthday > 19) {
        $('div[id^="under-"]').hide();
        $('.divNone').show();
    }
    if(birthday >= division8_start && birthday <= division8_end) {
        $('div[id^="under-"]').hide();
        $('.div8').show();
    }
    if(birthday >= division9_start && birthday <= division9_end) {
        $('div[id^="under-"]').hide();
        $('.div9').show();
    }
    if(birthday >= division10_start && birthday <= division10_end) {
        $('div[id^="under-"]').hide();
        $('.div10').show();
    }
    if(birthday >= division11_start && birthday <= division11_end) {
        $('div[id^="under-"]').hide();
        $('.div11').show();
    }
    if(birthday >= division12_start && birthday <= division12_end) {
        $('div[id^="under-"]').hide();
        $('.div12').show();
    }
    if(birthday >= division13_start && birthday <= division13_end) {
        $('div[id^="under-"]').hide();
        $('.div13').show();
    }
    if(birthday >= division14_start && birthday <= division14_end) {
        $('div[id^="under-"]').hide();
        $('.div14').show();
    }
    if(birthday >= division15_start && birthday <= division15_end) {
        $('div[id^="under-"]').hide();
        $('.div15').show();
    }
    if(birthday >= division16_start && birthday <= division16_end) {
        $('div[id^="under-"]').hide();
        $('.div16').show();
    }
    if(birthday >= division17_start && birthday <= division17_end) {
        $('div[id^="under-"]').hide();
        $('.div17').show();
    }
    if(birthday >= division18_start && birthday <= division18_end) {
        $('div[id^="under-"]').hide();
        $('.div18').show();
    }
    if (isNaN(year_age) || isNaN(month_age) || isNaN(day_age)) {
        $('div[id^="under-"]').hide();
        $('.invalid-date').show();
    }
    if(birthday > today) {
        $('div[id^="under-"]').hide();
        $('.invalid-date').show();
    }
    // document.getElementById("age").innerHTML = "Player's age: " + year_age;

}

