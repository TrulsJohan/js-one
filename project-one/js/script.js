//variable functions
const showPetName = function (name) {
    console.log("the pet name: " + name);
}

showPetName("Hesh");


//fat arrow functions - must be a variable function
const showPetNameTwo = (name) => {
    console.log("the pet name: " + name);
}

showPetNameTwo("Truls");

//different way of writing "fat arrow function"
const showPetNameThree = (name) => console.log("the pet name: " + name);



//task 1. - adding two numbers
const sum = (num1, num2) => {
    console.log(num1 + num2);
}

sum(100, 200);

//CRUD - Create, Read, Update, Delete - client face, server, data/database
//CRUD - get, post, delete, edit, create

//JSON - data passing around, key´s in strings

