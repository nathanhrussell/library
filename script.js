const addBookButton = document.getElementById("addBookButton");
const bookForm = document.getElementById("bookForm");
const addToLibraryButton = document.getElementById("addToLibraryButton");

bookForm.style.display = "none";

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
     displayBooks();
}

addToLibraryButton.addEventListener("click", function () {
    const bookValue = document.getElementById("name").value;
    const authorValue = document.getElementById("author").value;
    const pagesValue = document.getElementById("pages").value;
    addBookToLibrary(bookValue, authorValue, pagesValue);
});

function displayBooks() {
    const bookLibrary = document.getElementById("bookLibrary");
    bookLibrary.innerHTML = "";

    myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.innerHTML = `
            <strong>${book.title}</strong> by ${book.author}, ${book.pages} pages `;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");

        removeButton.addEventListener("click", function () {
            removeBook(index);
        });

        bookDiv.appendChild(removeButton);
        bookLibrary.appendChild(bookDiv);
    });
    }

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}