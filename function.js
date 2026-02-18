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

// setTimeout function: first functionRef then lines of code and timeout
// time in Milliseconds