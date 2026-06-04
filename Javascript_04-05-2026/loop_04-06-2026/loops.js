// 1) What is a loop?

// A loop is used when you want to repeat the same block of code again and again.

console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");

// With a loop, you can do the same work in a cleaner way.

// Loops help you:

// print numbers
// repeat calculations
// go through arrays
// build patterns
// process data many times

// In JavaScript, the main loop types are:

// for
// while
// do...while
// for...of
// forEach
// nested loops

// forEach is not a loop keyword like for, but it is commonly used for arrays, so it belongs in loop practice.

// The basic idea behind every loop

// Every loop has 3 or 4 important parts:

// Start / initialization
// Example: let i = 1
// Condition
// Example: i <= 5
// Work / body
// Example: console.log(i)
// Update / increment
// Example: i++

// A loop keeps running until the condition becomes

// for loop in detail

// The for loop is the most common loop when you know how many times you want to repeat something.

// Syntax
// for (initialization; condition; update) {
//     // code
//  }

for (let i = 1; i <= 5; i++) {
   console.log(i);
}

for (let i = 5; i >= 1; i--) {
    console.log(i);
}

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}


for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}


let num = 5;

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + num * i);
}

for (let i = 1; i <= 5; i++) {
    console.log(i * i * i);
}

for (let i = 10; i >= 1; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

for (let i = 1; i <= 20; i++) {
    if (i === 10) continue;
    console.log(i);
}

let sum = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}

console.log(sum);


for (let i = 1; i <= 5; i++) {
   
    console.log("*");
}

let i = 1

while (i<=5) {
    

console.log(i)

i++;

}


for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= 5; j++) {
        row += "* ";
    }

    console.log(row);
}





