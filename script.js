const addBookButton = document.getElementById("addBookButton");
const bookForm = document.getElementById("bookForm");

addBookButton.addEventListener("click", function () {
    if (bookForm.style.display === "none") {
        bookForm.style.display = "block";
    } else {
        bookForm.style.display = "none";
    }
});

const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;

    Book.prototype.getDetails = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages`;
    }
}

function addBookToLibrary(title, author, pages) {
     myLibrary.push(new Book(title, author, pages));
}

addBookToLibrary("1984", "George Orwell", "328");
myLibrary.forEach(book => console.log(book.getDetails()));


