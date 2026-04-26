const display = document.getElementById("display");

function clearDisplay(){
    display.value = "";
}

function press(data){
    display.value += data;
}

function calculate(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "ERROR";
    }
}