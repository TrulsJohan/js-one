const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        available: true
    },
    {
        title: "1984",
        author: "George Orwell",
        available: false
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        available: true
    }
];


const bookContainer = document.querySelector(".book-container");
console.log(bookContainer);

let html = "";

const totalNumberOfBooks = books.length;

for (let i = 0; i <totalNumberOfBooks; i++) {
    html += `
        <div>
            <p class="book">title: ${books[i].title}</p>
            <p class="book">author: ${books[i].author}</p>
            <p class="book">available: ${books[i].available ? "Yes its available" : "Its not available"}</p>
        <div/>
    `
    bookContainer.innerHTML = html;
};

