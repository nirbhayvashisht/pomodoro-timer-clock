let startingMinutes = 1;
const stopButton = document.getElementById('stop-button');
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');
const fiveMinButton = document.getElementById('five-min');
const twentyfiveMinButton = document.getElementById('twentyfive-min');
const bigBreakButton = document.getElementById('big-break');
let myVar;
let time = startingMinutes * 60; //in seconds
let initialTime = time;


const countdownElement = document.getElementById('countdown');

function updateCountdown(){
    if(time<=0){
        clearInterval(time=0);
    }
    //updateCounterElement();
    const minutes = Math.floor(time / 60);
    let seconds = time % 60 ;
    seconds = seconds < 10 ? '0'+ seconds : seconds;
    countdownElement.innerHTML = `${minutes}:${seconds}`;

    time--;
}

function updateCounterElement(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60 ;
    seconds = seconds < 10 ? '0'+ seconds : seconds;
    countdownElement.innerHTML = `${minutes}:${seconds}`;
}

function myStartFunction(){
    myVar = setInterval(updateCountdown,1000);        
}

function myStopFunction() {
    clearInterval(myVar);
}

function myResetFunction(){
    myStopFunction();
    time = initialTime;
    updateCounterElement();
}

function updateTimer(inputTime){
    myStopFunction();
    updateTime(inputTime);
    updateCounterElement();
}

function updateTime(inputTime){
    time = inputTime * 60;
    initialTime = time;
}


//var fiveMin = updateTimer(5);
//var twentyfiveMin = ;
//var bigBreak = ;

startButton.addEventListener('click',myStartFunction);

stopButton.addEventListener('click',myStopFunction);

resetButton.addEventListener('click',myResetFunction);

fiveMinButton.addEventListener('click',function(){
    updateTimer(5);
});

twentyfiveMinButton.addEventListener('click',function(){
    updateTimer(25);
});

bigBreakButton.addEventListener('click',function(){
    updateTimer(30);
});