console.log("hi");
document.getElementById(title);
console.log(title);

document.getElementsByClassName("content");
console.log(document.getElementsByClassName("content"));

document.querySelectorAll("li");
console.log(document.querySelectorAll("li"));

document.querySelector(".highlight");
console.log(document.querySelector(".highlight"));

const elements = document.querySelectorAll(".highlight");

document.querySelectorAll(".highlight");
console.log(document.querySelectorAll(".highlight"));
for (var i = 0; i < elements.length; i++) {
  console.log(elements[i].textContent);
}

document.getElementById("itemList");
console.log(document.getElementById("itemList"));

const itemList = document.getElementById("itemList");
itemList.querySelector("li");
console.log(itemList.querySelector("li"));

const item = itemList.querySelector("li");
console.log(item.parentNode);

console.log(itemList.childNodes);

console.log(itemList.children);

console.log(itemList.firstElementChild);
console.log(itemList.lastElementChild);
console.log(itemList.querySelector(".highlight"));

const cherry = itemList.querySelector(".highlight");
console.log(cherry.previousElementSibling);
console.log(cherry.nextElementSibling);

document.getElementById("title").style.color = "red";
document.getElementById("title").style.fontSize = "30px";

const newElement = document.createElement("p");

newElement.textContent = "This is a dynamically added paragraph.";

const parentElement = document.querySelector("body");

parentElement.appendChild(newElement);

console.log(document.querySelector(".content"));

let firstParagraph = document.querySelector(".content");

firstParagraph.textContent = "This paragraph has been updated";
