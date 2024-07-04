const myLibrary = [];

function Book() {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

function myDeleteFunction() {
  document.getElementById("myTable").deleteRow(1); 
}

const title = document.getElementById("title");
title.innerHTML = prompt("Enter Book Title");

const author = document.getElementById("author");
title.innerHTML = prompt("What is author's name?");

const pages = document.getElementById("author");
pages.innerHTML = prompt("How many pages?");


