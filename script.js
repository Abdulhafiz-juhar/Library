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

function showAddedBook(
  bookTitleValue,
  bookAuthorValue,
  bookPagesValue,
  bookReadValue
) {
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

  book_title.textContent = myLibrary[myLibrary.length - 1].title;
  book_author.textContent = myLibrary[myLibrary.length - 1].author;
  book_page.textContent = `${myLibrary[myLibrary.length - 1].pages} pages`;
  book_status.textContent = myLibrary[myLibrary.length - 1].read
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

let bookTitleValue, bookAuthorValue, bookPagesValue, bookReadValue;
const add_book_dialog = document.querySelector(".add_book_dialog");
const newBook = document.querySelector(".newBook");

const bookTitle = document.querySelector("#bookTitle");
const bookAuthor = document.querySelector("#bookAuthor");
const bookPages = document.querySelector("#bookPages");

const addBook = document.querySelector(".addBook");
const cancelBook = document.querySelector(".cancelBook");
const newBookArray = [];

newBook.addEventListener("click", () => {
  add_book_dialog.showModal();
});

bookTitle.addEventListener("input", (e) => {
  bookTitleValue = e.target.value;
});

bookAuthor.addEventListener("input", (e) => {
  bookAuthorValue = e.target.value;
});

bookPages.addEventListener("input", (e) => {
  bookPagesValue = e.target.value;
});

addBook.addEventListener("click", (e) => {
  e.preventDefault();
  const bookRead = document.querySelector('input[name="readStatus"]:checked');
  bookReadValue = bookRead.value;

  console.log(bookTitleValue, bookAuthorValue, bookPagesValue, bookReadValue);
  if (bookTitleValue && bookAuthorValue && bookPagesValue && bookReadValue) {
    addBookToLibrary(
      bookTitleValue,
      bookAuthorValue,
      bookPagesValue,
      bookReadValue === "true" ? true : false
    );
    showAddedBook(
      myLibrary[myLibrary.length - 1].title,
      myLibrary[myLibrary.length - 1].author,
      myLibrary[myLibrary.length - 1].pages,
      myLibrary[myLibrary.length - 1].read
    );
  }
});

cancelBook.addEventListener("click", () => {
  add_book_dialog.close();
});
