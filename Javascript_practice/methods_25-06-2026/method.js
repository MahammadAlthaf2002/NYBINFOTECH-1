console.log("Hello World");

document.write("Hello World");

alert("Hello World");

var a=document.getElementById("demo")
a.innerHTML = "Hello World";

document.getElementById("demo").textContent = "Hello World";

window.alert("Welcome!");

history.back();
history.forward();

console.log(screen.width);
console.log(screen.height);

alert("Welcome!");

console.log("Browser:", navigator.userAgent);
console.log("URL:", location.href);

if (confirm("Reload page?")) {
    location.reload();
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

  async function getUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getUsers();

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 1,
    title: "Updated Title"
  })
})
.then(response => response.json())
.then(data => console.log(data));

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 1,
    title: "Updated Title"
  })
})
.then(response => response.json())
.then(data => console.log(data));



window.alert("mahammad althaf")