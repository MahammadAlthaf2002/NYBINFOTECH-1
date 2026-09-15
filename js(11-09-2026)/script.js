// ============================================================
// SENIOR JAVASCRIPT MINI ASSESSMENT
// ============================================================
//
// Topics covered:
//
// 1. Synchronous vs Asynchronous JavaScript
// 2. setTimeout()
// 3. clearTimeout()
// 4. setInterval()
// 5. clearInterval()
// 6. Callback Functions
// 7. Callback Hell
// 8. Promises
// 9. then()
// 10. catch()
// 11. finally()
// 12. Promise.all()
// 13. Promise.race()
// 14. Promise.allSettled()
// 15. Promise.any()
// 16. Async/Await
// 17. Error Handling
// 18. Fetch API
// 19. GET
// 20. POST
// 21. PUT
// 22. PATCH
// 23. DELETE
// 24. Request / Response
// 25. Headers
// 26. JSON
// 27. Loading / Error Handling
// 28. JavaScript Modules
// 29. Iterators
// 30. Generators
// 31. Classes
// 32. Objects
// 33. Prototype
//
// ============================================================


// ============================================================
// DOM ELEMENTS
// ============================================================

const output = document.querySelector("#output");

const apiOutput =
  document.querySelector("#apiOutput");

const apiStatus =
  document.querySelector("#apiStatus");


// Helper function
function print(message) {

  output.textContent = String(message);

}


// ============================================================
// 1. SYNCHRONOUS VS ASYNCHRONOUS
// ============================================================

console.log(
  "1. Synchronous code started"
);

setTimeout(() => {

  console.log(
    "3. Asynchronous code executed"
  );

}, 0);

console.log(
  "2. Synchronous code completed"
);


// Output order:
//
// 1
// 2
// 3
//
// Because setTimeout is asynchronous.


// ============================================================
// 2. setTimeout()
// ============================================================

let timeoutId;

const timeoutBtn =
  document.querySelector("#timeoutBtn");


timeoutBtn.addEventListener(
  "click",
  () => {

    clearTimeout(timeoutId);

    timeoutId = setTimeout(
      () => {

        print(
          "setTimeout(): Executed after 3 seconds."
        );

      },
      3000
    );

    print(
      "Timeout started.\n\n" +
      "Wait 3 seconds..."
    );

  }
);


// ============================================================
// 3. clearTimeout()
// ============================================================

const cancelTimeoutBtn =
  document.querySelector(
    "#cancelTimeoutBtn"
  );


cancelTimeoutBtn.addEventListener(
  "click",
  () => {

    clearTimeout(timeoutId);

    print(
      "clearTimeout(): Timeout cancelled."
    );

  }
);


// ============================================================
// 4. setInterval()
// ============================================================

let intervalId;

let seconds = 0;


const intervalBtn =
  document.querySelector(
    "#intervalBtn"
  );


intervalBtn.addEventListener(
  "click",
  () => {

    clearInterval(intervalId);

    seconds = 0;

    intervalId = setInterval(
      () => {

        seconds++;

        print(
          `setInterval(): ${seconds} second(s) passed.`
        );

        if (seconds === 10) {

          clearInterval(intervalId);

          print(
            "Counter automatically stopped at 10 seconds."
          );

        }

      },
      1000
    );

  }
);


// ============================================================
// 5. clearInterval()
// ============================================================

const cancelIntervalBtn =
  document.querySelector(
    "#cancelIntervalBtn"
  );


cancelIntervalBtn.addEventListener(
  "click",
  () => {

    clearInterval(intervalId);

    print(
      "clearInterval(): Counter stopped."
    );

  }
);


// ============================================================
// 6. CALLBACK FUNCTION
// ============================================================

function getUser(callback) {

  setTimeout(
    () => {

      const user = {

        id: 101,

        name: "Althaf"

      };

      callback(user);

    },
    500
  );

}


function getOrders(
  userId,
  callback
) {

  setTimeout(
    () => {

      const orders = [

        "Laptop",

        "Phone",

        "Headphones"

      ];

      callback(orders);

    },
    500
  );

}


getUser(
  (user) => {

    console.log(
      "User:",
      user
    );

    getOrders(
      user.id,
      (orders) => {

        console.log(
          "Orders:",
          orders
        );

      }
    );

  }
);


