let university = "Limkokwing"
console.log(university);


let fullName = "Mohamed Kargbo"
let role = "Lecturer"
let faculty = "DICT"


// string concatenation
console.log("*****PERSON INFORMATION*****");
console.log("University:" + university);
console.log("Person Name:" + fullName);
console.log("Role:" + role);
console.log("Faculty:" + faculty);

let sentence  = "My name is " + fullName + " I am a " + role + "at" + university + " and Iam in " + faculty + " department."
console.log(sentence);

// string length

let personName = "Mohamed Kargbo"
console.log(personName.length);

//  Getting a character from a string by its index
console.log(personName [3]);
console.log(personName [7]);
console.log(personName [10]);
console.log(personName [11]);
console.log(personName [1]);
console.log(personName [1]);

// EXERCISE
// Create an abbreviation of five variables names that has two or three words 
// in them and let the abbreviation variables of those variables have just 
// the starting characters of the values of those  variables to be abbreviated. Get the 
// abbraviated values using the  string indexing to get the values


let  str1 = "Mohamed Kargbo"
let str2 = "Mohamed babatunde kamara"
let str3 = "Bainga Tamayor Kamara"
let str4 = "Winday Sesay"
let str5 = "Ibrahim Kargbo"


let abvr1 = str1[0] + str1 [8]
let abvr2 = str2[0] + str2 [8] + str2[18]
let abvr3 = str3[0] + str3 [7] + str3[13]
let abvr4 = str4[0] + str4 [8]
let abvr5 = str5[0] + str5 [8]


// string merhods
let strVal = "Samuel Amkam"
console.log(strVal);

// convert to uppercase

console.log(strVal.toUpperCase ()); // \t is used to tab
console.log(strVal.toLowerCase ());  // \n is used to break to a new line

// string formatting
console.log( "\t AMADU KAMARA");  
console.log( "\n Akamk WebAvenger");


// Template Literal / String Literal
let num1 =  20
let num2 = 13
let num3 =  24
let  average = (num1) + (num2) + (num3) / 3
console.log(average);
console.log(`The averageof ${num1} + ${num2} + ${num3} = ${{average}}`);


//  checking if a values exist in a string
let email = "AmkaM@lenosol.com"
console.log(email.includes ("amkam"));

//  method chaining
console.log(email.includes);

console.log(email.toLowerCase().includes ("amkam"));







