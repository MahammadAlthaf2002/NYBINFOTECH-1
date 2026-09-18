// ============================================================
// ASYNC TASK MANAGER
// Async JavaScript + Modern JavaScript + OOP
// ============================================================


// ============================================================
// 1. DOM ELEMENTS
// ============================================================

var taskInput = document.getElementById("taskInput");
var addBtn = document.getElementById("addBtn");
var taskList = document.getElementById("taskList");

var asyncOutput = document.getElementById("asyncOutput");
var fetchOutput = document.getElementById("fetchOutput");
var oopOutput = document.getElementById("oopOutput");

var tasks = [];


// ============================================================
// 2. OBJECTS
// ============================================================

var user = {
    name: "Althaf",
    role: "JavaScript Developer",
    experience: 1
};

console.log("Object:", user);


// ============================================================
// 3. DESTRUCTURING
// ============================================================

var { name, role } = user;

console.log("Name:", name);
console.log("Role:", role);


// ============================================================
// 4. TEMPLATE LITERALS
// ============================================================

console.log(`Hello ${name}, you are learning ${role}`);


// ============================================================
// 5. SPREAD OPERATOR
// ============================================================

var oldTasks = ["HTML", "CSS"];

var newTasks = [...oldTasks, "JavaScript", "React"];

console.log("Spread:", newTasks);


// ============================================================
// 6. REST OPERATOR
// ============================================================

function showTasks(first, ...remaining) {

    console.log("First:", first);
    console.log("Remaining:", remaining);

}

showTasks("HTML", "CSS", "JavaScript", "React");


// ============================================================
// 7. OPTIONAL CHAINING
// ============================================================

console.log(user.address?.city);


// ============================================================
// 8. NULLISH COALESCING
// ============================================================

var username = user.username ?? "Guest";

console.log("Username:", username);


// ============================================================
// 9. TASK MANAGER
// ============================================================

addBtn.addEventListener("click", addTask);


function addTask() {

    var value = taskInput.value.trim();

    if (value === "") {

        alert("Enter a task");

        return;
    }

    var task = {
        id: Date.now(),
        title: value,
        completed: false
    };

    tasks = [...tasks, task];

    taskInput.value = "";

    displayTasks();
}


function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach(function(task) {

        var li = document.createElement("li");

        li.innerHTML = `
            <span>
                ${task.title}
            </span>

            <button onclick="completeTask(${task.id})">
                Complete
            </button>

            <button onclick="deleteTask(${task.id})">
                Delete
            </button>
        `;

        taskList.appendChild(li);

    });
}


function completeTask(id) {

    tasks = tasks.map(function(task) {

        if (task.id === id) {

            return {
                ...task,
                completed: true
            };

        }

        return task;

    });

    displayTasks();
}


function deleteTask(id) {

    tasks = tasks.filter(function(task) {

        return task.id !== id;

    });

    displayTasks();
}


// ============================================================
// 10. SYNCHRONOUS JAVASCRIPT
// ============================================================

function syncDemo() {

    console.log("Sync 1");
    console.log("Sync 2");
    console.log("Sync 3");

    asyncOutput.innerHTML =
        "Synchronous: 1 → 2 → 3";

}


// ============================================================
// 11. setTimeout()
// ============================================================

function timeoutDemo() {

    console.log("Start");

    setTimeout(function() {

        console.log("setTimeout executed");

    }, 2000);

    console.log("End");

}


// ============================================================
// 12. setInterval()
// ============================================================

var count = 0;

var interval = setInterval(function() {

    count++;

    console.log("Interval:", count);

    if (count === 5) {

        clearInterval(interval);

        console.log("Interval stopped");

    }

}, 1000);


// ============================================================
// 13. ASYNCHRONOUS JAVASCRIPT
// ============================================================

function asyncDemo() {

    asyncOutput.innerHTML = "Loading...";

    console.log("Start");

    setTimeout(function() {

        console.log("Async operation completed");

        asyncOutput.innerHTML =
            "Async operation completed after 2 seconds";

    }, 2000);

    console.log("End");

}


// ============================================================
// 14. CALL STACK + EVENT LOOP
// ============================================================

function eventLoopDemo() {

    console.clear();

    console.log("1 - Start");

    setTimeout(function() {

        console.log("2 - setTimeout");

    }, 0);

    Promise.resolve().then(function() {

        console.log("3 - Promise");

    });

    console.log("4 - End");

}


// Output:
// 1 - Start
// 4 - End
// 3 - Promise
// 2 - setTimeout
//
// Microtask Queue (Promise) executes before
// Callback Queue (setTimeout).


// ============================================================
// 15. PROMISE
// ============================================================

function createTask() {

    return new Promise(function(resolve, reject) {

        var success = true;

        setTimeout(function() {

            if (success) {

                resolve("Task completed successfully");

            } else {

                reject("Task failed");

            }

        }, 1500);

    });

}


// ============================================================
// 16. .then()
// 17. .catch()
// 18. .finally()
// ============================================================

