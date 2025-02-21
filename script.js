class Book {
    constructor(title, author, pages, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    }

    getDetails() {
        return `${this.title} by ${this.author}, ${this.pages} pages<span></span>`;
    }

    toggleReadStatus() {
        this.read = !this.read;
    }
}

class Library {
    constructor() {
        this.books = [];
        this.bookForm = document.getElementById("bookForm");
        this.bookLibrary = document.getElementById("bookLibrary");
        this.addBookButton = document.getElementById("addBookButton");
        this.addToLibraryButton = document.getElementById("addToLibraryButton");

        this.init();
    }

    init() {
        this.bookForm.style.display = "none";

        this.addBookButton.addEventListener("click", () => this.toggleForm());
        this.addToLibraryButton.addEventListener("click", () => this.addBookToLibrary());
    }

    toggleForm() {
        this.bookForm.style.display = this.bookForm.style.display === "none" ? "block" : "none";
    }

    addBook(title, author, pages, read = false) {
        this.books.push(new Book(title, author, pages, read));
        this.displayBooks();
    }

    addBookToLibrary() {
        const title = document.getElementById("name").value;
        const author = document.getElementById("author").value;
        const pages = document.getElementById("pages").value;

        if (title && author && pages) {
            this.addBook(title, author, pages);
        }
    }

    displayBooks() {
       this.bookLibrary.innerHTML = "";

       this.books.forEach((book, index) => {
            const bookDiv = document.createElement("div");
            bookDiv.classList.add("book");
            bookDiv.innerHTML = book.getDetails();

            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.classList.add("remove-btn");

            const readStatusButton = document.createElement("button");
            readStatusButton.textContent = book.read ? "Read" : "Unread";
            readStatusButton.classList.add("read-status-btn");

            removeButton.addEventListener("click", () => this.removeBook(index));
            readStatusButton.addEventListener("click", () => {
                book.toggleReadStatus();
                readStatusButton.textContent = book.read ? "Read" : "Unread"; 
            });

            bookDiv.appendChild(removeButton);
            bookDiv.appendChild(document.createElement("span"));
            bookDiv.appendChild(readStatusButton);
            this.bookLibrary.appendChild(bookDiv);
        });
    }

    removeBook(index) {
        this.books.splice(index, 1);
        this.displayBooks();
    }
}

const myLibrary = new Library();