// ============================================================
// 7. CALLBACK HELL
// ============================================================
//
// Example:
//
// getUser(() => {
//
//   getOrders(() => {
//
//     processPayment(() => {
//
//       sendEmail(() => {
//
//         ...
//
//       });
//
//     });
//
//   });
//
// });
//
// Too many nested callbacks become difficult to maintain.
//
// Promises and async/await solve this problem.


// ============================================================
// 8. PROMISE
// ============================================================

function createPromise(
  success = true,
  delay = 1000
) {

  return new Promise(
    (resolve, reject) => {

      setTimeout(
        () => {

          if (success) {

            resolve(
              "Promise resolved successfully."
            );

          } else {

            reject(
              new Error(
                "Promise rejected."
              )
            );

          }

        },
        delay
      );

    }
  );

}


// ============================================================
// 9. then()
// 10. catch()
// 11. finally()
// ============================================================

const promiseBtn =
  document.querySelector(
    "#promiseBtn"
  );


promiseBtn.addEventListener(
  "click",
  () => {

    print(
      "Promise is pending..."
    );


    createPromise(true)

      .then(
        (result) => {

          print(
            `.then(): ${result}`
          );

        }
      )

      .catch(
        (error) => {

          print(
            `.catch(): ${error.message}`
          );

        }
      )

      .finally(
        () => {

          console.log(
            ".finally(): Promise completed."
          );

        }
      );

  }
);


// ============================================================
// HELPER PROMISE FUNCTION
// ============================================================

function task(
  name,
  delay,
  success = true
) {

  return new Promise(
    (resolve, reject) => {

      setTimeout(
        () => {

          if (success) {

            resolve(
              `${name} completed`
            );

          } else {

            reject(
              new Error(
                `${name} failed`
              )
            );

          }

        },
        delay
      );

    }
  );

}


// ============================================================
// 12. Promise.all()
// ============================================================
//
// Promise.all waits for ALL promises.
//
// If one fails,
// Promise.all fails.


// ============================================================

const promiseAllBtn =
  document.querySelector(
    "#promiseAllBtn"
  );


promiseAllBtn.addEventListener(
  "click",
  async () => {

    try {

      const results =
        await Promise.all(
          [

            task(
              "User API",
              1000
            ),

            task(
              "Products API",
              1500
            ),

            task(
              "Orders API",
              700
            )

          ]
        );


      print(
        "Promise.all():\n\n" +
        results.join("\n")
      );

    } catch (error) {

      print(
        `Promise.all() failed:\n${error.message}`
      );

    }

  }
);


// ============================================================
// 13. Promise.race()
// ============================================================
//
// Returns the first settled promise.
//
// It can be either:
// fulfilled OR rejected.


// ============================================================

const raceBtn =
  document.querySelector(
    "#raceBtn"
  );


raceBtn.addEventListener(
  "click",
  async () => {

    try {

      const result =
        await Promise.race(
          [

            task(
              "Server A",
              1800
            ),

            task(
              "Server B",
              700
            ),

            task(
              "Server C",
              1200
            )

          ]
        );


      print(
        `Promise.race():\n\n${result}`
      );

    } catch (error) {

      print(
        `Promise.race() failed:\n${error.message}`
      );

    }

  }
);


// ============================================================
// 14. Promise.allSettled()
// ============================================================
//
// Waits for every promise.
//
// Gives status:
//
// fulfilled
// rejected
//
// Even if one fails,
// it does not stop the others.


// ============================================================

const settledBtn =
  document.querySelector(
    "#settledBtn"
  );


settledBtn.addEventListener(
  "click",
  async () => {

    const results =
      await Promise.allSettled(
        [

          task(
            "Task A",
            500,
            true
          ),

          task(
            "Task B",
            800,
            false
          ),

          task(
            "Task C",
            300,
            true
          )

        ]
      );


    const formatted =
      results.map(
        (item) => {

          if (
            item.status ===
            "fulfilled"
          ) {

            return (
              `fulfilled: ${item.value}`
            );

          }

          return (
            `rejected: ${item.reason.message}`
          );

        }
      );


    print(
      "Promise.allSettled():\n\n" +
      formatted.join("\n")
    );

  }
);


