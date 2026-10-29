// OPERATORS
// 1 mathematical operators
// additional operators(+)

let num1 = 20;
let num2 = 10;
let sum = num1 + num2; // aditional operators usage
let difference = num1 - num2; // substraction operators usage
let product = num1 * num2; // multiplication operators usage
let quotient = num1 / num2; // division operators usage
let remainder = num1 % num2; // modulus operators usage

console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);
console.log(remainder);

// Comparison Operator

console.log(num1 > num2); // Greater than operator usage
console.log(num1 < num2); // less than operator usage
console.log(num1 >= num2); // Greater than or Equal operator uasge
console.log(num1 <= num2); // Less than or Equal operator usage
console.log(num1 == num2); // Equal to operator or Loose Equal usage
console.log(num1 === num2); // Equal to Operator or Strict Equal Usage

console.log("============================");

let number = "9";
console.log(number == 9); //    True - Loose equality check
console.log(number === 9); // False - Strict equality check

// Logical Operator
let email = "amkam@lenosol.com";
let password = "123456789";

// Logical OR (||)  - Only returns true when at least one condition is true and false when all conditions are flase false
console.log(email === "amadu@lenosol.com" && password === "123456789"); // false
console.log(email === "amkam@lenosol.com" && password === 123456789); // false
console.log(email === "amkam@lenosol.com" && password === "123456789"); // True

console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");


// Logical AND (&) Operator - Only returns true when both conditions are true true
console.log(email === "amadu@lenosol.com" || password === "123456789"); // True
console.log(email === "amadu@lenosol.com" || password === 123456789); // True
console.log(email === "amadu@lenosol.com" || password === "123456789"); // False

console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");


// The Logical Not (!) This opearator negate a variables's value
let abuAge = 34
let marieAge = 23
let fodayAge ="34"

console.log(abuAge  != marieAge);
console.log(abuAge != fodayAge);
console.log(abuAge !== fodayAge);
