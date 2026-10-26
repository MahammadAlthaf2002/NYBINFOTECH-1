
"use strict";

// ==========================================
// COMMON HELPER FUNCTION
// ==========================================

function showOutput(elementId, message) {
  const output = document.getElementById(elementId);
  output.textContent = message;
}

function getNumber(elementId) {
  return document.getElementById(elementId).valueAsNumber;
}

// ==========================================
// TASK 1: VARIABLES, SCOPE AND HOISTING
// ==========================================

function runVariables() {
  let result = "";

  // var, let and const
  var city = "Bengaluru";
  let age = 24;
  const country = "India";

  age = 25; // let allows reassignment

  result += "VARIABLES\n";
  result += `var city: ${city}\n`;
  result += `let age after reassignment: ${age}\n`;
  result += `const country: ${country}\n`;

  // Global scope
  const globalMessage = "I am accessible inside this function";

  function showGlobal() {
    return globalMessage;
  }

  result += "\nSCOPE\n";
  result += `Global variable: ${showGlobal()}\n`;

  // Function scope
  function testFunctionScope() {
    var functionMessage = "Inside function";
    return functionMessage;
  }

  result += `Function scope: ${testFunctionScope()}\n`;

  // Block scope
  if (true) {
    var blockVar = "var escapes the block";
    let blockLet = "let stays inside the block";
    const blockConst = "const stays inside the block";

    result += `Inside block let: ${blockLet}\n`;
    result += `Inside block const: ${blockConst}\n`;
  }

  result += `Outside block var: ${blockVar}\n`;
  result += "Outside block let/const: inaccessible\n";

  // var hoisting
  result += "\nHOISTING\n";
  result += `var before assignment: ${hoistingExample()}\n`;

  function hoistingExample() {
    resultForHoisting = "Assigned later";
    var resultForHoisting;
    return resultForHoisting;
  }

  // TDZ demonstration
  result += "\nTEMPORAL DEAD ZONE (TDZ)\n";

  {
    try {
      // Accessing a let variable before initialization throws.
      console.log(tdzExample);
    } catch (error) {
      result += `Before let initialization: ${error.name}\n`;
    }

    let tdzExample = "Now initialized";
    result += `After initialization: ${tdzExample}\n`;
  }

  showOutput("variableOutput", result);
}

// ==========================================
// TASK 2: DATA TYPES AND typeof
// ==========================================

function runDataTypes() {
  const stringValue = "Hello JavaScript";
  const numberValue = 100;
  const booleanValue = true;
  const undefinedValue = undefined;
  const nullValue = null;
  const bigIntValue = 12345678901234567890n;
  const symbolValue = Symbol("uniqueId");

  const objectValue = {
    name: "Althaf",
    age: 24
  };

  const arrayValue = [10, 20, 30];

  const values = [
    ["String", stringValue],
    ["Number", numberValue],
    ["Boolean", booleanValue],
    ["Undefined", undefinedValue],
    ["Null", nullValue],
    ["BigInt", bigIntValue],
    ["Symbol", symbolValue],
    ["Object", objectValue],
    ["Array", arrayValue]
  ];

  let result = "JAVASCRIPT DATA TYPES\n\n";

  for (const [name, value] of values) {
    result += `${name}: ${String(value)}\n`;
    result += `typeof: ${typeof value}\n\n`;
  }

  result += `Is array? ${Array.isArray(arrayValue)}\n`;
  result += `Is object an array? ${Array.isArray(objectValue)}\n`;
  result += "Note: typeof null returns object.\n";

  showOutput("dataTypeOutput", result);
}

// ==========================================
// TASK 3: TYPE CONVERSION AND COERCION
// ==========================================

function runConversion() {
  const input = document.getElementById("conversionValue").value;

  const convertedNumber = Number(input);
  const convertedString = String(input);
  const convertedBoolean = Boolean(input);

  let result = "TYPE CONVERSION\n\n";

  result += `Original value: "${input}"\n`;
  result += `Original type: ${typeof input}\n\n`;

  result += `Number(value): ${convertedNumber}\n`;
  result += `Is result NaN? ${Number.isNaN(convertedNumber)}\n`;
  result += `String(value): "${convertedString}"\n`;
  result += `Boolean(value): ${convertedBoolean}\n`;

  result += "\nTYPE COERCION\n";
  result += `"5" + 2 = ${"5" + 2}\n`;
  result += `"5" - 2 = ${"5" - 2}\n`;
  result += `"5" * 2 = ${"5" * 2}\n`;

  result += "\nSTRICT VS LOOSE EQUALITY\n";
  result += `5 == "5": ${5 == "5"}\n`;
  result += `5 === "5": ${5 === "5"}\n`;

  showOutput("conversionOutput", result);
}

// ==========================================
// TASK 4: ARITHMETIC CALCULATOR
// ==========================================