// ============================================================
// 15. Promise.any()
// ============================================================
//
// Returns the first FULFILLED promise.
//
// Rejected promises are ignored
// until every promise fails.


// ============================================================

const anyBtn =
  document.querySelector(
    "#anyBtn"
  );


anyBtn.addEventListener(
  "click",
  async () => {

    try {

      const result =
        await Promise.any(
          [

            task(
              "API 1",
              900,
              false
            ),

            task(
              "API 2",
              1300,
              true
            ),

            task(
              "API 3",
              500,
              false
            )

          ]
        );


      print(
        "Promise.any():\n\n" +
        result
      );

    } catch (error) {

      print(
        "Promise.any():\n\n" +
        "All promises rejected."
      );

    }

  }
);


// ============================================================
// 16. ASYNC / AWAIT
// ============================================================

async function asyncDemo() {

  try {

    const result =
      await createPromise(
        true,
        1000
      );

    console.log(
      "Async/Await:",
      result
    );

  } catch (error) {

    console.error(
      error.message
    );

  }

}


asyncDemo();


// ============================================================
// 17. ERROR HANDLING
// ============================================================

async function errorHandlingDemo() {

  try {

    await createPromise(
      false,
      500
    );

  } catch (error) {

    console.log(
      "Error caught:",
      error.message
    );

  } finally {

    console.log(
      "Finally block executed."
    );

  }

}


errorHandlingDemo();


// ============================================================
// 18. FETCH API
// ============================================================

const API =
  "https://jsonplaceholder.typicode.com/posts";


// Common request function
async function request(
  url,
  options = {}
) {

  apiStatus.textContent =
    "Loading...";


  try {

    const response =
      await fetch(
        url,
        options
      );


    // Response status check

    if (!response.ok) {

      throw new Error(
        `HTTP Error: ${response.status}`
      );

    }


    // Convert response JSON

    const data =
      await response.json();


    apiStatus.textContent =
      `Success: ${response.status} ${response.statusText}`;


    apiOutput.textContent =
      JSON.stringify(
        data,
        null,
        2
      );


    return data;


  } catch (error) {

    apiStatus.textContent =
      `Error: ${error.message}`;


    apiOutput.textContent =
      error.message;


    throw error;


  } finally {

    console.log(
      "API request completed."
    );

  }

}


// ============================================================
// 19. GET REQUEST
// ============================================================

const getBtn =
  document.querySelector(
    "#getBtn"
  );


getBtn.addEventListener(
  "click",
  async () => {

    try {

      await request(
        `${API}/1`
      );

    } catch (error) {

      console.error(error);

    }

  }
);


// ============================================================
// 20. POST REQUEST
// ============================================================
//
// POST creates a new resource.
//
// Headers tell server that
// request body contains JSON.


// ============================================================

const postBtn =
  document.querySelector(
    "#postBtn"
  );


postBtn.addEventListener(
  "click",
  async () => {

    try {

      await request(
        API,
        {

          method: "POST",

          headers: {

            "Content-Type":
              "application/json"

          },

          body:
            JSON.stringify(
              {

                title:
                  "Senior Assessment",

                body:
                  "Testing POST request",

                userId: 1

              }
            )

        }
      );

    } catch (error) {

      console.error(error);

    }

  }
);


// ============================================================
// 21. PUT REQUEST
// ============================================================
//
// PUT normally replaces
// the complete resource.


// ============================================================

const putBtn =
  document.querySelector(
    "#putBtn"
  );


putBtn.addEventListener(
  "click",
  async () => {

    try {

      await request(
        `${API}/1`,
        {

          method: "PUT",

          headers: {

            "Content-Type":
              "application/json"

          },

          body:
            JSON.stringify(
              {

                id: 1,

                title:
                  "Updated Complete Title",

                body:
                  "Updated complete body",

                userId: 1

              }
            )

        }
      );

    } catch (error) {

      console.error(error);

    }

  }
);


// ============================================================
// 22. PATCH REQUEST
// ============================================================
//
// PATCH updates only selected fields.


// ============================================================

const patchBtn =
  document.querySelector(
    "#patchBtn"
  );


