// import data.array to innerHTML
import product from "./data/product.js";
console.log(product);

const productContainer = document.querySelector(".container");
console.log(productContainer);

for (let i = 0; i < product.length; i++){
    productContainer.innerHTML += `
        <div class="products">
            <h1>Item: ${product[i].item}</h1>
            <h2>Price: ${product[i].price}</h2>
            <p>Location: ${product[i].location}</p>
        </div>
    `;
}


//dropdown menu - onchange
const dropdown = document.querySelector("#circles");
const circlesContainer = document.querySelector(".circles-container");
console.log(dropdown);
console.log(circlesContainer);

dropdown.onchange = function (){
    circlesContainer.innerHTML = "";
    for (let x = 1; x <= this.value; x++){
        circlesContainer.innerHTML += `
            <div class="circle">${x}</div>
        `
    }
}

//sign up form - onkeyup
const firstName = document.querySelector("#first-name");
const firstNameError = document.querySelector("#first-name-error");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#password-error");
const signUp = document.querySelector("#signup-btn");

//first name
firstName.onkeyup = function (event){
    let firstNameInputValue = event.target.value;
    if (firstNameInputValue.length >= 5){
        signUp.disabled = false;
        firstNameError.innerHTML = "Great, your name is good";
        firstNameError.classList = "success";
    } else {
        signUp.disabled = true;
        firstNameError.innerHTML = "Whoops, your name is to short";
        firstNameError.classList = "error";
    }
}

//password
password.onkeyup = function (event){
    let passwordValue = event.target.value;
    let passwordTotalChar = passwordValue.length;
    if ((passwordValue === "123456") || (passwordValue === "password")){
        passwordError.innerHTML = "Not valid password";
    } else if (passwordTotalChar <= 5){
        passwordError.innerHTML = "Your password is week";
    } else if (passwordTotalChar <= 7){
        passwordError.innerHTML = "Your password is average";
    } else if (passwordValue <= 9){
        passwordError.innerHTML = "Your password is good";
    } else if (passwordTotalChar <= 20){
        passwordError.innerHTML = "Your password is GODLY";
    } else {
        passwordError.innerHTML = "Please enter a password";
    }
}

