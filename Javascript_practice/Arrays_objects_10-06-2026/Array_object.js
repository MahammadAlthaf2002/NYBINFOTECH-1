// Sorting with out using sort method
//What is Sorting?

//Sorting means arranging data in a specific order

// sort without using built-in methods to understand the logic behind sorting.

let arr = [5, 2, 8, 1, 4];

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

let marks = [78,45,98,65,55];

for(let i=0;i<marks.length-1;i++){

    for(let j=0;j<marks.length-1-i;j++){

        if(marks[j] > marks[j+1]){

            let temp = marks[j];
            marks[j] = marks[j+1];
            marks[j+1] = temp;

        }
    }
}

console.log(marks);


//What is forEach()?

//forEach() is an array method used to execute a function once for every element in an array.
//syntax
//array.forEach(function(element, index, array){
    // code
//});





let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});




var  fruitss = ["Apple", "Banana", "Mango"];

fruitss.forEach(function(fruit, index) {
    console.log(index + " : " + fruit);
});

var names = ["althaf", "kalam", "subbu"];

names.forEach(function(names){
    console.log(names)
});

var names= ["Apple", "Banana", "Mango"];

names.forEach(function(name) {
    console.log(name);
});

var fruitss = [1,2,3,44,5];

fruitss.forEach(function(fruit) {
    console.log(fruit);
});

let numberss = [10, 20, 30, 40];

numberss.forEach(function(num){
    console.log(num);
});


let numbers = [10, 20, 30];

numbers.forEach(num => {
    console.log(num * 2);
});



// objects

// Introduction to Objects in JavaScript
// What is an Object?

// An object is a collection of related data stored as key-value pairs.

// Think of an object as a real-world thing that has:

// Properties (characteristics)
// Methods (actions)
// Real-Life Example: Student

// A student has:

// Name
// Age
// Course
// Marks


// Why Do We Need Objects?

// Without objects:

// let student1Name = "Rahul";
// let student1Age = 20;

// let student2Name = "Priya";
// let student2Age = 21;

// As data grows, it becomes difficult to manage.

let student = {
    name: "Rahul",
    age: 20,
    course: "JavaScript"
};

console.log(student);

//  Object = Key + Value

// Accessing Object Properties
// Method 1: Dot Notation


var studentdetails ={
    name:"althaf",
    age:24,
    
}

console.log(studentdetails.age)

// Method 2: Bracket Notation

console.log(studentdetails["name"])


console.log(studentdetails.age)

console.log(studentdetails.name)
