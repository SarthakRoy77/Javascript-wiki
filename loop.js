// while loop = repeat some code WHILE some condition is true

let username = "";

while(username === "" || username === null ){
    username = window.prompt("Please enter your username ");
}

console.log(`Hello ${username}`)

// The do while loop variation = do the expression at least once and then continue the while loop

let doUsername;
do{
    doUsername = window.prompt("Please enter your username ");
} while(doUsername === "" || doUsername === null )

console.log(`Hello ${doUsername}`);

// For loop = repeat some code a LIMITED amount of times
// syntax: (declare and assign the variable, add the condition, increment or decrement the variable accordingly)

// First Example
for(let i = 0; i <= 2; i++){
    console.log(i);
}

// Second example
for(let i = 0; i <= 2; i += 2){
    console.log(i);
}
