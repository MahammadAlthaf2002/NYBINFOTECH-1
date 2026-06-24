// Web Storage

// Web Storage is a browser feature that allows websites to store data on the user's browser. It provides two storage mechanisms:

// Local Storage
// Session Storage

// Benefits:

// Stores data as key-value pairs.
// Data is stored on the client side.
// More storage capacity than cookies.
// Data is not sent to the server with every request.
// Local Storage

// Local Storage stores data permanently (until manually deleted).

// Features
// Data persists even after closing the browser.
// Shared across all tabs/windows of the same origin.
// Storage limit is usually around 5–10 MB.

// Session Storage

// Session Storage stores data only for the current browser session.

// Features
// Data is removed when the tab/window is closed.
// Not shared between different tabs.
// Similar API to Local Storage.


localStorage.setItem("username", "Alice");



console.log(
    localStorage.getItem("username")
);

// Store data
localStorage.setItem("name", "John");

// Retrieve data
let name = localStorage.getItem("name");

// Remove data
localStorage.removeItem("name");

// Clear all data
// localStorage.clear();

localStorage.setItem("theme", "dark");

console.log(localStorage.getItem("theme"));

let age =
localStorage.getItem("age");

console.log(typeof age);

sessionStorage.setItem(
   "loggedIn",
   "true"
);

sessionStorage.setItem(
   "name",
   "Alice"
);

console.log(
   sessionStorage.getItem("name")
);


// Error Handling

try {
    console.log("x")
}
catch(error){
    console.log("error")
}

try {

   console.log("Try");

}
catch(error){

   console.log("Catch");

}
finally {

   console.log("Finally");

}



