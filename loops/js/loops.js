//loop "for" is for repeating

//(initialization; condition; increment)
for (let i = 0; i < 5; i++) {
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// loop with an array
const cars = ["Tesla", "BMW", "Volvo", "Volkswagen"];
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(cars.length);
const totalNumberOfCars = cars.length;
for (let i = 0; i <= totalNumberOfCars; i++) {
    console.log(cars[i])
}

const fruits = ["Apple", "Banana", "Cherry"];
const totalNumberOfFruits = fruits.length;
for (let i = 0; i <= totalNumberOfFruits; i++) {
    console.log(fruits[i])
}

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

// get last item in array
console.log(fruits[2]);
console.log(fruits.length - 1);
console.log(fruits[fruits.length - 1]);



