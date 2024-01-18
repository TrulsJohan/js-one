// variable function
const someFunction = function (){
    console.log("Hello I am Hesh");
}

// Normal function - Can be called/declared before or after
function saySomethingFunction (){
    console.log("Hello Truls");
}

//addEventListener - detecting onClick and other events
// select button
const button = document.querySelector(".btn");
console.log("btn: ", button);

//normal function
button.addEventListener("click", function (){
    console.log("you clicked me");
});

// anonymous function - function with no variable declared
button.addEventListener("click", handleClick);
function handleClick (){
    console.log("you clicked me");
}



//onclick function
//way 1.
button.onclick = function (){
    console.log("omg you clicked me");
}

//way 2.
button.onclick = function (event){
    console.log(event.target.value);
    console.log(this.value); //"this" targets the variable
}



//key press - press and release - OnKeyDown are most used
//onKeyDown
const myFirstNameInput = document.querySelector("#firstName");
console.log(myFirstNameInput);

const handleKeyPress = function (event){
    console.log("key is pressed");
    console.log(this.value);
    console.log(event.target.value);
}

myFirstNameInput.addEventListener("keydown: ", handleKeyPress);





//detecting hover
//select hover button
const hoverButton = document.querySelector(".pet-btn");

const handleMouseOver = function (event){
    console.log("event.target.value.animal", event.target.value);
    event.target.style.backgroundColor = "red";
}

hoverButton.addEventListener("mouseover", handleMouseOver);

const handleMouseOut = function (event){
    event.target.style.backgroundColor = "white";
}
onmouseout.addEventListener("onmouseout", handleMouseOut);



