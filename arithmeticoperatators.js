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
let extrastudents = students % 3 ;

// Augmented Assignment Operators
// These are : +=, -=, *= , /=, **= , %=

// Increment & Decrement Operators
// students++;
// students--; 
// Thse either add 1 or subtract 1 to it .


/* operator precedence 
    1.()
    2.exponent 
    3.multiplication & division & modulo
    4.addition & subtraction 
*/
console.log(students);

let result = 1+2*3+4**2;
console.log(result);