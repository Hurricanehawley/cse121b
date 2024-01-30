/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1,number2)  {
    return number1 + number2;
}
function addNumbers(){
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1,number2)  {
    return number1 - number2;
}
function subtractNumbers() {
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);
/* Arrow Function - Multiply Numbers */
const multiply = (x, y) => x * y;
const multiplyNumbers = () => {
    let factor1 = parseFloat(document.getElementById("factor1").value);
    let factor2 = parseFloat(document.getElementById("factor2").value);
    let product = multiply(factor1, factor2);
    document.getElementById("product").value = product.toFixed(1);
};
document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(number1, number2){
    return number1 / number2;
}
function divideNumbers() {
    let divideNumber1 = Number(document.querySelector("#dividend").value);
    let divideNumber2 = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(divideNumber1, divideNumber2);
};
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);
/* Decision Structure */
//initialize variables
function getTotal() {
//input
let subtotal = parseFloat(document.getElementById("subtotal").value);
//processing code to determine discount
if (document.getElementById("member").checked) {
    subtotal = subtotal - subtotal * 0.2;
}
//output
document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`;
}
document.getElementById("getTotal").addEventListener("click", getTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbersArray.filter(number => number % 2===1);
/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2===0);
/* Output Sum of Org. Array */
numbersArray.reduce((sum, number) => sum + number)
/* Output Multiplied by 2 Array */
// example only
numbersArray.map(number => number * 2)
/* Output Sum of Multiplied by 2 Array */
