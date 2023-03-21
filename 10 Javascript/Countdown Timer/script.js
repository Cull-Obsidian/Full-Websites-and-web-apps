const newYears = '1 Jan 2024';  //a sample date

// you can changet the date like your birthday or your anniversary like 23 Jan 2024

const daysel = document.getElementById('days');
const hoursel = document.getElementById('hours');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

function countdown(){
    const newYearsDate = new Date(newYears);  //new Years date in javascript format
    const currentDate = new Date();  // current date

    const totalseconds = (newYearsDate - currentDate) / 1000;  // seconds left 

    const days = Math.floor(totalseconds / 3600 / 24)  // days left

    const hours = Math.floor(totalseconds / 3600) % 24;  //Hours left

    const minutes = Math.floor(totalseconds / 60) % 60;  //min left

    const seconds = Math.floor(totalseconds % 60);  //seconds left


    // daysel.innerText = days;

    // hoursel.innerText = hours;
                                                                                    // this code can be activated if not using the formatTime function
    // min.innerText = minutes;

    // sec.innerText = seconds;

    // console.log( days, hours, minutes, seconds);

    daysel.innerText = formatTime(days);

    hoursel.innerText = formatTime(hours);

    min.innerText = formatTime(minutes);

    sec.innerText = formatTime(seconds);
}


countdown();  //calls the function

setInterval(countdown, 1000)   // to set the interval, to keep the timer going 

function formatTime(time){
    return time < 10 ?(`0${time}`) : time;   // ternary operator to add 0 before no. if the no. is less than 10
}