function runCalculator() {
  const a = getNumber("firstNumber");
  const b = getNumber("secondNumber");
  const operator = document.getElementById("operator").value;

  if (Number.isNaN(a) || Number.isNaN(b)) {
    showOutput("operatorOutput", "Please enter both numbers.");
    return;
  }

  let answer;

  switch (operator) {
    case "+":
      answer = a + b;
      break;

    case "-":
      answer = a - b;
      break;

    case "*":
      answer = a * b;
      break;

    case "/":
      if (b === 0) {
        showOutput("operatorOutput", "Cannot divide by zero.");
        return;
      }
      answer = a / b;
      break;

    case "%":
      if (b === 0) {
        showOutput("operatorOutput", "Cannot calculate remainder with zero.");
        return;
      }
      answer = a % b;
      break;

    case "**":
      answer = a ** b;
      break;

    default:
      showOutput("operatorOutput", "Invalid operator.");
      return;
  }

  showOutput(
    "operatorOutput",
    `First number: ${a}\n` +
    `Second number: ${b}\n` +
    `Operator: ${operator}\n` +
    `Answer: ${answer}`
  );
}

// Assignment, comparison, logical and ternary operators
function runOperatorExamples() {
  let total = 10;

  total += 5;
  const assignmentResult = total;

  const a = 10;
  const b = 5;

  const comparisonResult = a > b;
  const logicalAnd = a > 0 && b > 0;
  const logicalOr = a < 0 || b > 0;
  const logicalNot = !(a === b);

  const ternaryResult = a >= 10 ? "A is at least 10" : "A is below 10";

  const nullishResult = 0 ?? 100;
  const orResult = 0 || 100;

  const user = {
    profile: {
      city: "Bengaluru"
    }
  };

  const city = user?.profile?.city ?? "Unknown";

  const result =
    "ASSIGNMENT OPERATORS\n" +
    `10 += 5 gives ${assignmentResult}\n\n` +
    "COMPARISON OPERATORS\n" +
    `10 > 5: ${comparisonResult}\n` +
    `10 === 10: ${a === 10}\n` +
    `10 !== 5: ${a !== b}\n\n` +
    "LOGICAL OPERATORS\n" +
    `true && true: ${logicalAnd}\n` +
    `false || true: ${logicalOr}\n` +
    `!(10 === 5): ${logicalNot}\n\n` +
    "TERNARY OPERATOR\n" +
    `${ternaryResult}\n\n` +
    "NULLISH COALESCING VS OR\n" +
    `0 ?? 100: ${nullishResult}\n` +
    `0 || 100: ${orResult}\n\n` +
    "OPTIONAL CHAINING\n" +
    `User city: ${city}`;

  showOutput("operatorOutput", result);
}

// ==========================================
// TASK 5: CONDITIONS AND SWITCH
// ==========================================

function checkAge() {
  const age = getNumber("ageInput");

  if (!Number.isFinite(age) || age < 0) {
    showOutput("conditionOutput", "Enter a valid non-negative age.");
  } else if (age >= 18) {
    showOutput("conditionOutput", "You are an adult.");
  } else {
    showOutput("conditionOutput", "You are a minor.");
  }
}

function checkGrade() {
  const marks = getNumber("marksInput");

  if (!Number.isFinite(marks) || marks < 0 || marks > 100) {
    showOutput("conditionOutput", "Enter marks between 0 and 100.");
    return;
  }

  let grade;

  if (marks >= 90) {
    grade = "A";
  } else if (marks >= 75) {
    grade = "B";
  } else if (marks >= 50) {
    grade = "C";
  } else if (marks >= 35) {
    grade = "D";
  } else {
    grade = "Fail";
  }

  showOutput(
    "conditionOutput",
    `Your marks: ${marks}\nYour grade: ${grade}`
  );
}

function checkDay() {
  const day = getNumber("dayInput");

  let dayName;

  switch (day) {
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    case 7:
      dayName = "Sunday";
      break;
    default:
      dayName = "Invalid day. Enter a number from 1 to 7.";
  }

  showOutput("conditionOutput", `Switch result: ${dayName}`);
}

// ==========================================
// TASK 6: LOOPS, BREAK AND CONTINUE
// ==========================================

function runLoops() {
  let result = "";

  // FOR LOOP
  result += "FOR LOOP\n";

  for (let i = 1; i <= 5; i++) {
    result += `${i} `;
  }

  // WHILE LOOP
  result += "\n\nWHILE LOOP\n";

  let i = 1;

  while (i <= 5) {
    result += `${i} `;
    i++;
  }

  // DO...WHILE LOOP
  result += "\n\nDO...WHILE LOOP\n";

  let j = 1;

  do {
    result += `${j} `;
    j++;
  } while (j <= 5);

  // BREAK
  result += "\n\nBREAK: stop when number reaches 4\n";

  for (let k = 1; k <= 10; k++) {
    if (k === 4) {
      break;
    }

    result += `${k} `;
  }

  // CONTINUE
  result += "\n\nCONTINUE: skip odd numbers\n";

  for (let n = 1; n <= 10; n++) {
    if (n % 2 !== 0) {
      continue;
    }

    result += `${n} `;
  }

  // Sum using a loop
  let sum = 0;

  for (let number = 1; number <= 10; number++) {
    sum += number;
  }

  result += `\n\nSum from 1 to 10: ${sum}`;

  showOutput("loopOutput", result);
}

