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
let hasLicense = true;

if (hasLicense) {
    if (age1>=18) {
        console.log("You can drive");
    }
    else {
        console.log("Liar!");
    }
}
else {
    console.log("You should first have a license!");
}

// SWITCH = can be efficient replacement to many else-if statements

let day = 1;

switch(day){
    case 1:
        document.getElementById('outputPresenter').textContent = "It is Monday";
        break;
    case 2:
        document.getElementById('outputPresenter').textContent = "It is Tuesday";
        break;
    case 3:
        document.getElementById('outputPresenter').textContent = "It is Wednesday";
        break;
    case 4:
        document.getElementById('outputPresenter').textContent = "It is Thursday";
        break;
    case 5:
        document.getElementById('outputPresenter').textContent = "It is Friday";
        break;
    case 6:
        document.getElementById('outputPresenter').textContent = "It is Saturday";
        break;
    case 7:
        document.getElementById('outputPresenter').textContent = "It is Sunday";
        break;
    default:
        document.getElementById('outputPresenter').textContent = `${day} is not a day`
    }

// rest parameters = ...rest allow a function work with a variable
//                       number of arguments by bundling them into an array

//                       spread = expands an array into separate elements
//                       rest = bundles separate elements into an array

function openFridge(...foods){
    console.log(...foods);
}

const food1 = "Pizza";
const food2 = "hamburger";
const food3 = "hot dog";
const food4 = "sushi";

openFridge(food1,food2,food3,food4);