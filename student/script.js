// Array Creation and Accessing Elements
let students = [
  { id: 1, name: "Arun", marks: 85, subject: "JavaScript" },
  { id: 2, name: "Bala", marks: 62, subject: "React" },
  { id: 3, name: "Chitra", marks: 91, subject: "JavaScript" },
  { id: 4, name: "Deepak", marks: 45, subject: "React" },
  { id: 5, name: "Arun", marks: 85, subject: "JavaScript" }
];

const result = document.getElementById("result");

// map() - display student names/details
function showAll() {
  const cards = students.map(student => `
    <div class="card">
      <strong>${student.name}</strong>
      Marks: ${student.marks}<br>
      Subject: ${student.subject}
    </div>
  `);

  result.innerHTML = cards.join("");
}

// filter() - get passed students
function showPassed() {
  const passed = students.filter(student => student.marks >= 50);

  result.innerHTML = `
    <div class="message">
      Passed Students: ${passed.map(student => student.name).join(", ")}
    </div>
  `;
}

// reduce() - calculate average marks
function showTopper() {
  const total = students.reduce((sum, student) => sum + student.marks, 0);
  const average = total / students.length;

  const topper = students.reduce((best, student) =>
    student.marks > best.marks ? student : best
  );

  result.innerHTML = `
    <div class="message">
      <strong>Topper:</strong> ${topper.name} (${topper.marks} marks)<br>
      <strong>Average:</strong> ${average.toFixed(2)}
    </div>
  `;
}

// sort() - highest marks first
function sortStudents() {
  const sorted = [...students].sort((a, b) => b.marks - a.marks);

  result.innerHTML = sorted.map(student => `
    <div class="card">
      <strong>${student.name}</strong>
      ${student.marks} marks
    </div>
  `).join("");
}

// find() - find first Arun
const firstArun = students.find(student => student.name === "Arun");

// findIndex() - find Arun's index
const arunIndex = students.findIndex(student => student.name === "Arun");

// some() - check whether someone scored 90+
const hasTopScore = students.some(student => student.marks >= 90);

// every() - check whether everyone passed
const everyonePassed = students.every(student => student.marks >= 50);

// Set - remove duplicate student names
function showUniqueSubjects() {
  const subjects = [...new Set(students.map(student => student.subject))];

  result.innerHTML = `
    <div class="message">
      <strong>Unique Subjects:</strong> ${subjects.join(", ")}<br><br>
      First Arun: ${firstArun.name}<br>
      First Arun Index: ${arunIndex}<br>
      Someone scored 90+: ${hasTopScore}<br>
      Everyone passed: ${everyonePassed}
    </div>
  `;
}

// Show students when page loads
showAll();
