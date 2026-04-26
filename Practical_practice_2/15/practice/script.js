const display = document.getElementById("display");

let second = 0;
let hour = 0;
let minute = 0;
let timer = null;

function updateDisplay(){
    let h = String(hour).padStart(2, '0');
    let s = String(second).padStart(2,'0');
    let m = String(minute).padStart(2, '0');

    display.textContent = `${h}:${m}:${s}`;
}


function start(){
    if(timer !== null) return;

    timer = setInterval(() => {
        second++;

        if(second===60){
            second = 0;
            minute++;
        }

        if(minute === 60){
            minute =0;
            hour++;
        }

        updateDisplay();
    }, 1000);
}


function stop(){
    clearInterval(timer);
    timer = null;
}

function reset(){
    stop();
    minute = 0;
    second = 0;
    hour = 0;

    updateDisplay();
}