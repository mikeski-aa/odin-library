const myLibrary = [];

function Book(title, author, pagenum, read) {
    this.title = title,
    this.author = author,
    this.pagenum = pagenum,
    this.read = Boolean(read);
    this.info = function(){
        console.log(`Book title is ${this.title}, author is ${this.author}, length is ${this.pagenum}, is read ${read}  `)
    };
}

const book1 = new Book('TEST', 'JOHN', 15, false);
const book2 = new Book('best', 'jack', 24, true);

function addBook(newBook){
    myLibrary.push(newBook);
    console.log(myLibrary);
}

