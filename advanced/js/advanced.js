//sorting with arrays and objects
const people = [
    {
        name: "Truls",
        age: 21,
        eyeColor: "blue"
    },
    {
        name: "Thomas",
        age: 30,
        eyeColor: "brown"
    },
    {
        name: "Henriette",
        age: 27,
        eyeColor: "green"
    }];

people.sort((a, b) => a.age - b.age);
console.log(people);


//making innerHTML using the same array
const container = document.querySelector(".container");
console.log(container);

let html = "";

const totalPeople = people.length;

for (let i = 0; i < totalPeople; i++) {
    html += `<p>title: ${people[i].name}</p>
             <p>age: ${people[i].age}</p>
             <p>eye color: ${people[i].eyeColor}</p>
    `
    container.innerHTML = html;
};

