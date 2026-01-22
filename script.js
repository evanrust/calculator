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


//main
let calcNumOne;
let calcOperator;
let calcNumTwo;

console.log(operate(2,"+",4))