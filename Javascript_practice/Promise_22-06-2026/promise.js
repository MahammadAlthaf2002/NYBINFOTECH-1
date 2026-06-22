console.log("start")
setTimeout (() =>{
    console.log("wait")
},3000)
console.log("End")


function fatchdata (callback){
    setTimeout (() =>{
        callback("data fatched")
    })

}
fatchdata( (data)=>{
    console.log("data")
})


const promise = new Promise((resolve, reject) => {

  let success = true;

  if(success){
    resolve("Task completed");
  } else {
    reject("Task failed");
  }

});

promise
 .then(result => {
    console.log(result);
 })
 .catch(error => {
    console.log(error);
 });


 var student = new Promise((resolve,reject)=>{
    let pass = true
    if (pass){
        resolve("student pass")
    } else{
        reject("student fail")
    }


 } )

 student
 .then(passed =>{
    console.log( passed)
 })
 .catch(failed=>{
    console.log( failed)
 })

 var promise1 = new Promise ((resolve ,reject) => {
  setTimeout(()=>{
    resolve("dataresloved")
  } , 2000)
 })
 promise1.then ((promise)=>{
    console.log(promise)
 })


  var promise1 = new Promise ((resolve ,reject) => {
  setTimeout(()=>{
    reject("network error")
  } , 2000)
 })
 promise1.catch ((promise)=>{
    console.log(promise)
 })


//  Promise.all()

// Runs all promises simultaneously.
// Waits for every promise to complete.
// If one fails → entire operation fails.


var p1 = Promise.resolve("A")
var p2 = Promise.resolve("B")
var p3 = Promise.resolve("C")

Promise.all([p1,p2,p3])
.then ((promise)=>{
    console.log(promise)
})


var p1 =Promise.resolve(10)
var p2 = Promise.resolve(20)
Promise.all([p1,p2])

.then(([a,b])=>
{
    console.log(a+b)
})



var p1 = Promise.resolve("a")
var p2 = Promise.reject("failed")

Promise.all([p1,p2])
.catch((promise)=>
{
    console.log(promise)
})


// Promise.allSettled()

// Waits for all promises.

// Even if some fail.

// Never stops midway.

// Useful when every result matters.



var p1 = Promise.resolve("pass")
var p2 = Promise.reject("failed")

Promise.allSettled([p1,p2])
.then((promise)=>
{
    console.log(promise)
})

// Promise.race()


// Returns whichever promise settles first.

// Could be:

// Resolve
// Reject

// Whichever comes first wins.


var p1 = new Promise((resolve) => {
    setTimeout(()=>{
        resolve("p1 won the race -passed")
    } ,30000)
});
var p2 = new Promise((resolve) => {
    setTimeout(()=>{
        resolve("p2 won the race -passed")
    },2000)
});

Promise.race([p1,p2])
.then((promise)=>
{
    console.log(promise)
});

var p1 = new Promise((resolve) => {
    setTimeout(()=>{
        resolve("p1 won the race -passsed")
    } ,30000)
});
var p2 = new Promise((reject) => {
    setTimeout(()=>{
        reject("p2 failed")
    },2000)
});

Promise.race([p1,p2])
.then((promise)=>
{
    console.log(promise)
});


Promise.race([
    Promise.resolve("passed")
       

])

.then(
console.log);

// Promise.any()

// Theory

// Returns first successful promise.

// Ignores rejected promises.

// Fails only when all promises fail.

Promise.any([
 Promise.reject("A"),
 Promise.resolve("B"),
 Promise.resolve("C")
])
.then(console.log);


var p1 = new Promise((resolve) => {
    setTimeout(()=>{
        resolve("p1 won the race -passsed")
    } ,30000)
});
var p2 = new Promise((reject) => {
    setTimeout(()=>{
        reject("p2 failed")
    },2000)
});

Promise.any([p1,p2])
.then((promise)=>
{
    console.log(promise)
});

// await Keyword

// Waits for Promise completion.

// Only works inside async functions.

// await is one of the most important JavaScript keywords for asynchronous programming.
//  It can make asynchronous code look and behave almost like synchronous code.

var p = new Promise((resolve, reject) => {
    resolve("await function");
});

async function p5(){ 
    var p1 = await p;
    console.log(p1);
}

p5();

var p = new Promise((resolve, reject) => {
    setTimeout(() =>{ 
    resolve("await function");
    },2000)
});



async function p5(){ 
    var p1 = await p;
    console.log(p1);
}

p5();

async function run() {
  const p1 = Promise.resolve(10);
  const p2 = Promise.resolve(20);

  const [a, b] = await Promise.all([p1, p2]);

  console.log(a + b);
}

run();