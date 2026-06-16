var dom = document.getElementById("title")
console.log(dom)

console.log(dom .innerText)
var classs = document.getElementsByClassName("name")
console.log("classs")

//DOM Traversing is the process of navigating through the HTML Document Object Model (DOM) to access,
//  modify, or manipulate elements relative to a selected element.

const about = document.getElementById("about");

// Parent
console.log(about.parentElement);

// Previous sibling
console.log(about.previousElementSibling);

// Next sibling
console.log(about.nextElementSibling);

let child = document.getElementById("menu");

console.log (child.parentElement)    // Returns parent element > only html tags
console.log(child.parentNode);       // Returns parent node >> everthing (elements , document , text , comments)
 //parentnode returns document
 // parent element retrunsn null because documnet is not an html element


 let text = document.getElementById("text")

 console.log(text.parentElement)

 function showParent() {
    let child = document.getElementById("child");
    let parent = child.parentElement;

    alert(parent.tagName);


    child.parentElement.style.backgroundColor = "yellow";
    console.log(child)

    


}

let parent = document.getElementById("menu");

console.log(parent.children);        // HTMLCollection of child elements

console.log(parent.firstElementChild .innerText)
console.log(parent.lastElementChild)


let element = document.getElementById("about");

console.log(element.nextElementSibling)
console.log(element.previousElementSibling)



// Creating a DOM Element in JavaScript

// You can create new HTML elements dynamically using document.createElement().


// create a elements

let newelement = document.createElement("h1")
console.log(newelement)
newelement.innerText= "New Element"
console.log(newelement)


let btn = document.createElement("button");
btn.textContent = "Click Me";

console.log (btn)
console.log(document.body.appendChild(btn));

function addItem() {
    let li = document.createElement("li");
    li.textContent = "New Item";

    document.getElementById("myList").appendChild(li);
}

let div = document.createElement("div");

div.textContent = "Hello DOM!";
div.style.backgroundColor = "lightblue";
div.style.padding = "10px";

document.body.appendChild(div);

let heading = document.createElement("h2");

heading.textContent = "Inserted Before";

let target = document.getElementById("child");

target.before(heading);





