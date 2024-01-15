// // setTimeout - function executed after X amount of time
//
// //example 1.
// setTimeout(function (){
//     console.log("Hello");
// }, 5000);
//
//
// //example 2.
// setTimeout(logHello, 5000);
//
// function logHello(){
//     console.log("Hello two");
// }
//
//
// //example 3.
//
// //select element with class .loader
// const loading = document.querySelector(".loader");
// console.log("loader element", loading);
//
// //use setTimeout to change html
// setTimeout(function (){
//     loading.innerHTML = "Finished loading...";
// }, 5000);
//
//
// //setTimeout task.1
// const offer = document.querySelector(".ad");
// console.log("offer", offer);
//
// setTimeout(function (){
//     offer.style.display = "block";
// }, 5000);
//
//
// //setInterval - repeat a function after X amount of time until cleared
// let count = 0;
// const intervalId = setInterval(function (){
//     console.log("Hello three");
//     count++;
//     if (count === 5){
//         clearInterval(intervalId);
//     }
// }, 1000);


const classContainer = document.querySelector(".container");

let countList = 0;
const ListId = setInterval(function () {
    countList++;
    classContainer.innerHTML += `<li>${countList}</li>`
    if (countList === 5) {
        clearInterval(ListId);
    }
}, 1000);

