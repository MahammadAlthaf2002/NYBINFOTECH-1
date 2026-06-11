// 1. Normal Copy (Reference Copy)
var obj1 = {
  name: "Althaf",
  age: 23
};

var obj2 = obj1;

obj2.age = 25;

console.log(obj1);
console.log(obj2);

// 2. Shallow Copy using Spread Operator

var obj1 = {
  name: "Althaf",
  address: {
    city: "Anantapur"
  }
};

var obj2 = { ...obj1 };

obj2.address.city = "Hyderabad";

console.log(obj1);
console.log(obj2);


// 4. Deep Copy using JSON Method

var obj1 = {
  name: "Althaf",
  address: {
    city: "Anantapur"
  }
};

var obj2 = JSON.parse(JSON.stringify(obj1));

obj2.address.city = "Bangalore";

console.log(obj1);
console.log(obj2);

// 5. Deep Copy using structuredClone()



var obj1 = {
    name: "Althaf",
    address: {
        city: "Anantapur"
    }
};

var obj2 = structuredClone(obj1);

obj2.address.city = "Chennai";

console.log(obj1);
console.log(obj2);


// 7. Date Object

const today = new Date();

console.log(today);

// 8.Date Formatting

const toda= new Date();

const formatted =
`${toda.getDate()}-${toda.getMonth()+1}-${toda.getFullYear()}`;

console.log(formatted);

// math
var num = 4.6;

console.log(Math.round(num));

var num = 4.9;

console.log(Math.floor(num));

var num = 4.1;

console.log(Math.ceil(num));

var randomNumber =
Math.floor(Math.random() * 10) + 1;

console.log(randomNumber);

var str = "JavaScript";

console.log(str.length);

