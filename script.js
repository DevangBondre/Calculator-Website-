const ac = document.getElementById('ac')
const clear = document.getElementById('clear')
const operand = document.querySelectorAll('.operand')
const numberButtons = document.querySelectorAll('[data-number]')
const screen1 = document.getElementById('screen1')
const screen2 = document.getElementById('screen2')
const ans = document.getElementById('ans')

let num1 = '';
let num2 = '';
let operator = '';

function updateScreen(event) {
    const screenContent = event.target.innerText;

    if (screenContent === '+' || screenContent === '-' || screenContent === 'x' || screenContent === '÷' || screenContent === '%') {
        if (operator !== '') {
            
            num2 = screen2.textContent.trim();
            performOperation();
        }

        operator = screenContent;
        num1 = screen2.textContent.trim();
        screen1.textContent = num1 + " " + operator;
        screen2.textContent = " ";
    } else {
        screen2.textContent = screen2.textContent + screenContent;
    }
}
numberButtons.forEach(button =>{
    button.addEventListener('click',updateScreen)
})

operand.forEach(button=>{
    button.addEventListener('click',updateScreen)
})

function allClearScreen(){
    screen2.textContent = " "
    screen1.textContent = " "
    num1 = '';
    num2 = '';
    operator = '';
    result = ''
}

ac.addEventListener('click',allClearScreen)
ans.addEventListener('click',calculations)


function performOperation() {
    if (num1 !== '' && num2 !== '' && operator !== '') {
        if (operator === '+') {
            result = parseFloat(num1) + parseFloat(num2);
        } else if (operator === '-') {
            result = parseFloat(num1) - parseFloat(num2);
        } else if (operator === '÷') {
            result = parseFloat(num1) / parseFloat(num2);
        } else if (operator === '%') {
            result = parseFloat(num1) % parseFloat(num2);
        } else if (operator === 'x') {
            result = parseFloat(num1) * parseFloat(num2);
        }

        screen1.textContent = num1 + " " + operator + " " + num2;
        screen2.textContent = result;
        num1 = result.toString();
        num2 = '';
        operator = '';
    }
}

function calculations(){
    num2 = screen2.textContent.trim()
    screen2.textContent = " " + num2 
    let result = " "

    if(operator === '+'){
        result = parseFloat(num1) + parseFloat(num2) 
        
    }
    else if(operator === '-'){
         result = parseFloat(num1) - parseFloat(num2)
        
    }
    else if(operator === '÷'){
        result = parseFloat(num1) / parseFloat(num2)
        
    }
    else if(operator === '%'){
        result = parseFloat(num1) % parseFloat(num2)
        
    }
    else if (operator === 'x'){
        result = parseFloat(num1) * parseFloat(num2)
        
    }
    screen1.textContent = num1 + operator +  num2; 
    screen2.textContent = result
}

clear.addEventListener('click',deleteButton)

function deleteButton(){
  let currentScreenContent = screen2.textContent

  currentScreenContent = screen2.textContent.slice(0,-1)

  screen2.textContent = currentScreenContent
}