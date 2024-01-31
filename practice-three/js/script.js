function doSomething(someParam) {
    console.log("do something");
    console.log("do something");
    console.log("do something");

    someParam();

    console.log("do something");
    console.log("do something");
    console.log("do something");
}

doSomething  (function (){
    console.log("hello world");
});






// function doSomethingWithData(someData) {
//     console.log("do something" + someData)
// }
//
// //Void with some data
// doSomethingWithData("Some sweet string")
//
//
// function doSomethingThatReturns() {
//     return "This is easy"
// }
//
// let result = doSomethingThatReturns() + doSomethingThatReturns()
// console.log(result);
//
//
// function doSomethingThatReturnsSomething() {
//     return "This is easy";
// }
//
// let result2 = doSomethingThatReturnsSomething("alright");
// console.log(result2);