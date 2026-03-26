// function = A section of reusable code.
//            Declare code once, use it whenever you want.
//            Call the function to execute the code.

// Printing function
function happyBirthday(userName, age){
    console.log("Happy Birthday to you ");
    console.log("Happy Birthday to you ");
    console.log(`Happy Birthday dear ${userName}`);
    console.log("Happy Birthday to you");
    console.log(`You are ${age}`);
}

happyBirthday("BroCode", 46);

// Return function
function add(x,y){
    return x + y
}

function subtract(x,y){
    return x - y
}

console.log(add(2,3))
console.log(subtract(2,3))

//callback = a function that is passed as an argument to
//            another function

//           used to handle asynchronous operations
//           1. Reading a file
//           2. Network Requests
//           3. Interacting with databases
//          "Hey when you're done , call this next"

// Asynchronous operations in JS are tasks that run in the background without
// blocking the main execution thread , allowing the program to remain responsive and handle
// other events concurrently.

hello(goodbye);

function hello(callback) {
    console.log("hello");
    callback();
}

function goodbye() {
    console.log("goodbye");
}

sum(displayConsole, 1, 2)

function sum(callback, x, y){
    let result = x+y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

// setTimeout function: first functionRef then lines of code and timeout
// time in Milliseconds

//forEach() = method used to iterate over the elements of an array
//            and apply a specified function (callback) to each element

//              array.forEach(callback), element, index, array are provided

let numbers = [1,2,3,4,5];

numbers.forEach(display)
numbers.forEach(double);

function display(element){
    console.log(element);
}

function double(element , index, array){
    array[index] = element * 2;
    console.log(array);

}

//.map() = method used to apply a callback to an array create a
//         new array storing the callback applied values.
//         It is similar to .forEach() function

let mappingNumbers = [1,2,3,4,5,6]
let mappedNumbers = mappingNumbers.map(cubed)

console.log(mappedNumbers)

function cubed(element){
    return Math.pow(element, 3)
}

//.filter() = method to create a new array by filtering out elements.
//            It keeps the element that return a 'true' boolean value
//            filters out the elements that return a 'false' boolean value

let nums = [1,2,3,3,4,5,2,3,4,6,4,];

let evenNums = nums.filter(isEven);
console.log(evenNums);
function isEven(element){
    return Number(element) % 2 === 0;
}

//.reduce() = reduces an array to one single value. It is the sum of the array.The accumulator
//            parameter is the previous value and the element is the next value in relation to
//            the accumulator.

let prices = [30, 40, 50, 80, 90, 20]

let bill = prices.reduce(sum_fx);
console.log(`$${bill}`);

let max = prices.reduce(getMax);
console.log(max);

let min = prices.reduce(getMin);
console.log(min);

function sum_fx(accumulator, element){
    return accumulator + element;
}

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}
