// OBJECT MASTER - MINI ASSESSMENT
// Topics covered:
// 1. Creating and accessing objects
// 2. Nested objects
// 3. Object destructuring
// 4. Spread operator
// 5. Rest operator
// 6. Object.keys()
// 7. Object.values()
// 8. Object.entries()
// 9. Optional chaining (?.)
// 10. Nullish coalescing (??)

// --------------------------------------------------
// 1. CREATING AND ACCESSING OBJECTS
// --------------------------------------------------
const student = {
  id: 101,
  name: "Althaf",
  course: "JavaScript",
  score: 86,

  // 2. NESTED OBJECT
  address: {
    city: "Anantapur",
    state: "Andhra Pradesh"
  },

  skills: ["HTML", "CSS", "JavaScript", "React"]
};

// Accessing properties
console.log("Student:", student.name);
console.log("Course:", student["course"]);
console.log("City:", student.address.city);

// --------------------------------------------------
// 3. OBJECT DESTRUCTURING
// --------------------------------------------------
const { name, course, score } = student;
const { city, state } = student.address;

console.log("Destructured:", name, course, score);
console.log("Address:", city, state);

// Nested destructuring
const {
  address: { city: studentCity }
} = student;

console.log("Nested destructuring city:", studentCity);

// --------------------------------------------------
// 4. SPREAD OPERATOR
// Create a new object without changing the original.
// --------------------------------------------------
const updatedStudent = {
  ...student,
  score: 92,
  level: "Advanced"
};

console.log("Updated student:", updatedStudent);
console.log("Original student still:", student);

// Spread is also useful for merging objects.
const extraDetails = {
  status: "Active",
  enrolledYear: 2026
};

const completeStudent = {
  ...student,
  ...extraDetails
};

console.log("Merged object:", completeStudent);

// --------------------------------------------------
// 5. REST OPERATOR
// Collect remaining properties into another object.
// --------------------------------------------------
const {
  id,
  name: studentName,
  ...otherStudentDetails
} = completeStudent;

console.log("ID:", id);
console.log("Name:", studentName);
console.log("Remaining details:", otherStudentDetails);

// Function example using rest
function showStudentDetails({ name, course, ...rest }) {
  console.log("Main details:", name, course);
  console.log("Other details:", rest);
}

showStudentDetails(completeStudent);

// --------------------------------------------------
// PRODUCTS DATA
// --------------------------------------------------
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 55000,
    category: "Electronics",
    stock: 8,
    seller: {
      name: "Tech Store",
      rating: 4.6
    }
  },
  {
    id: 2,
    name: "Headphones",
    price: 2500,
    category: "Accessories",
    stock: 15,
    seller: {
      name: "Audio Hub",
      rating: 4.3
    }
  },
  {
    id: 3,
    name: "Keyboard",
    price: 1800,
    category: "Accessories",
    stock: 0,
    seller: null
  }
];

// --------------------------------------------------
// 9. OPTIONAL CHAINING + 10. NULLISH COALESCING
// --------------------------------------------------
function getSellerName(product) {
  // ?. prevents an error if seller is null/undefined.
  // ?? gives a fallback only when the result is null/undefined.
  return product.seller?.name ?? "Seller not available";
}

function getSellerRating(product) {
  return product.seller?.rating ?? "No rating";
}

// --------------------------------------------------
// 6. Object.keys()
// 7. Object.values()
// 8. Object.entries()
// --------------------------------------------------
const studentKeys = Object.keys(completeStudent);
const studentValues = Object.values(completeStudent);
const studentEntries = Object.entries(completeStudent);

console.log("Object.keys():", studentKeys);
console.log("Object.values():", studentValues);
console.log("Object.entries():", studentEntries);

// Use entries to build readable text.
const inspectorText = studentEntries
  .map(([key, value]) => {
    if (typeof value === "object") {
      return `${key}: ${JSON.stringify(value)}`;
    }
    return `${key}: ${value}`;
  })
  .join("\n");

// --------------------------------------------------
// RENDER UI
// --------------------------------------------------
document.getElementById("profile").innerHTML = `
  <div class="row"><strong>Name</strong><span>${name}</span></div>
  <div class="row"><strong>Course</strong><span>${course}</span></div>
  <div class="row"><strong>Score</strong><span>${score}%</span></div>
  <div class="row"><strong>City</strong><span>${student.address?.city ?? "City not available"}</span></div>
  <div class="row"><strong>State</strong><span>${student.address?.state ?? "State not available"}</span></div>
  <div class="row"><strong>Skills</strong><span>${student.skills.join(", ")}</span></div>
`;

const totalProducts = products.length;
const totalStock = products.reduce((total, product) => total + product.stock, 0);
const averagePrice = products.reduce((total, product) => total + product.price, 0) / totalProducts;

document.getElementById("stats").innerHTML = `
  <div class="row"><strong>Total products</strong><span>${totalProducts}</span></div>
  <div class="row"><strong>Total stock</strong><span>${totalStock}</span></div>
  <div class="row"><strong>Average price</strong><span>₹${averagePrice.toFixed(2)}</span></div>
  <div class="row"><strong>Student object properties</strong><span>${studentKeys.length}</span></div>
`;

document.getElementById("products").innerHTML = products.map(product => `
  <article class="product">
    <h3>${product.name}</h3>
    <p class="price">₹${product.price.toLocaleString("en-IN")}</p>
    <p>Category: ${product.category}</p>
    <p>Stock: ${product.stock}</p>
    <p>Seller: ${getSellerName(product)}</p>
    <p>Rating: ${getSellerRating(product)}</p>
    <span class="badge">${product.stock > 0 ? "In Stock" : "Out of Stock"}</span>
  </article>
`).join("");

document.getElementById("inspector").textContent =
`Object.keys()
${studentKeys.join(", ")}

Object.values()
${studentValues.map(value => typeof value === "object" ? JSON.stringify(value) : value).join("\n")}

Object.entries()
${inspectorText}`;


