let user = {}
user.name = "Jonas";
user.surname = "The Great";
user.name = "Helene";

delete user.name;
console.log(user);

function isEmpty (obj){
    for (let key in obj){
        return false
    }
    return true;
};

const isMyObjectEmpty = isEmpty({});
console.log("isMyObjectEmpty", isMyObjectEmpty);

const arrayNumbers = [1, 2, 31, 24, -64, 5, 3, 555, 79, -4, 21, 33, 89, -90];
arrayNumbers.sort (function (a, b){
    return a-b
});

console.log(arrayNumbers);

