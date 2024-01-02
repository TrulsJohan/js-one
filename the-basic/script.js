// variables

var myName = "Line";
console.log(myName);

let age = 31;
console.log(age)

const BRAND = "BMW";
console.log(BRAND);

// data types

let greetings = "hello world!"
console.log(typeof greetings);

let isHappy = true;
console.log(isHappy);
console.log(typeof isHappy);

let someVar;
console.log(typeof someVar);

let emptyValue = null;
console.log(typeof emptyValue);

// object

let person = {
    firstName: "truls",
    lastName: "lamoy",
    age: 21
};
console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

let car = {
    carBrand: "Volvo",
    modelAge: 1992,
    condition: "New",
    price: 10000
};
console.log(car);
console.log(`My car is a ${car.carBrand} and the price is ${car.price}`)

//Array

let colors = ["Red", "Green", "Blue"];

let random = [
    55656,
    {name: "truls", age:"21"},
    ["boy","girl", "whatever"]
];
console.log(random[0]);
console.log(random[1]);

// type conversion

let year = "1992";
let convertedYear = parseInt(year);
console.log(convertedYear);

let num = 123;
console.log(num.toString());

let convertedNumber = num.toString();
console.log(convertedNumber);

// task one

var city = "Oslo";
console.log(city);

let myAge = 21;
console.log(myAge);

const birtYear = 2002;
console.log(birtYear);

// task two

let greeting = "hello world!"
console.log(greeting);

let quantity = 304;
console.log(quantity);

let isJavascriptFun = true;
console.log(isJavascriptFun);

let thisIsUndefined;
console.log(thisIsUndefined);

let emptyValue2 = null;
console.log(emptyValue2);

console.log(typeof emptyValue2,typeof quantity,typeof thisIsUndefined,);

// task three

let numString = "25";
let convertedNumString = parseInt(numString);
console.log(convertedNumString);

let num2 = 50;
console.log(num2);
let convertedNum2 = num.toString();
console.log(convertedNum2);




