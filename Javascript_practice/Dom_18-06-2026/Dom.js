// list.addEventListener("click", (e) => {
//   if (e.target.tagName === "LI") {
//     e.target.style.color = "red";
//   }
// });

let a=document.getElementById("list")

function list1 (Event){
   if(Event.target .tagName==="LI")
   {
    console.log(Event.target.textContent);
   }
}

a.addEventListener("click" , list1)

const outer = document.getElementById("outer");
const inner = document.getElementById("inner");

outer.addEventListener("click", (e) => {
  console.log("OUTER");
  console.log(e.target.id);
  console.log(e.currentTarget.id);
});

inner.addEventListener("click", (e) => {
  console.log("INNER");
  console.log(e.target.id);
  console.log(e.currentTarget.id);
});


const cart = document.getElementById("cart");

cart.addEventListener("click", function(event) {
    if (event.target.classList.contains("remove-btn")) {
        const item = event.target.parentElement;
        item.remove();
        console.log("Item removed");
    }
});


// CALLBACK FUNCTIONS

// What is a Callback?

// A callback is:

// // A function passed as an argument to another function and executed later.

// function process(callback) {
//     callback();
// }

// process(() => {
//     console.log("Done");
// });

function process(a, b, callback) {
    callback(a, b);
}

const add = function(x, y) {
    console.log(x + y);
};

process(5, 3, add);

function execute(callback){
    callback();
}

execute(function(){
    console.log("Running");
});

setTimeout(()=> {
    console.log("hello")
}
,3000)

function main(callback) {
    callback();
}

function sayHello() {
    console.log("Hello");
}

main(sayHello);

function greet(callback) {
    callback();
}

function sayHello() {
    console.log("Hello World");
}

greet(sayHello);


function later (callback){
    callback( "althaf");

}
  function display (name)
{
    console.log("hi" + name)
}
later(display)


function later (callback){
    callback( "althaf");

}
   later( function (name)
{
    console.log("hi" + name)
})



function cal (a,b ,callback){
    callback(a,b)
}
function add1(x,y){
    console.log(x+y)
}

cal(2,4 ,add1)


// Multiple Operations


function cal (a,b ,callback){
    callback(a,b)
}
function add1(x,y){
    console.log(x+y)
}
function sub (x,y){
    console.log(x-y)
}
function mul (x,y){
    console.log(x*y)
}

cal(2,5,add1)
cal(2,6,sub)
cal(12,6,mul)

// Callback Returning Value

function cal (a,b ,callback){
    callback(a,b)
}
var result=cal (5,6 , function(x,y){
    return x*y

})
console.log(result)

//  What is “Normal Event” Behavior?

// By normal event behavior, we mean: Every time the event happens, the handler function runs.

// For example:

// if the user clicks 5 times, the function may run 5 times
// if the user scrolls continuously, the function may run many times
// if the user types 20 keys, the function may run 20 times

// So normal event handling means:

// Event happens
// ↓
// Function runs

// // again and again, every time the event is triggered.

// Why Normal Events Can Become a Problem

// Normal event handling is correct, but sometimes it is too frequent.

// That can cause:

// performance issues
// too many function calls
// too many API requests
// slow UI
// wasted CPU usage

// For example:

// scroll event fires many times per second
// mousemove fires many times per second
// typing fires again and again

// So we need control.

// That is where throttling and debouncing come in.


// What is Debouncing?

// Debouncing means:

// Run the function only after the event has stopped happening for a certain time.

// Simple meaning:

// user keeps doing something
// function waits
// only after the user stops, function runs once

// Think of it like waiting for someone to finish talking before replying.

// If they keep speaking, you keep waiting.

// When they stop, you respond.

// let btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//     console.log("Clicked");
// });


let s =document.getElementById("search")
search.addEventListener("keyup", () => {
    console.log("Searching...");
} , 1000);

function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

let textarea = document.querySelector("textarea");

textarea.addEventListener(
  "keyup",
  debounce(() => {
    console.log("Auto Saved");
  }, 2000)
);