patchBtn.addEventListener(
  "click",
  async () => {

    try {

      await request(
        `${API}/1`,
        {

          method: "PATCH",

          headers: {

            "Content-Type":
              "application/json"

          },

          body:
            JSON.stringify(
              {

                title:
                  "Partially Updated Title"

              }

            )

        }
      );

    } catch (error) {

      console.error(error);

    }

  }
);


// ============================================================
// 23. DELETE REQUEST
// ============================================================

const deleteBtn =
  document.querySelector(
    "#deleteBtn"
  );


deleteBtn.addEventListener(
  "click",
  async () => {

    try {

      await request(
        `${API}/1`,
        {

          method: "DELETE"

        }
      );

    } catch (error) {

      console.error(error);

    }

  }
);


// ============================================================
// 24. CLASS
// 25. OBJECT
// 26. PROTOTYPE
// ============================================================

class User {

  constructor(
    name,
    role
  ) {

    this.name = name;

    this.role = role;

  }


  getInfo() {

    return (
      `${this.name} is a ${this.role}.`
    );

  }

}


// ============================================================
// PROTOTYPE
// ============================================================
//
// Class methods are stored on
// User.prototype.
//
// ============================================================

console.log(
  "User.prototype:",
  User.prototype
);


const classBtn =
  document.querySelector(
    "#classBtn"
  );


classBtn.addEventListener(
  "click",
  () => {

    const input =
      document.querySelector(
        "#userName"
      );


    const name =
      input.value.trim() ||
      "Guest";


    // Creating object
    const user =
      new User(
        name,
        "Developer"
      );


    const classOutput =
      document.querySelector(
        "#classOutput"
      );


    classOutput.textContent =
      `User Info: ${user.getInfo()}\n\n` +

      `Object:\n${JSON.stringify(
        user,
        null,
        2
      )}\n\n` +

      `Prototype method exists: ${
        typeof user.getInfo ===
        "function"
      }`;

  }
);


// ============================================================
// 27. ITERATORS
// ============================================================
//
// An iterator gives values one by one.
//
// Symbol.iterator
// next()
// value
// done
//
// ============================================================

const iteratorBtn =
  document.querySelector(
    "#iteratorBtn"
  );


iteratorBtn.addEventListener(
  "click",
  () => {

    const products = [

      "Laptop",

      "Phone",

      "Watch"

    ];


    // Get iterator

    const iterator =
      products[
        Symbol.iterator
      ];


    const first =
      iterator.next();


    const second =
      iterator.next();


    const third =
      iterator.next();


    const finished =
      iterator.next();


    print(
      "Iterator Results:\n\n" +

      JSON.stringify(
        first
      ) +

      "\n\n" +

      JSON.stringify(
        second
      ) +

      "\n\n" +

      JSON.stringify(
        third
      ) +

      "\n\n" +

      JSON.stringify(
        finished
      )

    );

  }
);


// ============================================================
// 28. GENERATORS
// ============================================================
//
// Generator function uses:
//
// function*
//
// and:
//
// yield
//
// ============================================================

function* orderGenerator() {

  yield "Order received";

  yield "Payment completed";

  yield "Order packed";

  yield "Order shipped";

}


// ============================================================

const generatorBtn =
  document.querySelector(
    "#generatorBtn"
  );


generatorBtn.addEventListener(
  "click",
  () => {

    const generator =
      orderGenerator();


    const result = [];


    result.push(
      generator.next().value
    );


    result.push(
      generator.next().value
    );


    result.push(
      generator.next().value
    );


    result.push(
      generator.next().value
    );


    const finalResult =
      generator.next();


    result.push(
      `Done: ${finalResult.done}`
    );


    print(
      "Generator Results:\n\n" +
      result.join("\n")
    );

  }
);


// ============================================================
// 29. JAVASCRIPT MODULES
// ============================================================
//
// index.html uses:
//
// <script type="module"
//         src="./script.js">
// </script>
//
// This means JavaScript runs as an ES module.
//
// In a larger project:
//
// utils.js
//
// export function add(a, b) {
//   return a + b;
// }
//
// app.js
//
// import { add }
// from "./utils.js";
//
// ============================================================


// ============================================================
// END OF SENIOR ASSESSMENT
// ============================================================

console.log(
  "Senior JavaScript Assessment Loaded Successfully."
);