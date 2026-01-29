//functions
//add
const addTwo = (a, b) => a + b

//subtract
const subtractTwo = (a, b) => a - b

//multiply
const multiplyTwo = (a, b) => a * b

//divide---hmm
const divideTwo = (a, b) => a / b

//operate
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

//selectors
const allButtons = document.querySelectorAll(".btn")
const numButtons = document.querySelectorAll(".btn-num")
const screenDisplay = document.querySelector("#display")

//add and remove tint
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


//show clicked stuff on display
numButtons.forEach(button => {
    button.addEventListener("click",(e) => {
        //display it on the screen (just current number for now)
        screenDisplay.textContent = button.textContent

        //put it in the corret number variable -- first one if blank, else 2nd
        if(!calcNumOne){
            calcNumOne = button.textContent
        }
        else {
            calcNumTwo = button.textContent
        }
    })
})


//main
let calcNumOne;
let calcOperator;
let calcNumTwo;