let myLibrary = [];

// Book constructor
function Book (title, author, numPages, isRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.isRead = function() {
        if (isRead === true) {
            return "read this book";
        } else {
            return "not read yet";
        }
    };
    this.info = function() {
        return this.title + ", " + this.author + ", " + this.numPages + " pages, " + this.isRead();
    };

}

// Create and add temp data
let Book1 = new Book('Atomic Habits', 'James Clear', '300', false);
let Book2 = new Book('The Millionaire FastLane', 'MJ Demarco', '234', false);
let Book3 = new Book('Unscripted', 'MJ Demarco', '132', false);
let Book4 = new Book('Mind and Memory Training', 'Ernest E. Wood', '179', false);

myLibrary.push(Book1, Book2, Book3, Book4);


// Library Functions
function addBookToLibrary(book, library) {

}

function removeBookFromLibrary(book, library) {

}

// Display a list of books in a table
function listBooks(library) {
    let bookListData = document.getElementById('bookListData');
    for (i = 0; i <= library.length; i++) {
        bookDataElRow = document.createElement('tr');
        bookDataElData = document.createElement('td');
        bookDataElRow.innerHTML = library[i].title + " - " + library[i].author;
        bookListData.appendChild(bookDataElRow);
    }
}

function readBook() {

}


listBooks(myLibrary);

