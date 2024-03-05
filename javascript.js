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

//can this be shortened?? V UGLY!

    newCard.appendChild(newPone);
    newCard.appendChild(newPtwo);
    newCard.appendChild(newPthree);
    newCard.appendChild(newPfour);
    newCard.appendChild(delButton);
    newCard.appendChild(readButton);

    container.appendChild(newCard);   
}

//toggle checker for the read value
let i = 0;
let bkRead = document.querySelector('#choiceOne');
bkRead.addEventListener('click', function() { 
    if (i===0){
        console.log('Toggle On!')
        return i = 1;
    } else {
        console.log('Toggle Off!');
        return i = 0;
    }
    })

/////submit form logic
submitBtn.addEventListener('click', createNewBook);

function createNewBook(event) {
    console.log('BAD!');
    
    let bkTitle = document.querySelector('#title');
    let bkAuth = document.querySelector('#author');
    let bkLngth = document.querySelector('#bLength');
    
    

//if input fields are not empty, prevent default button behaviour and submit the values, afterwards reset the values

    if (bkTitle.value === "" || bkAuth.value === "" || bkLngth.value === "") {
        return;
    } else {
        event.preventDefault();
        console.log(bkTitle.value);
        console.log(bkAuth.value);
        console.log(bkLngth.value);
        console.log(i);
        rstVals(bkTitle, bkAuth, bkLngth, bkRead);
    }
    
}

//reset values function
function rstVals(bkTitle, bkAuth, bkLngth){
    bkTitle.value = "";
    bkAuth.value = "";
    bkLngth.value = "";
    document.querySelector('#choiceOne').checked = false;
    i = 0;
}
