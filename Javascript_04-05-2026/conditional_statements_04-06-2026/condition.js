// if else statements


var num = -5;

if (num > 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}

var  num = 40;

if (num >= 35) {
    console.log("Pass");
} else {
    console.log("fail");

}


var  num = 8;

if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

var  num = 25;

if (num % 5 === 0) {
    console.log("Divisible by 5");
} else {
    console.log("Not Divisible by 5");
}

let a = 20;
let b = 30;

if (a > b) {
    console.log(a);
} else {
    console.log(b);
}

let salary = 60000;

if (salary >= 50000) {
    console.log("High Salary");
} else {
    console.log("Low Salary");
}

let username = "admin";

if (username === "admin") {
    console.log("Login Success");
} else {
    console.log("Invalid User");
}

let marks = 82;

if (marks >= 90) {
    console.log("A");
} else if (marks >= 75) {
    console.log("B");
} else if (marks >= 60) {
    console.log("C");
} else if (marks >= 35) {
    console.log("D");
} else {
    console.log("Fail");
}

let signal = "green";

if (signal === "red") {
    console.log("Stop");
} else if (signal === "yellow") {
    console.log("Ready");
} else if (signal === "green") {
    console.log("Go");
} else {
    console.log("Invalid Signal");
}

let day = 3;

if (day === 1) {
    console.log("Monday");
} else if (day === 2) {
    console.log("Tuesday");
} else if (day === 3) {
    console.log("Wednesday");
} else if (day === 4) {
    console.log("Thursday");
} else if (day === 5) {
    console.log("Friday");
} else if (day === 6) {
    console.log("Saturday");
} else if (day === 7) {
    console.log("Sunday");
} else {
    console.log("Invalid Day");
}

let balance = 10000;
let withdraw = 7000;

if (balance >= withdraw) {
    console.log("Transaction Successful");
} else {
    console.log("Insufficient Balance");
}

var num = 30;

if (num >= 10 && num <= 50) {
    console.log("Inside Range");
} else {
    console.log("Outside Range");
}

let num1 = 20;
let num2 = 10;
let op = "+";

if (op === "+") {
    console.log(num1 + num2);
} else if (op === "-") {
    console.log(num1 - num2);
} else if (op === "*") {
    console.log(num1 * num2);
} else if (op === "/") {
    console.log(num1 / num2);
} else {
    console.log("Invalid Operator");
}

// A switch statement is used when you want to compare one variable against many possible values.


// switch (expression) {

//     case value1:
//         // code
//         break;

//     case value2:
//         // code
//         break;

//     default:
//         // code
//}

var days =3

switch (days){
    case 1:
        console.log("monday")
        break;
           case 2:
        console.log("tuesday")
        break;
           case 3:
        console.log("wednesday")
        break;
           case 4:
        console.log("thursday")
        break;


    default:
        console.log("Invalid");

}

var  num11 = 20;
var  num22 = 10;
var  op0 = "+";

switch(op){

    case "+":
        console.log(num11 + num22);
        break;

    case "-":
        console.log(num11 - num22);
        break;

    case "*":
        console.log(num11 * num22);
        break;

    case "/":
        console.log(num11 / num22);
        break;

    default:
        console.log("Invalid Operator");
}

let grade = "A";

switch(grade){

    case "A":
        console.log("Excellent");
        break;

    case "B":
        console.log("Good");
        break;

    case "C":
        console.log("Average");
        break;

    default:
        console.log("Needs Improvement");
}

var  days = 7;

switch (days) {
    case 6:
    case 7:
        console.log("Weekend");
        break;

    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Weekday");
        break;

    default:
        console.log("Invalid Day");
}

let role = "admin";

switch (role) {
    case "admin":
        console.log("Full Access");
        break;

    case "user":
        console.log("Limited Access");
        break;

    case "guest":
        console.log("Read Only");
        break;

    default:
        console.log("Invalid Role");
}

var dayss = 2;

switch (dayss) {
    case 1:
        console.log("One");

    case 2:
        console.log("Two");

    case 3:
        console.log("Three");

    default:
        console.log("Done");
}
