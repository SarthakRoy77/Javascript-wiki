// Project1 !!!!!!!
// Counter Program


let number = 0;

decreaseBtn = document.getElementById('decreaseBtn').onclick = function() {
    document.getElementById('countLabel').textContent = ` ${number -= 1} `;
    console.log("Number subtracted");
}
increaseBtn = document.getElementById('increaseBtn').onclick = function() {
    document.getElementById('countLabel').textContent = `${number += 1}`;
    console.log("Number added");
}
resetBtn = document.getElementById('resetBtn').onclick = function() {
    document.getElementById('countLabel').textContent = `${number = 0}`;
    console.log("Number reset");
}
