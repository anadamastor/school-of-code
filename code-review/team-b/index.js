console.log("hi");
//Ticket 1a
document.getElementById(title); // NOT ASSIGNED VARIABLE
console.log(title);
// Ticket 1b
document.getElementsByClassName("content");
console.log(document.getElementsByClassName("content")); // CODE DUPLICATION
// Ticket 1c
document.querySelectorAll("li"); // getElementsByTagName
console.log(document.querySelectorAll("li"));
// Ticket 1d
document.querySelector(".highlight");
console.log(document.querySelector(".highlight"));
// Ticket 1e
const elements = document.querySelectorAll(".highlight"); 

document.querySelectorAll(".highlight"); // CODE DUPLICATION
console.log("hey", document.querySelectorAll(".highlight")); // OVERKILL
for (var i = 0; i < elements.length; i++) {
  console.log(elements[i].textContent);
}
//Ticket 2: Traversing the DOM
document.getElementById("itemList"); // NOT TRAVERSING THE DOM
console.log(document.getElementById("itemList"));
// Ticket 2b
const itemList = document.getElementById("itemList");
itemList.querySelector("li"); // NOT TRAVERSING THE DOM
console.log(itemList.querySelector("li"));
// Ticket 2c
const item = itemList.querySelector("li");
console.log(item.parentNode);

console.log(itemList.childNodes); // NOT NEEDED

console.log(itemList.children);
// Ticket 2d
console.log(itemList.firstElementChild);
console.log(itemList.lastElementChild);
// Ticket 2e
console.log(itemList.querySelector(".highlight"));

const cherry = itemList.querySelector(".highlight"); // NOT DYNAMIC - FIRST MATCH
console.log(cherry.previousElementSibling);
console.log(cherry.nextElementSibling);

// Ticket 3a - // IT WORKS - HOW CAN REDUCE CODE DUPLICATION?
document.getElementById("title").style.color = "red";
document.getElementById("title").style.fontSize = "30px";

// Ticket 3b // VERY NICE - HOW TO REFACTOR THIS?
const newElement = document.createElement("p");

newElement.textContent = "This is a dynamically added paragraph.";

const parentElement = document.querySelector("body");

parentElement.appendChild(newElement);

console.log(document.querySelector(".content"));

// Ticket 3c
let firstParagraph = document.querySelector(".content"); // VERY NICE

firstParagraph.textContent = "This paragraph has been updated";
