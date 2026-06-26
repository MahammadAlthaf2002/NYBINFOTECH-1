localStorage.setItem(
    "username",
    "Rahul"
);
let user =
localStorage.getItem("username");

console.log(user);
localStorage.removeItem(
    "username"
);
const student = {
    id: 101,
    name: "Rahul",
    course: "JavaScript"
};
localStorage.setItem(
    "student",
    JSON.stringify(student)
);
const data = JSON.parse(
    localStorage.getItem("student")
);

console.log(data.name);

sessionStorage.setItem(
    "email",
    "abc@gmail.com"
);

let email =
sessionStorage.getItem("email");

console.log(email);

// sessionStorage.removeItem(
//     "email"
// );

try {

    let result = 10 / 2;

    console.log(result);

}
catch(error) {

    console.log(error.message);

}

try {

    console.log("Try Block");

}
catch(error) {

    console.log("Catch Block");

}
finally {

    console.log("Finally Block");

}

