// ===============================
// Global Scope
// ===============================

const students = [];


// ===============================
// Function Declaration
// ===============================

function addStudent(){

    let name =
    document.getElementById("studentName").value;


    let marks =
    Number(document.getElementById("marks").value);


    createStudent(name,marks);

}



// ===============================
// Function Expression
// ===============================

const createStudent = function(name,marks){

    let student = {

        name:name,
        marks:marks

    };


    students.push(student);


    displayStudents();

};



// ===============================
// Arrow Function
// ===============================

const displayStudents = () => {


    const list =
    document.getElementById("studentList");


    list.innerHTML="";


    students.map(student=>{


        let li=document.createElement("li");


        li.innerHTML =
        `${student.name} - ${student.marks}`;


        list.appendChild(li);


    });


};



// ===============================
// Higher Order Function
// map()
// ===============================


const getStudentNames = students.map(
    
    student => student.name

);


console.log(getStudentNames);



// ===============================
// Callback Function
// ===============================


function calculateResult(marks,callback){

    let result;


    if(marks>=40){

        result="Pass";

    }
    else{

        result="Fail";

    }


    callback(result);

}



calculateResult(80,function(result){

    console.log(result);

});



// ===============================
// First Class Function
// Function stored in variable
// ===============================


const greet = function(){

    console.log(
        "Welcome Student"
    );

};


greet();



// ===============================
// Default Parameters
// ===============================


function welcomeUser(
    name="Guest"
){

    console.log(
        "Hello "+name
    );

}


welcomeUser();



// ===============================
// Rest Parameters
// ===============================


function calculateTotal(...marks){

    let total=0;


    marks.forEach(mark=>{

        total+=mark;

    });


    return total;

}


console.log(
calculateTotal(50,60,70)
);



// ===============================
// Arguments Object
// ===============================


function showArguments(){

    console.log(arguments);

}


showArguments(
    10,
    20,
    30
);



// ===============================
// Function Scope
// ===============================


function testScope(){

    let message =
    "Inside Function";


    console.log(message);

}


testScope();



// ===============================
// Block Scope
// ===============================


if(true){

    let blockVariable =
    "Only inside block";


    console.log(blockVariable);

}



// ===============================
// Lexical Scope
// ===============================


function outerFunction(){


    let username="John";


    function innerFunction(){

        console.log(username);

    }


    innerFunction();

}


outerFunction();



// ===============================
// Closure
// ===============================


function counter(){


    let count=0;


    return function(){


        count++;


        console.log(count);


    }

}


const increase =
counter();


increase();

increase();



// ===============================
// IIFE
// ===============================


(function(){

    console.log(
        "IIFE Executed Immediately"
    );


})();



// ===============================
// Hoisting
// ===============================


hello();


function hello(){

    console.log(
        "Function Hoisting Works"
    );

}



// ===============================
// var let const
// ===============================


var oldVariable="var";

let modernVariable="let";

const fixedVariable="const";


console.log(
oldVariable,
modernVariable,
fixedVariable
);