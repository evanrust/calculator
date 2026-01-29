//
const darkerColor = "darkblue"

//functions
//add
const addTwo = (a, b) => a + b

//subtract
const subtractTwo = (a, b) => a - b

//multiply
const multiplyTwo = (a, b) => a * b

//divide---hmm
const divideTwo = (a, b) => a / b

//operatore
function operate(first, operator, second) {
    switch (operator) {
        case "+":
            return addTwo(first, second);
            break;
        case "-":
            return subtractTwo(first,second);
            break;
        case "*":
            return multiplyTwo(first,second);
            break;
        case "/":
            return divideTwo(first,second)
    }
}

//add hover to all buttons for shading darker...tint lighter and darker
const allButtons = document.querySelectorAll(".btn")

allButtons.forEach(button => {
    button.addEventListener('mouseenter',(e) => {
        button.style.filter = 'brightness(0.7)'
    })
})

allButtons.forEach(button => {
    button.addEventListener('mouseleave',(e) => {
        button.style.filter = 'brightness(1)'
    })
})

//number buttons
let numButtons = document.querySelectorAll(".btn-num")

//num listeners for clicking to add to display/num
numButtons.forEach(button => {
    button.addEventListener("click",(e) => console.log(e))
})


//main
let calcNumOne = 0;
let calcOperator;
let calcNumTwo;