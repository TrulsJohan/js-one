// "let" you can redefine.
let name = "truls";

name = "erica";
console.log(name);

name = "kenneth";
console.log(name);

// "const" you can not redefine, important should be uppercase
const NAME_UPPERCASE = "truls";

// "arrays" are like storage containers, use const
           //     0          1         2
const fruits = ["apple", "oranges", "banana"];
console.log(fruits.length);

// adding more fruits to the end "push" of the array
fruits.push("mango");
console.log(fruits);
// adding more fruits to the beginning "unshift" of the array
fruits.unshift("grapes");
console.log(fruits);

// remove the last item in the array
fruits.pop();
console.log(fruits);
//remove the first item in the array
fruits.shift();
console.log(fruits);

// sorting arrays
const numbers = [3, 4, 45, 93, 6, 308, 1];
numbers.sort();
console.log(numbers);

// positions  012
let animal = "dog";
console.log(animal.length);

// finding the value og an index
          //    0         1           2
const cars = ["BMW", "volkswagen", "toyota"];
console.log(cars.indexOf("volkswagen"));

// making an object
const user = {
    name: "truls",
    age: 21,
    job: "software engineer",
    wealth: 30000
}
console.log(user);
console.log(user.name);

const someText = "Hello my name is " + user.name;
console.log(someText);
// right methode
const someTextTwo = `Hello my name is ${user.name} and I am ${user.age}.`;
console.log("someTextTwo: ",someTextTwo);

//objects within an array
const books = [
    {
        title: "Lord of the Rings",
        author: "Hesham",
        pages: 400
    },
    {
        title: "My car",
        author: "Kevin Heart",
        pages: 250
    },
    {
        title: "Thousand nights",
        author: "Donald Trump",
        pages: 1
    }
];

console.log("first book: ", books[0]);
console.log("second book: ", books[1]);
console.log("third book: ", books[2]);

 // how to locate specific items in array with .find / .filter
const searchBook = books.find(function (book) {
    return book.title === "My car";
});
console.log("searchBook: ", searchBook);

// function is a set of actions that run when called
function doorRing(withCamera) {
    console.log("i will go open the door");
}
doorRing("Monde photo");

// adding two numbers
function addTwoNumbers (num1, num2){
    return num1 + num2;
}
const sum = addTwoNumbers(10, 20);
console.log("sum: ", sum);