function promiseDemo() {

    asyncOutput.innerHTML = "Promise running...";

    createTask()

        .then(function(result) {

            console.log(result);

            asyncOutput.innerHTML = result;

        })

        .catch(function(error) {

            console.log(error);

            asyncOutput.innerHTML = error;

        })

        .finally(function() {

            console.log("Promise finished");

        });

}


// ============================================================
// 19. PROMISE.ALL()
// ============================================================

function promiseAllDemo() {

    var p1 = Promise.resolve("HTML completed");
    var p2 = Promise.resolve("CSS completed");
    var p3 = Promise.resolve("JavaScript completed");

    Promise.all([p1, p2, p3])

        .then(function(result) {

            console.log("Promise.all:", result);

        })

        .catch(function(error) {

            console.log(error);

        });

}


// ============================================================
// 20. PROMISE.RACE()
// ============================================================

function promiseRaceDemo() {

    var p1 = new Promise(function(resolve) {

        setTimeout(function() {

            resolve("API 1");

        }, 2000);

    });

    var p2 = new Promise(function(resolve) {

        setTimeout(function() {

            resolve("API 2");

        }, 1000);

    });

    Promise.race([p1, p2])

        .then(function(result) {

            console.log("Race winner:", result);

        });

}


// ============================================================
// 21. PROMISE.ALLSETTLED()
// ============================================================

function promiseAllSettledDemo() {

    var p1 = Promise.resolve("Success");

    var p2 = Promise.reject("Failed");

    Promise.allSettled([p1, p2])

        .then(function(result) {

            console.log("All Settled:", result);

        });

}


// ============================================================
// 22. PROMISE.ANY()
// ============================================================

function promiseAnyDemo() {

    var p1 = Promise.reject("API 1 failed");

    var p2 = Promise.resolve("API 2 success");

    var p3 = Promise.reject("API 3 failed");

    Promise.any([p1, p2, p3])

        .then(function(result) {

            console.log("First successful:", result);

        })

        .catch(function(error) {

            console.log(error);

        });

}


// ============================================================
// 23. ASYNC / AWAIT
// ============================================================

async function asyncAwaitDemo() {

    try {

        var result = await createTask();

        console.log("Async/Await:", result);

    } catch (error) {

        console.log("Error:", error);

    } finally {

        console.log("Async/Await completed");

    }

}


// ============================================================
// 24. ERROR HANDLING
// ============================================================

function errorDemo() {

    try {

        var result = undefined;

        console.log(result.name);

    } catch (error) {

        console.log("Error:", error.message);

    } finally {

        console.log("Finally executed");

    }

}


// ============================================================
// 25. FETCH API - GET
// ============================================================

async function getUsers() {

    try {

        fetchOutput.innerHTML = "Loading users...";

        var response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {

            throw new Error("Failed to fetch users");

        }

        var data = await response.json();

        console.log("GET:", data);

        fetchOutput.innerHTML =
            `<pre>${JSON.stringify(data.slice(0, 3), null, 2)}</pre>`;

    } catch (error) {

        fetchOutput.innerHTML =
            "Error: " + error.message;

    }

}


// ============================================================
// 26. FETCH - POST
// ============================================================

async function createUser() {

    try {

        var response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: "Althaf",
                    email: "althaf@example.com"
                })
            }
        );

        var data = await response.json();

        console.log("POST:", data);

    } catch (error) {

        console.log(error);

    }

}


// ============================================================
// 27. FETCH - PUT
// ============================================================

async function updateUser() {

    var response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: "Updated User",
                email: "updated@example.com"
            })
        }
    );

    var data = await response.json();

    console.log("PUT:", data);

}


// ============================================================
// 28. FETCH - PATCH
// ============================================================

async function patchUser() {

    var response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
            method: "PATCH",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: "Patched User"
            })
        }
    );

    var data = await response.json();

    console.log("PATCH:", data);

}


// ============================================================
// 29. FETCH - DELETE
// ============================================================

async function deleteUser() {

    var response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
            method: "DELETE"
        }
    );

    console.log("DELETE status:", response.status);

}


// ============================================================
// 30. MAP
// ============================================================

var userMap = new Map();

userMap.set(1, "Althaf");
userMap.set(2, "Rahul");
userMap.set(3, "John");

console.log("Map:", userMap);

console.log("Map value:", userMap.get(1));


// ============================================================
// 31. SET
// ============================================================

var technologies = new Set();

technologies.add("JavaScript");
technologies.add("React");
technologies.add("JavaScript");
technologies.add("HTML");

console.log("Set:", technologies);


// Duplicate JavaScript is automatically removed.


// ============================================================
// 32. WEAKMAP
// ============================================================

var weakMap = new WeakMap();

var employee = {
    name: "Althaf"
};

weakMap.set(employee, "Developer");

console.log("WeakMap:", weakMap.get(employee));


// ============================================================
// 33. WEAKSET
// ============================================================

var weakSet = new WeakSet();

