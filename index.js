const display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input;
}

function processCalc(val){
    return eval(`${val}`)
}

function clearDisplay(){
    display.value = "";
}

function operate(){
    try{
        display.value = processCalc(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}