let myLibrary = [];
const container = document.querySelector('.mainContent');
const submitBtn = document.querySelector('#submitForm')
const addNewBookBtn = document.querySelector('.newBookForm')
const resetBtn = document.querySelector('#resetForm')
let bkTitle = document.querySelector('#title');
let bkAuth = document.querySelector('#author');
let bkLngth = document.querySelector('#bLength');

let j = 0;




// constructor function for each new book
function Book(title, author, pagenum, read, j) {
    this.title = title,
    this.author = author,
    this.pagenum = pagenum,
    this.read = Boolean(read),
    this.id = j;
}
// testing the values displayed with some pre-determined values, set up default cards to show
const book1 = new Book('The Hobbit', 'J. R. R. Tolkien', 295, true, 0);
    addBook(book1);
    newCard(book1);
const book2 = new Book('The Great Gatsby', 'F Scott Fitzgerald', 194, false, 1);
    addBook(book2);
    newCard(book2);
const book3 = new Book('1984', 'George Orwell', 267, false, 2);
    addBook(book3);
    newCard(book3);
const book4 = new Book('Lolita', 'Vladimir Nabokov', 317, false, 3);
    addBook(book4);
    newCard(book4);
const book5 = new Book('One Hundred Years of Solitude', 'Gabriel Garcia Marquez', 422, false, 4);
    addBook(book5);
    newCard(book5);


    
// function to add new book into the library
function addBook(newBook){
    myLibrary.push(newBook);
  
}

// function to create a new card

function newCard(book){
    let newCard = document.createElement('div');
    newCard.classList.add(`card` + j);

// create new line for each part of the book object values including placeholder buttons
// very ugly solution for having 2 separate columns, which ultimately allows for two grid cols
// could probably be shortened with the use of a function 

    for (let x = 0; x < 1; x++)
    {let newPone = document.createElement('p');
    let newPtwo = document.createElement('p');
    let newPthree = document.createElement('p');
    let newPfour = document.createElement('p');
    newPone.textContent = `Title: `;
    newPtwo.textContent = `Author: `;
    newPthree.textContent = `Length: `;
    newPfour.textContent = `Read status: `;
    newPone.classList.add('boilerField');
    newPtwo.classList.add('boilerField');
    newPthree.classList.add('boilerField');
    newPfour.classList.add('boilerField');
    newCard.appendChild(newPone);
    newCard.appendChild(newPtwo);
    newCard.appendChild(newPthree);
    newCard.appendChild(newPfour);

}   for (let y = 0; y < 1; y++)
    {let newPone = document.createElement('p');
    let newPtwo = document.createElement('p');
    let newPthree = document.createElement('p');
    let newPfour = document.createElement('p' + j);
    newPone.textContent = `${book.title}`;
    newPtwo.textContent = `${book.author}`;
    newPthree.textContent = `${book.pagenum}`;
    if (book.read === true) {
        newPfour.textContent = 'I have read it!'
    } else {newPfour.textContent = `I have not read it!`}
    newPone.classList.add('infoField1');
    newPtwo.classList.add('infoField2');
    newPthree.classList.add('infoField3');
    newPfour.classList.add('boolVal');
    newCard.appendChild(newPone);
    newCard.appendChild(newPtwo);
    newCard.appendChild(newPthree);
    newCard.appendChild(newPfour);
} 

    let delButton = document.createElement('button');
    delButton.classList.add('del');
    delButton.textContent = 'Delete'

    let readButton = document.createElement('button');
    readButton.classList.add('readToggle');
    readButton.textContent = 'Toggle \'read\' status';

    newCard.appendChild(delButton);
    newCard.appendChild(readButton);

    container.appendChild(newCard);  
    return j += 1; 
}

// toggle checker for the read value
let i = 0;
let bkRead = document.querySelector('#choiceOne');
bkRead.addEventListener('click', function() { 
    if (i===0){
        return i = 1;
    } else {
        return i = 0;
    }
    })

// submit form logic

submitBtn.addEventListener('click', createNewBook);

// function which creates a new book in the myLibrary array

function createNewBook(event) {

// if input fields are not empty, prevent default button behaviour and submit the values, afterwards reset the values

    if (bkTitle.value === "" || bkAuth.value === "" || bkLngth.value === "") {
        return;
    } else {
        event.preventDefault();

// new book constructor

        let readVal = false;
        if (i === 1) {readVal = true};

        j = myLibrary.length;

        let book = new Book(bkTitle.value, bkAuth.value, bkLngth.value, readVal, j);
        addBook(book);
        newCard(myLibrary[myLibrary.length - 1]);
        rstVals(bkTitle, bkAuth, bkLngth);
        
    }
    
}

// reset values function
function rstVals(bkTitle, bkAuth, bkLngth){
    bkTitle.value = "";
    bkAuth.value = "";
    bkLngth.value = "";
    document.querySelector('#choiceOne').checked = false;
    i = 0;
}

// toggle form visibility
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

// test delete button functionality, delete specified item from array
container.addEventListener('click', e => {

    if (e.target.textContent === 'Delete'){

        let currcard = e.target.parentNode.classList.value;
        
// separate value to get the index of the card and array element we want to delete 
// - convert newcard[1] to number fron string

        let newcard = currcard.split('d');
        newcard[1] = +newcard[1]

// if check to see if the item we want to delete next is before or after the item we deleted first

        for (x of myLibrary) {
            if (x.id == newcard[1])
            {
                myLibrary = myLibrary.filter((x) => x.id !== newcard[1]);
                container.removeChild(e.target.parentNode);

// -j counter is here to maintain correct order for new object.id values which can be created by user
// when filling the new form

                j -= 1;
                return;
            }
        } 
    } else if (e.target.textContent === 'Toggle \'read\' status') {
  
        let currcard = e.target.parentNode.classList.value;
        

// separate value to get the index of the card and array element we want to delete 
// select the correct element (denoted by p + counter j when creating card elements) and changes that element value

        let newcard = currcard.split('d');
        let para = document.querySelector(`p${newcard[1]}`);
        newcard[1] = +newcard[1];

        for (x of myLibrary) {
            if (x.id == newcard[1]){
                if (x.read === false) {
                    para.textContent = 'I have read it!'
                    x.read = true;
                } else {
                    para.textContent = 'I have not read it!'
                    x.read = false;
                }
                return;
            }
        } 
    }
    

});

// this will reset all input fields to when clicked
resetBtn.addEventListener('click', () => {
    bkTitle.value = "";
    bkAuth.value = "";
    bkLngth.value = "";
    document.querySelector('#choiceOne').checked = false;
    i = 0;
})

