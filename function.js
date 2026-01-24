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