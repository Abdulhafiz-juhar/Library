const myLibrary = [];

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

function showBooksInLibrary() {
  for (bookNumber in myLibrary) {
    console.log(myLibrary[bookNumber].info());
  }
}

showBooksInLibrary();
