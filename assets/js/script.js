
var text = "";
var numbers = "";

const numberButtons = document.querySelectorAll('[data-number]');
const operands = document.querySelectorAll('[data-operator]');
const currentScreen = document.querySelector('.current-operand')
const previousScreen = document.querySelector('.previous-operand')

Array.from(numberButtons).forEach((button) =>{
    button.addEventListener('click', (e) =>{
            text += e.target.innerHTML
            numbers += e.target.innerHTML 
            document.querySelector(".current-operand").innerHTML = text        
    })
})

Array.from(operands).forEach((operand) =>{
    operand.addEventListener('click',(e) =>{
        text += " " + e.target.innerHTML;
        numbers += e.target.innerHTML
        previousScreen.innerHTML = text
        text = ""
        currentScreen.innerHTML = text 
    })
})

document.querySelector('[data-delete]').addEventListener('click', (e)=>{
    let del = currentScreen.innerHTML.slice(0, -1)
    text = del
    currentScreen.innerHTML = text 
})

document.querySelector('[data-equal]').addEventListener('click', (e) =>{
    let answer = eval(numbers)
    currentScreen.innerHTML = answer;
    previousScreen.innerHTML = "";

    text = ""
    numbers = ""
})


document.querySelector('[data-clear]').addEventListener('click', (e)=>{
    text = ""
    numbers = ""
    currentScreen.innerHTML = "";
    previousScreen.innerHTML = "";
})


