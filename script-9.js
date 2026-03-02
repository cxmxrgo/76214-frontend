// ======== ANONYMOUS FUNCTIONS ========

// Anonymous function	
const showGreeting = function () {
	console.log('Hello from anonymous function');
};

showGreeting(); // Hello from anonymous function

// ======== ARITHMETIC ANONYMOUS FUNCTIONS ========
const addTwoNums = function (num1, num2) {
    return num1 + num2;
};

const subtractTwoNums = function (num1, num2) {
    return num1 - num2;
};

const multiplyTwoNums = function (num1, num2) {
    return num1 * num2;
};

const divideTwoNums = function (num1, num2) {
    return num1 / num2;
};

// Call the functions with sample arguments and log results
let resultAdd = addTwoNums(8,2);
console.log(`Addition result: ${resultAdd}`);

let resultSubtract = subtractTwoNums(8,2);
console.log(`Subtraction result: ${resultSubtract}`);

let resultMultiply = multiplyTwoNums(8,2);
console.log(`Multiplication result: ${resultMultiply}`);

let resultDivide = divideTwoNums(8,2);
console.log(`Division result: ${resultDivide}`);

/* Calculator function that accepts function expression
as an argument */

function doCalculation(num1, num2, operation) {
    return operation(num1, num2);
}

let resultCalcAdd = doCalculation(10, 5, addTwoNums); 
console.log(`Calculator addition result: ${resultCalcAdd}`);// 15
let resultCalcSubtract = doCalculation(10, 5, subtractTwoNums); 
console.log(`Calculator subtraction result: ${resultCalcSubtract}`);// 5
let resultCalcMultiply = doCalculation(10, 5, multiplyTwoNums); 
console.log(`Calculator multiplication result: ${resultCalcMultiply}`);// 50
let resultCalcDivide = doCalculation(10, 5, divideTwoNums); 
console.log(`Calculator division result: ${resultCalcDivide}`);// 2

// ======== ARROW FUNCTIONS ========

// Arrow function
const helloFromArrow = () => {
    console.log('Hello from arrow function');
};

// Call the arrow function using the variable name
helloFromArrow();

// Arrow function without parentheses around single parameter
const greetNoParen = name => `Hello, ${name}!`;

const greetingNoParen = greetNoParen("Mary");
console.log(greetingNoParen); // Hello, Mary!

// Single-statement arrow functions with implicit returns

const double = x => x * 2;
console.log(double(10)); // 20

const halfNum = num => (num / 2);
console.log(halfNum(200)); // 100

const add15ToPrice = num => (num + 15);
console.log(add15ToPrice(100)); // 115

// Calculate product price after 20% tax
const finalPrice = (price, tax) => (price + (price * tax));
console.log(finalPrice(50, .20)); // 60

// Testing a number above zero
const isPositive = num => num > 0;
console.log(isPositive(5)); // true

const uppercase = str => str.toUpperCase()
console.log(uppercase("hello")); // HELLO

// Immediately-invoked anonymous function
(function() {
    console.log("Hello from immediately-invoked anonymous function");
})();

// Immediately invoked arrow functions
(() => {
    console.log("Hello from arrow function");
})();

// With parameters
((name, age) => {
    console.log(`Processing ${name}, age ${age}`);
    return `Processed ${name}`;
})('John', 30);


// ======== TRY IT YOURSELF EXERCISES ========

// Exercise 1: Anonymous function for full name with last name uppercase
const formatName = function(firstName, lastName) {
    return `${firstName} ${lastName.toUpperCase()}`;
};

console.log(formatName("John", "Doe")); // John DOE
console.log(formatName("Jane", "Smith")); // Jane SMITH

// Exercise 2: Anonymous function for average of three numbers
const calculateAverage = function(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
};

console.log(`Average: ${calculateAverage(10, 20, 30)}`); // 20
console.log(`Average: ${calculateAverage(5, 10, 15)}`); // 10

// Exercise 3: Immediately-invoked function for rectangle area
(function() {
    const width = 10;
    const height = 5;
    const area = width * height;
    console.log(`Rectangle area (width: ${width}, height: ${height}): ${area}`);
})();

// Exercise 4: Arrow functions with multiple parameters
// combineWords - joins two strings with a space
const combineWords = (word1, word2) => `${word1} ${word2}`;

console.log(combineWords("Hello", "World")); // Hello World

// calculateArea - computes area of rectangle (width × height)
const calculateArea = (width, height) => width * height;

console.log(`Area: ${calculateArea(10, 5)}`); // 50

// calculateVolume - computes volume of a box (width × height × depth)
const calculateVolume = (width, height, depth) => width * height * depth;

console.log(`Volume: ${calculateVolume(10, 5, 2)}`); // 100

// Exercise 5: Convert anonymous functions to arrow functions

// Original: const sayHelloUser = function() { return "Hello!"; };
const sayHelloUser = () => "Hello!";

console.log(sayHelloUser()); // Hello!

// Original: const squareNum = function(x) { return x * x; };
const squareNum = x => x * x;

console.log(squareNum(5)); // 25

// Original: const isEmptyStr = function(str) { return str.length === 0; };
const isEmptyStr = str => str.length === 0;

console.log(isEmptyStr("")); // true
console.log(isEmptyStr("hello")); // false
