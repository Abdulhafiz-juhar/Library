const myLibrary = [];
const main = document.querySelector(".main");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? "already read" : "not read yet"
    }`;
  };
}

function addBookToLibrary(title, author, pages, read) {
  return myLibrary.push(new Book(title, author, pages, read));
}

addBookToLibrary("the mobit", "mr.joske", 333, true);
addBookToLibrary("the susoek", "mr.jorl", 323, false);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("the susoek3", "mr.jorl", 323, false);
addBookToLibrary("The Hobbit2", "J.R.R. Tolkien", 295, false);

function showBooksInLibrary() {
  for (bookNumber in myLibrary) {
    let book = document.createElement("div");
    book.classList.add("book");
    let book_image = document.createElement("div");
    book_image.classList.add("book_image");
    let book_image_file = document.createElement("img");
    book_image_file.classList.add("book_image_file");
    book_image_file.src = "icons/book.svg";
    let book_details = document.createElement("div");
    book_details.classList.add("book_details");
    let book_title = document.createElement("div");
    book_title.classList.add("book_title");
    let book_author = document.createElement("div");
    book_author.classList.add("book_author");
    let book_page_status = document.createElement("div");
    book_page_status.classList.add("book_page_status");
    let book_page = document.createElement("div");
    book_page.classList.add("book_page");
    let book_status = document.createElement("div");
    book_status.classList.add("book_status");

    book_title.textContent = myLibrary[bookNumber].title;
    book_author.textContent = myLibrary[bookNumber].author;
    book_page.textContent = `${myLibrary[bookNumber].pages} pages`;
    book_status.textContent = myLibrary[bookNumber].read
      ? "already read"
      : "not read yet";

    book_details.appendChild(book_title);
    book_details.appendChild(book_author);
    book_page_status.appendChild(book_page);
    book_page_status.appendChild(book_status);
    book_details.appendChild(book_page_status);
    book_image.appendChild(book_image_file);

    book.appendChild(book_image);
    book.appendChild(book_details);

    main.appendChild(book);
  }
}

showBooksInLibrary();

const add_book_dialog = document.querySelector(".add_book_dialog");
const newBook = document.querySelector(".newBook");

const bookTitle = document.querySelector("#bookTitle");
const bookAuthor = document.querySelector("#bookAuthor");
const bookPages = document.querySelector("#bookPages");

newBook.addEventListener("click", () => {
  add_book_dialog.showModal();
});