var object1 = {};
var object2 = {};

weakSet.add(object1);
weakSet.add(object2);

console.log(
    "WeakSet contains object1:",
    weakSet.has(object1)
);


// ============================================================
// 34. CONSTRUCTOR FUNCTION
// ============================================================

function Employee(name, role) {

    this.name = name;
    this.role = role;

}

Employee.prototype.getDetails = function() {

    return this.name + " - " + this.role;

};

var employee1 = new Employee(
    "Althaf",
    "JavaScript Developer"
);

console.log(
    "Constructor Function:",
    employee1.getDetails()
);


// ============================================================
// 35. CLASS
// ============================================================

class TaskManager {

    constructor(name) {

        this.name = name;
        this.tasks = [];

    }

    addTask(task) {

        this.tasks.push(task);

    }

    showTasks() {

        return this.tasks;

    }

}


var manager = new TaskManager("Main Manager");

manager.addTask("Learn JavaScript");
manager.addTask("Learn React");

console.log(
    "Class:",
    manager.showTasks()
);


// ============================================================
// 36. INHERITANCE
// 37. extends
// 38. super
// ============================================================

class Developer extends TaskManager {

    constructor(name, language) {

        super(name);

        this.language = language;

    }

    showDeveloper() {

        return `${this.name} - ${this.language}`;

    }

}


var developer = new Developer(
    "Althaf",
    "JavaScript"
);

developer.addTask("Practice Async JS");

console.log(
    "Inheritance:",
    developer.showDeveloper()
);

console.log(
    "Developer Tasks:",
    developer.showTasks()
);


// ============================================================
// 39. ENCAPSULATION
// ============================================================

class BankAccount {

    #balance = 0;

    deposit(amount) {

        this.#balance += amount;

    }

    getBalance() {

        return this.#balance;

    }

}


var account = new BankAccount();

account.deposit(5000);

console.log(
    "Private Balance:",
    account.getBalance()
);


// ============================================================
// 40. PROTOTYPE CHAIN
// ============================================================

var animal = {

    eat: function() {

        return "Animal is eating";

    }

};

var dog = {

    bark: function() {

        return "Dog is barking";

    }

};

Object.setPrototypeOf(dog, animal);

console.log(dog.bark());

console.log(dog.eat());


// dog
// ↓
// animal
// ↓
// Object.prototype
// ↓
// null


// ============================================================
// 41. ITERATOR
// ============================================================

var numbers = [10, 20, 30];

var iterator = numbers[Symbol.iterator]();

console.log("Iterator:", iterator.next());

console.log("Iterator:", iterator.next());

console.log("Iterator:", iterator.next());

console.log("Iterator:", iterator.next());


// ============================================================
// 42. GENERATOR
// ============================================================

function* taskGenerator() {

    yield "Learn HTML";

    yield "Learn CSS";

    yield "Learn JavaScript";

    yield "Learn React";

}


var generator = taskGenerator();

console.log("Generator:", generator.next());

console.log("Generator:", generator.next());

console.log("Generator:", generator.next());

console.log("Generator:", generator.next());


// ============================================================
// 43. GENERATOR WITH LOOP
// ============================================================

function* numberGenerator() {

    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;

}

for (var number of numberGenerator()) {

    console.log("Generated:", number);

}


// ============================================================
// 44. OOP DEMO FOR UI
// ============================================================

function oopDemo() {

    var manager = new TaskManager("Althaf");

    manager.addTask("HTML");
    manager.addTask("CSS");
    manager.addTask("JavaScript");

    oopOutput.innerHTML = `
        <h3>OOP Demo</h3>

        <p><strong>Class:</strong>
        TaskManager</p>

        <p><strong>Object:</strong>
        ${manager.name}</p>

        <p><strong>Tasks:</strong>
        ${manager.showTasks().join(", ")}</p>

        <p><strong>Inheritance:</strong>
        Developer extends TaskManager</p>

        <p><strong>Encapsulation:</strong>
        BankAccount uses #balance</p>

        <p><strong>Prototype:</strong>
        Employee.prototype.getDetails()</p>

        <p><strong>Generator:</strong>
        Uses yield to produce values</p>
    `;

}


// ============================================================
// 45. RUN SOME DEMOS
// ============================================================

displayTasks();

console.log("=================================");
console.log("ASYNC TASK MANAGER STARTED");
console.log("=================================");

console.log("Try these functions:");

console.log("syncDemo()");
console.log("asyncDemo()");
console.log("timeoutDemo()");
console.log("eventLoopDemo()");
console.log("promiseDemo()");
console.log("promiseAllDemo()");
console.log("promiseRaceDemo()");
console.log("promiseAllSettledDemo()");
console.log("promiseAnyDemo()");
console.log("asyncAwaitDemo()");
console.log("errorDemo()");
console.log("getUsers()");
console.log("createUser()");
console.log("updateUser()");
console.log("patchUser()");
console.log("deleteUser()");
console.log("oopDemo()");