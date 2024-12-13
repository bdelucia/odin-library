const myLibrary = [];
const cellsContainer = document.querySelector('.cells');
const addBookBtn = document.querySelector('.addBook');

function Book(name, author) {
  this.name = name;
  this.author = author;
}

function addBookToLibrary(name, author) {
    const book = new Book(name, author);
    myLibrary.push(book);
}

function displayBooks(){
  for(book in myLibrary){
    const newCell = document.createElement('div');
    newCell.className = 'cell';
    newCell.textContent = book.name + " by " + book.author;
    cellsContainer.appendChild(newCell);
  }
}

