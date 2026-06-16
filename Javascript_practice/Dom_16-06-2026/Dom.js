// let  a = document.getElementById("btn").addEventListener("click" ,() => {
//     console.log (" button clicked")
// } ) 


function CLICKME  () {
    console.log("submited")
}

let btn = document.getElementById("btn")
btn.onclick=function(){
console.log("Submited")
}


console.log(document.documentElement)
console.log(document.body.h1)

// Synchronous Execution
console.log("Start");

let sum = 0;

for(let i=1;i<=5;i++){
    sum += i;
}

console.log(sum);

console.log("End");

// output Execution Flow:

// Start
//  ↓
// Loop
//  ↓
// 15
//  ↓
// End

// Everything waits for previous code.

// This is called:

// Synchronous Programming




// Why Async Programming Exists?

// Suppose:



// for(let i=0;i<10000000000;i++){
  
// }

// console.log("End");

// The browser freezes.

// Why?

// Because JavaScript is busy.

// User cannot:

// Click button
// Scroll page
// Type input

// Everything waits.

// To solve this:

// Browsers introduced asynchronous operations.

// Real Life Example

// Imagine ordering pizza.

// Synchronous:

// Order pizza
// Wait 30 mins
// Eat
// Continue life

// Bad.

// Asynchronous:

// Order pizza
// Continue watching movie
// Pizza arrives later
// Eat

// Better.

// JavaScript works like this.

// setTimeout()
// Definition ->Executes code once after a delay.


console.log("start")

setTimeout(() => {
    console.log("hello")
    
}, 3000);

console.log("End")


console.log("start")

setTimeout(() => {

    let sums =0
    for(i=0; i<=5 ; i++)
    {
        sum +=i
    }
    console.log(sum)
    
}, 3000);

console.log("End")

setTimeout(()=>{
    console.log("I am delayed");
},5000);


setTimeout(()=>{
    console.log("First");
},1000);

setTimeout(()=>{
    console.log("Second");
},2000);

setTimeout(()=>{
    console.log("Third");
},3000);

console.log("Start");

setTimeout(()=>{
    console.log("Timeout");
},0);

console.log("End");


// Why?

// 0 milliseconds does NOT mean immediate.

// It means:

// Put callback in queue immediately.
// Execute when stack becomes empty.

// clearTimeout()

// Cancels timeout.

let timer = setTimeout(()=>{
    console.log("Hello");
},3000);

clearTimeout(timer); // Output:

// Nothing

// Timer removed.

let id = setTimeout(()=>{
    console.log("Boom");
},5000);

setTimeout(()=>{
    clearTimeout(id);
    console.log("Cancelled");
},2000);

console.log("Start");

 let a =setTimeout(()=>{
    console.log("Timeout");
},0);
clearTimeout(a)
console.log("End");

// setInterval() --> Runs repeatedly after fixed interval.

// setInterval(()=>{
//     console.log(new Date());
// // },1000);
// setInterval(()=>{
//     console.log("hello");
// },1000);

// clearInterval()
// what is clearInterval()?

// clearInterval() is used to stop a repeating task that was started using setInterval().

// Think of it like this:

// setInterval()   → Start repeating
// clearInterval() → Stop repeating

// Stops interval.

let stop=setInterval(() =>{
    console.log("num")
},1000);

setTimeout(()=>{
    clearInterval(stop);
},5000);


let count = 0;

var iid = setInterval(()=>{

    count++;

    console.log(count);

    if(count === 10){
        clearInterval(iid);
    }

},1000);

