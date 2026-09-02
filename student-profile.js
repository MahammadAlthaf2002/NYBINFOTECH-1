// JavaScript Objects - Mini Task

const student = {
    name: "Althaf",
    age: 24,
    course: "JavaScript",
    address: {
        city: "Anantapur",
        state: "Andhra Pradesh"
    }
};

// 1. Accessing object
console.log("Name:", student.name);

// 2. Nested object
console.log("City:", student.address.city);

// 3. Object Destructuring + Rest Operator
const { name, age, ...otherDetails } = student;
console.log("Destructured:", name, age);
console.log("Other Details:", otherDetails);

// 4. Spread Operator
const updatedStudent = {
    ...student,
    age: 25
};
console.log("Updated Student:", updatedStudent);

// 5. Object.keys()
console.log("Keys:", Object.keys(student));

// 6. Object.values()
console.log("Values:", Object.values(student));

// 7. Object.entries()
console.log("Entries:", Object.entries(student));

// 8. Optional Chaining
console.log("Phone:", student.contact?.phone);

// 9. Nullish Coalescing
const phone = student.contact?.phone ?? "Not Available";
console.log("Final Phone:", phone);
