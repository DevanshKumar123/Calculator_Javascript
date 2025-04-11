function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value ='';
}

function deleteLast() {
    document.getElementById('display');
    display.value = display.value.slice(0,-1);
}

function calculate() {
    document.getElementById('display');
    try {
        display.value = eval(display.value);
    }
    catch{
        display.value = 'Error';
    }
}

document.addEventListener('keydown', function(e) {
    const key=e.key;
    const pressed = ['0','1','2','3','4','5','6','7','8','9','/','*','-','+','.'];

    if(pressed.includes(key)){
        appendValue(key);
    }
    else if(key == 'Enter'){
        calculate();
    }
    else if(key == 'Backspace'){
        deleteLast();
    }
    else if(key.toUpperCase() === 'C'){
        clearDisplay();
    }
});