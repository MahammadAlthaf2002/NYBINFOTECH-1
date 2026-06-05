// function topic
  
// no input and no output
  

  var a =100;
  var b =200;

  function add (){
    let c = a+b;
    console.log(c)

  }
  add()

  // no input and with output

  
  var a =100;
  var b =500;

  function add(){

    let c=a+b;
    return c;
  }
var res = add()
console.log(res);

 // input and with output

  

  function add(x,y){

    let c=x+y;
    return c;
  }

   var a =100;
  var b =500;
var res = add(a ,b )
console.log(res);

 // input and no ouput

 
  function add(x,y){

    let c=x+y;
console.log(c);
  }
   var a =100;
  var b =500;
  add (a,b);

//   using dry principal 

// without  dry

let price1 = 100;
let tax1 = price1 * 0.18;
console.log(price1 + tax1);

let price2 = 200;
let tax2 = price2 * 0.18;
console.log(price2 + tax2);

let price3 = 300;
let tax3 = price3 * 0.18;
console.log(price3 + tax3);

// The tax calculation logic is repeated three times.

// now With DRY (Using a Function)

function calculateTotal(price) {
    return price + price * 0.18;
}

console.log(calculateTotal(100));
console.log(calculateTotal(200));
console.log(calculateTotal(300));


function calculatePercentage(obtainedMarks, totalMarks) {
    return (obtainedMarks / totalMarks) * 100;
}

function calculateGrade(percentage) {
    if (percentage >= 90) {
        return "A+";
    } else if (percentage >= 80) {
        return "A";
    } else if (percentage >= 70) {
        return "B";
    } else if (percentage >= 60) {
        return "C";
    } else if (percentage >= 50) {
        return "D";
    } else {
        return "F";
    }
}

// Student details
const studentNumber = 101;
const obtainedMarks = 425;
const totalMarks = 500;

const percentage = calculatePercentage(obtainedMarks, totalMarks);
const grade = calculateGrade(percentage);

console.log("Student Number:", studentNumber);
console.log("Percentage:", percentage.toFixed(2) + "%");
console.log("Grade:", grade);


function calculatePercentage(obtainedMarks, totalMarks) {
    return (obtainedMarks / totalMarks) * 100;
}

function calculateGrade(percentage) {
    if (percentage >= 90) return "A+";
    if (percentage >= 80) return "A";
    if (percentage >= 70) return "B";
    if (percentage >= 60) return "C";
    if (percentage >= 50) return "D";
    return "F";
}

const studentNumber = 101;
const obtainedMarks = 425;
const totalMarks = 500;

const percentage = calculatePercentage(obtainedMarks, totalMarks);
const grade = calculateGrade(percentage);