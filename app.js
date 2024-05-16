let hoursInp = document.getElementById('hoursCountDown');
let minutesInp = document.getElementById('minutesCountDown');
let secondsInp = document.getElementById('secondsCountDown');
let submitInp = document.querySelector('.submitInp')

const timeObj = {
    time: {
        hours: 0,
        minutes: 0,
        seconds: 0
    }
}


function checkHours(){
    if(hoursInp.value === ''){
        return timeObj.hours = 0;
    } else if (hoursInp.value){
        return timeObj.hours = hoursInp.value
    }
}

function checkMinutes(){
    if(minutesInp.value === ''){
        console.log(0)
    } else if(minutesInp.value){
        console.log(minutesInp.value);
    }
}

submitInp.addEventListener('click', checkHours)
