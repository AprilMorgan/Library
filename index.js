const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

function myDeleteFunction() {
  document.getElementById("myTable").deleteRow(1);
}

function myAddFunction() {
  document.getElementById("myTable").addRow(0);
  newCell = newRow.insertCell();
  
}

const myAddFunction () {
  title = prompt("Enter Book Title")
  author = prompt("What is author's name?");
  pages = prompt("How many pages?");
  read = prompt("Have you read this book?");
}





