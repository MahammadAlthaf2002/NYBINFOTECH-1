// Async and Await
// What is Async and Await?

// In JavaScript, some tasks take time:

// Fetching data from a server
// Reading a file
// Uploading an image
// Connecting to a database
// Calling an API

// These operations do not finish immediately.

// If JavaScript waits for these operations to finish, the whole webpage freezes.

// To avoid this problem, JavaScript uses Asynchronous Programming.

// async and await are modern ways to handle asynchronous tasks.
// Whenever data loads without refreshing the page//

async function greet() {
    return "Hello World";
}

greet().then(console.log);


function delay (){
    return new Promise (resolve  =>
    {
        setTimeout(()=> {
            resolve("completed")
        },3000)

    } )
}

async function run(){
    var s = await  delay ();
    console.log(s)
     
}
run()


function add (a,b){
    return new Promise (resolve  =>
    {
        setTimeout(()=> {
            resolve(a+b)
        },3000)

    } )
}

async function run(){
    var sum = await  add ( 10,25);
    console.log(sum)
     
}
run()



var p1 = new Promise(reslove =>{
    reslove("a")

})

var p2 = new Promise(reslove =>{
    reslove("b")

})

async function add1 (p1,p2) {

     const value1 = await p1;
    const value2 = await p2;

    const sum1 = value1 + value2;

 console.log(sum1)
    
}
add1(p1,p2)


async function getUsers() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    const users = await response.json();

    console.log(users);
}

getUsers();

try {
    console.log(a); // 'a' is not defined
} catch (error) {
    console.log("An error occurred!");
    console.log(error.message);
}


async function test() {
    try {
        const response = await fetch("wrong-url");
        console.log(response);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

test();

async function weather() {
    const city = "London";

    console.log(`Getting weather for ${city}`);

    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log("25°C");
}

weather();

// Destructuring

// Extracting values from arrays or objects and storing them in variables.

var numbers= [10,20,30,40]
var [a ,b,c,d] = numbers
console.log(a,b,c,d)
console.log(a+b+c+d)
console.log(a,c)

var a = 10
var b =20

[a,b]=[b,a]
console.log(a,b)


const student = {
    name: "John",
    age: 21
};

const { name, age } = student;

console.log(name , age);
console.log(age);

const person = {
    name: "David"
};

const { name: fullName } = person;

console.log(fullName);

// Iterators
// What is an Iterator?

// Iterator is an object that helps move through data one item at a time.

const arr = ["a", "b", "c"];

const iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());

console.log(iterator.next());

console.log(iterator.next());

const name1 = "JS";

const iterator1 = name1[Symbol.iterator]();

console.log(iterator1.next());
console.log(iterator1.next());

const colors = ["Red", "Blue", "Green"];

for (const color of colors) {
    console.log(color);
}

// Generator
function* numbers4() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numbers4();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

function* counter() {
    let i = 1;

    while (true) {
        yield i++;
    }
}

const gen1 = counter();

console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);


function* cartItems() {
    yield "Laptop";
    yield "Mouse";
    yield "Keyboard";
}

const cart = cartItems();

console.log(cart.next().value);
console.log(cart.next().value);
console.log(cart.next().value);


