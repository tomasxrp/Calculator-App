function addNumber(num){
    const display = document.getElementById('display');
    display.value += num;
}

function clearDisplay(){
    const display = document.getElementById('display');
    display.value = '';
}

function deleteNumber(){
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function addOperator(operator){
    const display = document.getElementById('display');
    display.value += operator;
}

function calculate(){
    const display = document.getElementById('display');
    display.value = eval(display.value);
}




