//DOM
// The DOM (Document Object Model) is a programming interface for HTML documents.
//  It represents the webpage as a tree of objects (elements),
//  allowing JavaScript to access and modify content, structure, and styles dynamically.

// // | Property      | Description               |
// | ------------- | ------------------------- |
// | `innerHTML`   | Gets or sets HTML content |
// | `innerText`   | Gets or sets visible text |
// | `textContent` | Gets or sets text content |
// | `id`          | Returns element ID        |
// | `className`   | Returns class name        |
// | `style`       | Accesses CSS styles       |


// Think of the DOM as the bridge between HTML and JavaScript.

// When a browser loads an HTML file, it does not directly work with the HTML text.
//  Instead, it converts the HTML into a structured object model called the DOM.


// 1 GetElementById


var  heading = document.getElementById("title");
console.log(heading)
console.log(heading .innerText)
console.log(heading.innerHTML)
    console.log(heading .textContent)
    console.log(heading .id)
  console.log(heading .className)
  console.log(heading .style)



  // GetElementaByclassname

const msgs =
document.getElementsByClassName("msg");
console.log(msgs)

// Queryselector

var msg =document.querySelector(".msg");
console.log(msg)


// QueryselectorAll

var all=document.querySelectorAll(".msg");
console.log(all)


//Modifying Elements


console.log (title . innerText =
"New Heading")

console.log(title.innerHTML )
 

console.log(document
.getElementById("New Heading"))
