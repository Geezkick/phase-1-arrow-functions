// index.js

// Basic arrow function with one parameter
const double = x => x * 2;

// Arrow function with multiple parameters
const add = (num1, num2) => num1 + num2;

// Arrow function with multiple lines
const calculateTotal = (price, taxRate) => {
  const tax = price * taxRate;
  return price + tax;
};

// Arrow function used with array method
const squareNumbers = numbers => numbers.map(num => num * num);

// Arrow function with string manipulation
const greet = name => `Hello, ${name}!`;

// Add more arrow functions as required by your specific tests

// You could even test your functions locally if you want:
// console.log(double(5));          // 10
// console.log(add(3, 4));         // 7
// console.log(calculateTotal(100, 0.1)); // 110
// console.log(squareNumbers([1, 2, 3])); // [1, 4, 9]
// console.log(greet("Alex"));     // "Hello, Alex!"