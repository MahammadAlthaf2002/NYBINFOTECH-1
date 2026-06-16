const parent = document.getElementById("parent");

// Parent node
console.log(parent.parentNode);

// Child nodes
console.log(parent.children);
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

// Sibling nodes
const heading = parent.firstElementChild;

console.log(heading.nextElementSibling);
console.log(heading.previousElementSibling); // null

// . Creating DOM Elements Dynamically

const newElement = document.createElement("p");

newElement.textContent = "This is a dynamically created paragraph.";

console.log(newElement);

// Adding Elements to the DOM

const container = document.getElementById("parent");

const newParagraph = document.createElement("p");
newParagraph.textContent = "New paragraph added.";

container.appendChild(newParagraph);

//Removing Elements from the DOM

const para = document.querySelector("p");

para.remove();

// Adding Event Listeners

document.getElementById("btn").addEventListener("click", () => {
  alert("Button Clicked!");
});

const box = document.getElementById("box");

box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "yellow";
});

box.addEventListener("mouseout", () => {
  box.style.backgroundColor = "";
});



