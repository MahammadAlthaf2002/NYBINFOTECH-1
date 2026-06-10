//Implement array sorting without using built-in sort() methods.


let ages = [21, 18, 25, 19, 30];

for (let i = 0; i < ages.length - 1; i++) {

    for (let j = 0; j < ages.length - 1 - i; j++) {

        if (ages[j] < ages[j + 1]) {

            let temp = ages[j];
            ages[j] = ages[j + 1];
            ages[j + 1] = temp;

        }
    }
}

console.log(ages);

//Create examples using forEach().

// var name = ["althaf" , "subbu" , "kalam"]

// name.forEach(function(names) {

//     console.log(names)
    
// });

var namee = ["althaf", "subbu", "kalam"];

namee.forEach(function(names) {

    console.log(names);


});



// object
// 
//  Understand the concept of objects in JavaScript.
// Create objects using different approaches.

// 4 ways to do it

1// objectliteral way


var studentdetails={
    name:"subbu",
    age:23,
    gender:"male"

}

console.log(studentdetails )
console.log(studentdetails . name)
console.log(studentdetails ["age"])

// 2 // new keyword 
//new object



var studentdetails= new Object()
  studentdetails. name ="subbu" ;
   studentdetails. age=23 ;
    studentdetails .gender="male";



console.log(studentdetails )
console.log(studentdetails . name)
console.log(studentdetails ["age"])

// Constructor Function

//Used when creating many similar objects.

function students( name , age , course ){

this.name=name;
this.age=age;
this.course=course;   

}

var std1 = new students ("a",20,"cse");

var std2 = new students ("b",24,"cse");

console.log(std1)


console.log(studentdetails.name);
console.log(studentdetails.age);
                                                                    

var studentdetails={
    name:"subbu",
    age:23,
    gender:"male"

}


console.log(studentdetails
);

studentdetails.name="althaf"
console.log(studentdetails)

studentdetails.userid="althaf"
console.log(studentdetails)

delete studentdetails.name;
console.log(studentdetails)


var  student = {
    name: "Subbu",
    age: 23,
    course: "CSE"
};

// Access
console.log(student.name);

// Update
student.age = 24;

// Add
student.city = "Anantapur";

// Delete
delete student.course;

console.log(student);




//JavaScript Revision Activities + Mini Assignment


/// 1.Array creation

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);

//2.Multidimensional Arrays

let matrix = [
    [1, 2],
    [3, 4]
];

console.log(matrix);
console.log(matrix[0][1]);

// 3. Adding Elements

let colors = ["Red", "Blue"];

colors.push("Green");

console.log(colors);

//4.unsift

colors.unshift("Yellow");

console.log(colors);

// 5. splice

colors.splice(1,0,"organe")
console.log(colors)

// 6. removing pop

colors.pop("red");

console.log(colors);

//7.shift 
colors.shift( )
console.log(colors)

// 8.splice

colors.splice(1,2)
console.log(colors)

//9.length

console.log(colors.length)

//10.indexof

console.log(colors.indexOf("organe"))

//11/lastindexof 

colors.push("red","yellow" ,"blue")

console.log(colors.lastIndexOf("yellow"))
console.log(colors)

console.log(colors.lastIndexOf("organe"))

//12. includes

var includes = colors.includes("red")
console.log(includes)

//13.combining concat

var concat=colors.concat(fruits)
console.log(concat)

//14.for loop

let fruitsss = ["Apple","Banana","Mango"];

for(let i=0;i<fruitsss.length;i++){
    console.log(fruitsss[i]);
}
//15. some

// let nums = [10,20,30,40];

// let result = nums.some(num => num > 35);


//16. every


let nums = [10,20,1006,40];

let result = nums.every(num => num > 35);
console.log(result);

//17. joim

let join = nums.join("_")
console.log(join);

//18 sort

let sort = nums.sort(( a,b) => a-b)
console.log(sort)

//19. flattening Arrays

let num1 = [1,2,3,4,[,2,334,4,][234,456,34]]
let flat = nums.flat(Infinity)
console.log(flat)

//20. map

let map= nums.map((a,b) => a*b)
console.log(map)

//21.filter

let numss = [1,2,3,4,5];

let even = numss.filter(num => num % 2 === 0);

console.log(even);

//22.object
//Object Creation

let student1 = {
    name: "Subbu",
    age: 23,
    course: "CSE"
};
console.log(student1)