const myLibrary = []; 

function Book(title, author, pages, read) { 
 this.title = title;
 this.author = author;
 this.pages = pages;
 this.read = read;
}

Book.prototype.input = function(addBookToLibrary) {
  Book.hasOwnProperty('valueOf');
  Object.getPrototypeOf(Book.prototype) ===       Object.prototype;
  console.log("Input ${this.title}!");
};

function addBookToLibrary(dialog) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}


// const Book1 = new Book("The Shining", "Stephen King", 447, "read");

// const Book2 = new Book("Where the Crawdads Sing", "Delia Owens", 368, "read");

 
// console.log(Book1.author);
// console.log(Book1.title);
// console.log(Book1.pages);
// console.log(Book1.read);

// console.log(Book2.author);
// console.log(Book2.title);
// console.log(Book2.pages);
// console.log(Book2.read);

let myLibrary = [];

function Book(name, director, pages, read) {
  this.name = name;
  this.director = director;
  this.pages = pages;
  this.read = read;
}

const addBookToLibrary = () => {
  let notification = alert("Add your book details");
  let name = String(prompt("Add your book name?"));
  let director = String(prompt("Add the author?"));

  let pages = parseInt(prompt("Add the pages?"));
  if (Number.isNaN(pages)) {
    return 0;
  }
  let read = String(prompt("What is your reading status?"));
  let does = new Book(name, director, pages, read);
  myLibrary.push(does);
};

const btn = document.getElementById("dataButton");
btn.addEventListener("click", addBookToLibrary);

const myFunction = () => {
  let myArray = Object.values(myLibrary);

  let table = document.getElementById("tableData");

  let row = table.insertRow(0);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);

  let i = 0;

  myLibrary.forEach((name, director, pages, read) => {
    const nice = myLibrary[i].name;
    const nice1 = myLibrary[i].director;
    const nice2 = myLibrary[i].pages;
    const nice3 = myLibrary[i].read;

    i++;

    cell1.innerHTML = nice;
    cell2.innerHTML = nice1;
    cell3.innerHTML = nice2;
    cell4.innerHTML = nice3;
  });
};

const stn = document.getElementById("showButton");
stn.addEventListener("click", myFunction);

const myDeleteFunction = () => {
  document.getElementById("tableData").deleteRow(0);
};




   
  




