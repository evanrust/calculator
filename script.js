//functions
//add
const addTwo = (a, b) => a + b

//subtract
const subtractTwo = (a, b) => a - b

//multiply
const multiplyTwo = (a, b) => a * b

//divide---hmm
const divideTwo = (a, b) => {
    if (b === 0) {
        return 'Div by 0!'
    }
    else return a / b
}

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

        //if this is the first operation
        if (!calcOperator) {
            //null out screen
            screenDisplay.textContent = null

            //set operator
            calcOperator = button.textContent
        }

        //if this is an operation in a chain
        else {
            //calculate the result + display it
            let thisResult = operate(calcNumOne, calcOperator, calcNumTwo)

            //set the result to first var and clear out opreator, 2nd num
            calcNumOne = parseFloat(thisResult.toFixed(2))
            calcOperator = button.textContent
            calcNumTwo = null

            //display result on screen
            screenDisplay.textContent = parseFloat(thisResult.toFixed(2))
        }
    })
})

//number buttons
numButtons.forEach(button => {
    button.addEventListener("click", (e) => {

        //if the operator isn't set yet, build the 1st #
        if (!calcOperator) {

            //append to screen
            //if no number already, create it, else add
            if(!calcNumOne && calcNumOne!==0){
                clearAll()
                screenDisplay.textContent = button.textContent
            }

            else screenDisplay.textContent += button.textContent

            //set operator
            calcNumOne = parseInt(screenDisplay.textContent)
        }

        else { //2nd button

            //if we start the 2nd number, clear the display first
            if (!calcNumTwo) {
                screenDisplay.textContent = null
            }

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

function clearAll(){
    screenDisplay.textContent = ""
    calcNumOne = null
    calcNumTwo = null
    calcOperator = null
}

//clear button
clearButton.addEventListener("click", clearAll)

//operate function
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
//equals button
equalsButton.addEventListener("click", () => {

    //catch divide by 0
    if (calcNumTwo == 0 && calcOperator == '/') {
        
        //clear everything
        clearAll()

        //show error
        let thisResult = 'Div / 0'
        screenDisplay.textContent = thisResult
    }

    //only execute if both #s and the operator are in
    if (calcNumOne && calcNumTwo && calcOperator) {

        let thisResult = operate(calcNumOne, calcOperator, calcNumTwo)

        //round off if float
        if(thisResult % 1 !== 0){
            thisResult = thisResult.toFixed(2)
        }

        //display result on screen
        screenDisplay.textContent = thisResult
    }

})

//main
let calcNumOne;
let calcOperator;
let calcNumTwo;