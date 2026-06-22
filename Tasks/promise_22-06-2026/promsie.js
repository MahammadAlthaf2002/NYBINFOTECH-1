// Promise.all()

var p1 = Promise.resolve("User Data");
var p2 = Promise.resolve("Posts Data");
var p3 = Promise.resolve("Comments Data");

Promise.all([p1, p2, p3])
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });

  // if fails

  var p1 = Promise.resolve("Success");
var  p2 = Promise.reject("API Failed");

Promise.all([p1, p2])
  .catch(error => {
    console.log(error);
  });

//   Promise.race()


var p1 = new Promise(function(resolve) {
  setTimeout(function() {
    resolve("Server 1");
  }, 3000);
});

var p2 = new Promise(function(resolve) {
  setTimeout(function() {
    resolve("Server 2");
  }, 1000);
});

Promise.race([p1, p2])
.then(function(result) {
  console.log(result);
});

var p1 = Promise.resolve("Success");
var p2 = Promise.reject("Failed");
var p3 = Promise.resolve("Completed");

Promise.allSettled([p1, p2, p3])
.then(function(results) {
  console.log(results);
});

var p1 = Promise.reject("Server 1 Failed");

var p2 = new Promise(function(resolve) {
  setTimeout(function() {
    resolve("Server 2 Success");
  }, 2000);
});

var p3 = Promise.resolve("Server 3 Success");

Promise.any([p1, p2, p3])
.then(function(result) {
  console.log(result);
});

async function greet() {

  var message = "Hello World";

  return message;
}

greet().then(function(result) {
  console.log(result);
});