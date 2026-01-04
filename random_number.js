// Random Number Generator

const myButton = document.getElementById('myButton');
const myLabel = document.getElementById('myLabel');
const min=1;
const max=6;
let randomNum;

myButton.onclick = function() {
    randomNum = Math.floor(Math.random() * max) + min 
    myLabel.textContent = randomNum;
}



// let randomNum = Math.random();// This returns an number between 0 and 1

// let randomNum1 = Math.floor(randomNum); // This will round it up 

// let randomNum2 = Math.floor(randomNum1 * 6) +1 ;// This will 

// generate a random number between 1(min) and 6

// The same with range 
// const min = Number(window.prompt("Enter the Minimum number "));
// const max = Number(window.prompt("Enter the max number "));

// RandomNum4 = Math.floor(Math.random() * max-min) + min;
// console.log(RandomNum4);