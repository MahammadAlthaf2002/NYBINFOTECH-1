//copying arrays can be done in several ways depending on whether you need a shallow copy or a deep copy.

var num = [1,2,3,45,5]

num[2]=100

var num1 = num
console.log(num1)
console.log(num)

var num = {
    name:"althaf",
    age:23,
    salary:230000
}

num.name="subbu"

var num1 = num
console.log(num1)
console.log(num)

console.log(num1===num)



const user1 = {
  name: "John"
};

const user2 = user1;

user2.name = "Mike";

console.log(user1.name); // Mike
console.log(user2.name); // Mike

const a = [1, 2, 3];
const b = a;

console.log(a === b);


// shallow copy

var arr1 = [1, 2, 3];
var  arr2 = [...arr1];

arr2.push(4);

console.log(arr1);
console.log(arr2);

var arr1 = [[1, 2], [3, 4]];

var arr2 = [...arr1];

arr2[0].push(99);

console.log(arr1);
console.log(arr2);


var num = {
    name:"althaf",
    age:23,
    salary:230000 , 
}

var num3 = num

num3.name="subbu"



console.log(num3)
console.log(num)

var arr1 = [[1, 2], [3, 4]];
var arr2 = [...arr1];

arr2[0].push(99);

console.log(arr1);
// [[1,2,99],[3,4]]

console.log(arr2);
// [[1,2,99],[3,4]]

var user = {
  name: "Althaf",
  address: {
    city: "Anantapur"
  }
};

var user0 = { ...user};

user0.address.city = "Hyderabad";

console.log(user.address.city);


// 3. Deep

var  user11 = {
  name: "Althaf",
  address: {
    city: "Anantapur"
  }
};

var user22 = structuredClone(user11)
console.log(user11)


user22. address.city ="atp"

console.log(user22)


var user22 = JSON.parse(JSON.stringify(user11))
console.log(user11)


user22. address.city ="atp"

console.log(user22)

//date
let d = new Date()
console.log(d)
//templete string

var x=10
var y =20

console.log(` value ${x} ,  value ${y} , sum${x+y}`)

// math object

var ab =10
var bc=10.2

console.log(Math.floor(bc))
console.log(Math.ceil(bc))
console.log(Math.round(bc))
console.log(Math.sqrt(9))

/// string
 var bc ="althaf"
console.log(bc.length)

// to upper case
let name = "althaf";

console.log(name.toUpperCase());
//to lower case

let nam1= "althaf";

console.log(nam1.toLowerCase())


