const myLibrary = [];
const cellsContainer = document.querySelector('.cells');
const addBookBtn = document.querySelector('.addBook');
const modal = document.getElementById('formModal');
const closeBtn = document.getElementById('closeFormBtn');
const form = document.getElementById('exampleForm');

function Book(name, author) {
  this.name = name;
  this.author = author;
}

function addBookToLibrary(name, author) {
    const book = new Book(name, author);
    myLibrary.push(book);
    const newCell = document.createElement('div');
    newCell.className = 'cell';
    newCell.textContent = book.name + " by " + book.author;
    cellsContainer.appendChild(newCell);
}

function displayBooks(){
  myLibrary.forEach(book => {
    const newCell = document.createElement('div');
    newCell.className = 'cell';
    newCell.textContent = book.name + " by " + book.author;
    cellsContainer.appendChild(newCell);
  })
}

addBookBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const bookAuthor = document.querySelector('input#author[name="author"]');
  const bookTitle = document.querySelector('input#title[name="title"]');

  addBookToLibrary(bookTitle.value, bookAuthor.value);
  alert('Book added!');
  modal.style.display = 'none;'
})