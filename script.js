const myLibrary = [];

function Book(name, author) {
  this.name = name;
  this.author = author;
}

function addBookToLibrary(name, author) {
    const book = new Book(name, author);
    myLibrary.push(book);
}
console.log(myLibrary);
addBookToLibrary('Project Hail Mary', 'Andy Weir')
console.log(myLibrary);