//functions
//add
const addTwo = (a, b) => a + b

//subtract
const subtractTwo = (a, b) => a - b

//multiply
const multiplyTwo = (a, b) => a * b

//divide---hmm
const divideTwo = (a, b) => a / b

//selectors
const allButtons = document.querySelectorAll(".btn")
const numButtons = document.querySelectorAll(".btn-num")
const screenDisplay = document.querySelector("#display")
const equalsButton = document.querySelector("#equals")
const clearButton = document.querySelector("#clear")
const operateButtons = document.querySelectorAll(".button-dark")

//shading
allButtons.forEach(button => {
    //add tint on mouseover
    button.addEventListener('mouseenter', (e) => {
        button.style.filter = 'brightness(0.7)'
    })
    //revert tint on exit
    button.addEventListener('mouseleave', (e) => {
        button.style.filter = 'brightness(1)'
    })
})

//when clicking operate buttons, save into operate variable
//only save if its null already
operateButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(!calcOperator){
            //null out screen
            screenDisplay.textContent = null

            //set operator
            calcOperator = button.textContent
        }
    })
})

//show clicked stuff on display
numButtons.forEach(button => {
    button.addEventListener("click", (e) => {

        //if the operator isn't set yet, build the 1st #
        if(!calcOperator){

            //append to screen
            screenDisplay.textContent += button.textContent

            //set operator
            calcNumOne = parseInt(screenDisplay.textContent)
        }

        else{ //2nd button
            //append to screen
            screenDisplay.textContent += button.textContent

            //set operator
            calcNumTwo = parseInt(screenDisplay.textContent)
        }

        //uncover equals sign if nums/operator are selected
        if (calcNumOne && calcNumTwo && calcOperator) {
            equalsButton.style.backgroundColor = '#FFFFFF'
        }

    })
})

//clear button wipes display and all vars
clearButton.addEventListener("click", () => {
    screenDisplay.textContent = ""
    calcNumOne = null
    calcNumTwo = null
    calcOperator = null
})

//operate -- call on equals
function operate(first, operator, second) {
    switch (operator) {
        case "+":
            return addTwo(first, second);
            break;
        case "-":
            return subtractTwo(first, second);
            break;
        case "*":
            return multiplyTwo(first, second);
            break;
        case "/":
            return divideTwo(first, second)
    }
}
//listen for equals and execute operate
equalsButton.addEventListener("click", () => {

    //only execute if both #s and the operator are in
    if (calcNumOne && calcNumTwo && calcOperator) {

        let thisResult = operate(calcNumOne, calcOperator, calcNumTwo)

        //display result on screen
        screenDisplay.textContent = thisResult
    }

})

//main
let calcNumOne;
let calcOperator;
let calcNumTwo;