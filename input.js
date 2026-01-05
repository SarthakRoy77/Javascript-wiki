// How to accept user input 

// 1. EASY WAY: window prompt 
// 2. PROFFESIONAL WAY: HTML Textbox

// Window Prompt
// let username;

// username = window.prompt("What's Your Username?");
// console.log(username);

 document.getElementById('myButton').onclick = function(){
    username = document.getElementById('MyText').value;
    document.getElementById("myH1").textContent =`Hello ${username}`
 }


//.checked = property that determines the checkd state of an
      // HTML Checkbox or radio button element
      
document.addEventListener("DOMContentLoaded", () => { //IGNORE THIS LINE
    const myCheckBox = document.getElementById("myCheckBox");
    const masterCardBtn = document.getElementById("masterCardBtn");
    const payPalBtn = document.getElementById("payPalBtn");
    const visaBtn = document.getElementById("visaBtn");
    const subResult = document.getElementById("subResult");
    const paymentResult = document.getElementById("paymentResult");
    const mySubmit = document.getElementById("mySubmit");

    mySubmit.onclick = () => {
        subResult.textContent = myCheckBox.checked
            ? "You are subscribed!"
            : "You are NOT subscribed";

        if (visaBtn.checked) {
            paymentResult.textContent = "You are paying with Visa";
        } else if (masterCardBtn.checked) {
            paymentResult.textContent = "You are paying with MasterCard";
        } else if (payPalBtn.checked) {
            paymentResult.textContent = "You are paying with PayPal";
        } else {
            paymentResult.textContent = "Select a payment method";
        }
    };
});
