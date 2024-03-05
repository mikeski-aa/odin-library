const myLibrary = [];
const container = document.querySelector('.mainContent');
const submitBtn = document.querySelector('#submitForm')
const addNewBookBtn = document.querySelector('.newBookForm')

// constructor function for each new book
function Book(title, author, pagenum, read) {
    this.title = title,
    this.author = author,
    this.pagenum = pagenum,
    this.read = Boolean(read);
    this.info = function(){
        console.log(`Book title is ${this.title}, author is ${this.author}, length is ${this.pagenum}, is read ${read}  `)
    };
}
//testing the values displayed with some pre-determined values
const book1 = new Book('The Hobbit', 'JOHN', 15, false);
const book2 = new Book('best', 'jack', 24, true);

//function to add new book into the library
function addBook(newBook){
    myLibrary.push(newBook);
    console.log(myLibrary);
}

//function to create a new card
function newCard(book){
    let newCard = document.createElement('div');
    newCard.classList.add('card');

// create new line for each part of the book object values including placeholder buttons
    let newPone = document.createElement('p');
    newPone.textContent = `Title: ${book.title}`;

    let newPtwo = document.createElement('p');
    newPtwo.textContent = `Author: ${book.author}`;

    let newPthree = document.createElement('p');
    newPthree.textContent = `Length: ${book.pagenum}`;

    let newPfour = document.createElement('p');
    newPfour.textContent = `Read: ${book.read}`;

    let delButton = document.createElement('button');
    delButton.classList.add('del');
    delButton.textContent = 'Delete'

    let readButton = document.createElement('button');
    readButton.classList.add('readToggle');
    readButton.textContent = 'Read?'

    newCard.appendChild(newPone);
    newCard.appendChild(newPtwo);
    newCard.appendChild(newPthree);
    newCard.appendChild(newPfour);
    newCard.appendChild(delButton);
    newCard.appendChild(readButton);

    container.appendChild(newCard);   
}

/////prevent submit from submitting
submitBtn.addEventListener('click', preventClk, false);

function preventClk(event) {
    console.log('BAD!')
    event.preventDefault();
}
