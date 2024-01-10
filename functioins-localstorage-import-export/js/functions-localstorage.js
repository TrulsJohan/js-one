// console.log -- console.dir -- console.info -- console.error

// "H" == "h", == for comparing

// conditions
// if () {}

// Switch case

// Objects
// let car = {
//     color: "red",
//     model: 1994
// };

// for loop -- starting point, condition, increment
// for (let i = 0; i < 11; i++) {
//     console.log(i);
// }

// array -- storage of different things like objects
// let myStorage = [
//     "string",
//     78495873,
//     {
//         object: "here"
//     }
// ];
// console.log(myStorage.length);
// console.log(myStorage[1]);

// find last item in the array
// const lastItemInArray = myStorage.length - 1;
// console.log("last item in array: ", lastItemInArray);

// loop over an array
// for (let i = 0; < myStorage.length; i++) {
//        console.log(myStorage[i])
// };

// concatenation
// let name = "Anniken";
// let secondName = "Hesh";
// let  thirdName = "Truls";
// const myParagraph = `Hello ${name}, and hello ${secondName}`;

// // functions -- code and actions that can be reused
// function logWord (name){
//     if (name !== undefined){
//         console.log(`hello ${name} sir`);
//     }
//     else {
//         console.log("Sorry ;(")
//     }
// }
// logWord("truls");

let news = [
    {
        headline: "Watch Hesh landing on the moon",
        summary: "He landed with a car"
    },
    {
        headline: "Line became famous for her style",
        summary: "She has uses a lot of color, especially pink"
    },
    {
        headline: "Truls stop using snus",
        summary: "He stopped using it within a day"
    }
];
console.log(news);

let html = "";

function logNews (){
    let fakeNews = document.querySelector(".container");
    console.log(fakeNews);

    let html = "";

    const totalNumberOfNews = news.length;
    for (let i = 0; i < totalNumberOfNews; i++) {
        html += `
        <div>
            <h1>${news[i].headline}</h1>
            <p>${news[i].summary}</p>
        <div/>
    `;
        fakeNews.innerHTML = html;
    };
}

logNews()



