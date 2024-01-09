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

function updateScreen(event){
    const screenContent = event.target.innerText;
    
    if(screenContent === '+' || screenContent === '-' || screenContent === 'x' || screenContent === '/' || screenContent === '%'){
        operator = screenContent;
        num1 = screen2.textContent.trim()
        screen2.textContent = num1 + " " + operator
        screen1.textContent = " "
    }
    else{
        screen2.textContent = screen2.textContent + screenContent
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
    
}

ac.addEventListener('click',allClearScreen)
ans.addEventListener('click',calculations)


function calculations(){
    num2 = screen2.textContent.trim()
    screen2.textContent = " " + num2 
    let result = " "

    if(operator === '+'){
        result = parseFloat(num1) + parseFloat(num2) 
        
    }
    else if(operator === '-'){
        sub()
        
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
    screen1.textContent = " " + num2; 
    screen2.textContent = result
}

clear.addEventListener('click',deleteButton)

function deleteButton(){
  let currentScreenContent = screen2.textContent

  currentScreenContent = screen2.textContent.slice(0,-1)

  screen2.textContent = currentScreenContent
}
