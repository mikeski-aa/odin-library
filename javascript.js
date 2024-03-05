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
//testing the values displayed with some pre-determined values, set up default cards to show
const book1 = new Book('The Hobbit', 'J. R. R. Tolkien', 295, true);
    addBook(book1);
    newCard(book1);
const book2 = new Book('The Great Gatsby', 'F Scott Fitzgerald', 194, false);
    addBook(book2);
    newCard(book2);
const book3 = new Book('1984', 'George Orwell', 267, false);
    addBook(book3);
    newCard(book3);
const book4 = new Book('Lolita', 'Vladimir Nabokov', 317, false);
    addBook(book4);
    newCard(book4);
const book5 = new Book('One Hundred Years of Solitude', 'Gabriel Garcia Marquez', 422, false);
    addBook(book5);
    newCard(book5);


    
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

//new book constructor
        let readVal = false;
        if (i === 1) {readVal = true};

        let book = new Book(bkTitle.value, bkAuth.value, bkLngth.value, readVal);
        addBook(book);
        newCard(myLibrary[myLibrary.length - 1]);

        console.log(bkTitle.value);
        console.log(bkAuth.value);
        console.log(bkLngth.value);
        console.log(i);
        rstVals(bkTitle, bkAuth, bkLngth);
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

//toggle form visibility
addNewBookBtn.addEventListener('click', function(){
    let inputForm = document.querySelector('form');
    if (inputForm.style.visibility === "visible") {
    inputForm.style.visibility = "hidden"
    inputForm.style.height = "0";
    addNewBookBtn.textContent = 'Click me to show form';
} else {
    inputForm.style.visibility = "visible"
    inputForm.style.height = "100%";
    addNewBookBtn.textContent = 'Click me to hide form';
}
})
// testing();
//test delete button functionality
// function testing() {
container.addEventListener('click', e => {
    console.log(e.target.parentNode);
    if (e.target.textContent === 'Delete') {
        alert(`You just clicked delete! ${e.target.parentNode.textContent}`);
        container.removeChild(e.target.parentNode);
    }
})

