// IF STATEMENTS = if a condition is true, execute some code 
            //     if not , do something else

// If else statements
let age = 25;

if (age>=18) {
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}

// NESTED if else statements
let age1 = Number(window.prompt("What is your age? "));
let hasLicense = true

if (hasLicense) {
    if (age1>=18) {
        console.log("You can drive");
    }
    else {
        console.log("Liar!");
    }
}
else {
    console.log("You should first have a license!")
}