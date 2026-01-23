const minNum = 1;
const maxNum = 100;
const randomNum = Math.trunc(Math.random() * (maxNum - minNum + 1));

let numberAttempts = 0;
let guess;
let running = true;

console.log(randomNum)

while(running){

    if(numberAttempts <= 10){
        numberAttempts += 1
        guess = Number(window.prompt(`Guess a number between ${minNum} - ${maxNum}`));
        if(isNaN(guess)){
            document.getElementById('gameResultPara').textContent = "Please guess a NUMBER"
        }
        if(guess === randomNum){
            document.getElementById('gameResultPara').textContent = "Congratulations! You guessed the number"
        }

    }
    else{
        running = false;
        document.getElementById('gameResultPara').textContent = "The no. of attempts has reached!" +
            " Sorry! You lost the Game" + " The number was " + randomNum
    }
}
