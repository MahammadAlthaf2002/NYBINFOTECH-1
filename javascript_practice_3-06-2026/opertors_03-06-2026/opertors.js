// logical operator 

// AND--> && --> both  condition should be true otherwise it will display false 

// OR --> || --> Any one condition must be true then it will display true if both conditions false then only it will display false

// NOT --> ! --> if answer is true then it will display it as false 




let age = 20;
let has= true;

if (age >= 18 && has) {
  console.log("Allowed");
}



let isMember = false;
let hasCoupon = true;

if (isMember || hasCoupon) {
  console.log("Discount applied");
}


let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in");
}



console.log("" || "Hello");  
console.log(0 && "Hi");     

console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false





let username = "";
let displayName = username || "Guest";

console.log(displayName);

// bitwise operator 

let a = 5; // 0101
let b = 3; // 0011

console.log(a & b);


console.log(5 | 3);

console.log(~5); // ~n = -(n + 1)

console.log(5 << 1);


console.log(5 && "hello");   // "hello"
console.log(0 && "hello");   // 0

console.log("" || "guest");  // "guest"
console.log("js" || "guest");// "js"

console.log(!0);             // true
console.log(!"hello");       // false

