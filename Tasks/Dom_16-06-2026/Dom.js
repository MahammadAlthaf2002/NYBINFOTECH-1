// 1. Create Examples Using setTimeout()

console.log("Program Started");

setTimeout(() => {
    console.log("Hello after 3 seconds");
}, 3000);

console.log("Program Ended");

// 2. Create Examples Using setInterval()
// Example 1: Print Numbers Every Second

var count = 1;

setInterval(() => {
    console.log(count);
    count++;
}, 1000);

// Digital Clock

setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);

// 3. Implement Programs Using clearTimeout()

let timer = setTimeout(() => {
    console.log("Message Sent");
}, 5000);

clearTimeout(timer);

console.log("Message Cancelled");

var id = setTimeout(() => {
    console.log("Order Confirmed");
}, 4000);

setTimeout(() => {
    clearTimeout(id);
    console.log("Order Cancelled");
}, 5000);

var count = 1;

var id = setInterval(() => {

    console.log(count);

    if (count === 5) {
        clearInterval(id);
    }

    count++;

}, 1000);