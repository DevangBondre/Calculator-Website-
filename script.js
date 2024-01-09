const ac = document.getElementById('ac')
const clear = document.getElementById('clear')
const operand = document.querySelectorAll('.operand')
const numberButtons = document.querySelectorAll('[data-number]')
const screen1 = document.getElementById('screen1')
const screen2 = document.getElementById('screen2')





function updateScreen(event){
    const screenContent = event.target.innerText;
    screen2.textContent = screen2.textContent + " " + screenContent;
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
    event.stopPropagation();
}

ac.addEventListener('click',allClearScreen)