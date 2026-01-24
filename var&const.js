
// Variable = A container that stores a value.Behaves as if it were the value it contains
// 1.declaration     let x;
// 2.assignment      x = 100;


// Declaration and assignment as different
let x;
x = 100;
console.log(x);

// Declaration and assignment as one
let y = 200;
console.log(y)

// Include variables in outputs 
let age = 3;
console.log(`Your age is ${age}`);

//Reveal datatype of a variable
console.log(typeof age);

//Booleans in Javascript
let online = true;
console.log(`bro is online : ${online}`);

//Mini program

let fullName = "Sarthak";
let age1 = 25; 
let isStudent = true;

document.getElementById('p1').textContent=`My name is ${fullName}`
document.getElementById('p2').textContent=`My age is ${age1}`
document.getElementById('p3').textContent=`Student status : ${isStudent}`


// arithmetic operators = operands (value, variables, etc.)
                        //operators (+ - * / ** )

let students = 30;

// Addition
students = students+1;
//Subtraction 
students = students-1;
// Multiplication
students = students*2;
// Division
students = students / 2;
// Exponentiation
students = students ** 2;
// Remainder
let extraStudents = students % 3 ;
console.log(extraStudents)
// Augmented Assignment Operators
// These are : +=, -=, *= , /=, **= , %=

// Increment & Decrement Operators
// students++;
// students--; 
// These either add 1 or subtract 1 to it .


/* operator precedence 
    1.()
    2.exponent 
    3.multiplication & division & modulo
    4.addition & subtraction 
*/
console.log(students);

let result = 1+2*3+4**2;
console.log(result);

// const = a variable that can't be changed 

const PI = 3.14159 // Earlier let pi 
let radius;
let circumference;


document.getElementById("BUTTON").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2*PI*radius;
    document.getElementById("hi").textContent = circumference;
    
}

// In this if the value of pi would be changed it would cause a Logical
// Error so to avoid it we should change

// const PI = 3.14159

// ternary operator = a shortcut to if{} and else{} statements
                    // helps to assign a variable based on a condition
                    //  ? codeIfTrue : codeIfFalse

let age2 = 21;
let message = age2>18 ? "You're an adult" : "You're a minor"
console.log(message)

// Logical Operators = used to combine or manipulate boolean values

//                  AND = &&
//                  OR = ||
//                  NOT = !

const TEMP = 20;
if (TEMP>20 && TEMP<10){
    console.log("The weather is good");
}

//Strict Equality
// = assignment operator
// == comparison operator (compare if values are equal)
// === strict equality operator (compare if values&datatypes are equal)
// != inequality operator
// !== strict inequality operator

const pi = "3.14";

if (pi === "3.14"){
    console.log("That is PI");
}
else{
    console.log("That is NOT PI");
}


//Variable scope = where a variable is recognized and accessible [local vs global]

//Variables with the same name in the same scope will cause an error
//While same names in different scopes will not cause an error.
//The scopes are the local [function] and the global scope.

let x1 = 1;

function func1() {
    let x1;
    x1 = 1;
    return x1;
}

function func2() {
    let x1;
    x1 = 2;
    return x1;
}

console.log(func1());
console.log(func2());
console.log(x1);