// ==========================================
// TASK 7: OPTIONAL CHAINING AND NULLISH
// ==========================================

function runOptionalChaining() {
  const user = {
    name: "Althaf",
    address: {
      city: "Bengaluru"
    },
    score: 0,
    isActive: false
  };

  const missingUser = null;

  const name = user?.name ?? "Guest";
  const city = user?.address?.city ?? "Unknown";
  const score = user?.score ?? 100;
  const active = user?.isActive ?? true;
  const missingCity = missingUser?.address?.city ?? "No city";

  const result =
    "OPTIONAL CHAINING AND NULLISH COALESCING\n\n" +
    `Name: ${name}\n` +
    `City: ${city}\n` +
    `Score: ${score}\n` +
    `Is active: ${active}\n` +
    `Missing user's city: ${missingCity}\n\n` +
    `0 ?? 100 = ${0 ?? 100}\n` +
    `0 || 100 = ${0 || 100}\n` +
    `false ?? true = ${false ?? true}\n` +
    `false || true = ${false || true}`;

  showOutput("optionalOutput", result);
}

// ==========================================
// TASK 8: REVERSE A STRING
// ==========================================

function reverseText() {
  const text = document.getElementById("wordInput").value;
  let reversed = "";

  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }

  showOutput(
    "logicOutput",
    `Original text: ${text}\nReversed text: ${reversed}`
  );
}

// ==========================================
// TASK 8: PALINDROME CHECKER
// ==========================================

function checkPalindrome() {
  const original = document.getElementById("wordInput").value;

  // Ignore spaces, punctuation and letter case.
  const cleaned = original.toLowerCase().replace(/[^a-z0-9]/g, "");

  let reversed = "";

  for (let i = cleaned.length - 1; i >= 0; i--) {
    reversed += cleaned[i];
  }

  const isPalindrome = cleaned.length > 0 && cleaned === reversed;

  showOutput(
    "logicOutput",
    `Original: ${original}\n` +
    `Normalized: ${cleaned}\n` +
    `Result: ${isPalindrome ? "Palindrome" : "Not a palindrome"}`
  );
}

// ==========================================
// TASK 8: FACTORIAL
// ==========================================

function calculateFactorial() {
  const number = getNumber("numberInput");

  if (
    !Number.isInteger(number) ||
    number < 0 ||
    number > 170
  ) {
    showOutput(
      "logicOutput",
      "Enter a whole number from 0 to 170."
    );
    return;
  }

  let factorial = 1;

  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }

  showOutput(
    "logicOutput",
    `Number: ${number}\nFactorial: ${factorial}`
  );
}

// ==========================================
// TASK 8: PRIME NUMBER CHECKER
// ==========================================

function checkPrime() {
  const number = getNumber("numberInput");

  if (!Number.isInteger(number)) {
    showOutput("logicOutput", "Enter a whole number.");
    return;
  }

  if (number < 2) {
    showOutput(
      "logicOutput",
      `${number} is not a prime number.`
    );
    return;
  }

  let isPrime = true;

  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  showOutput(
    "logicOutput",
    `${number} is ${isPrime ? "a prime number" : "not a prime number"}.`
  );
}

// ==========================================
// TASK 8: LARGEST OF THREE NUMBERS
// ==========================================

function findLargest() {
  const a = getNumber("largestA");
  const b = getNumber("largestB");
  const c = getNumber("largestC");

  if (
    !Number.isFinite(a) ||
    !Number.isFinite(b) ||
    !Number.isFinite(c)
  ) {
    showOutput(
      "logicOutput",
      "Please enter all three numbers."
    );
    return;
  }

  let largest;

  if (a >= b && a >= c) {
    largest = a;
  } else if (b >= a && b >= c) {
    largest = b;
  } else {
    largest = c;
  }

  showOutput(
    "logicOutput",
    `Numbers: ${a}, ${b}, ${c}\nLargest number: ${largest}`
  );
}

// ==========================================
// CLEAR ALL OUTPUTS
// ==========================================

function resetAllOutputs() {
  const outputIds = [
    "variableOutput",
    "dataTypeOutput",
    "conversionOutput",
    "operatorOutput",
    "conditionOutput",
    "loopOutput",
    "optionalOutput",
    "logicOutput"
  ];

  for (const id of outputIds) {
    showOutput(id, "Your result will appear here.");
  }
}
