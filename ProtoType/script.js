// ============================================================
// JAVASCRIPT PROTOTYPES & CLASSES — ALL TOPICS IN ONE FILE
// ============================================================

// 1. PROTOTYPE
// Every JavaScript object can have an internal link to another object.
// That linked object is called its prototype.
//
// Example:
const personPrototype = {
  greet() {
    return "Hello from the prototype!";
  }
};

const person = Object.create(personPrototype);
console.log(person.greet());

console.log(person.__proto__)

// 2. __proto__
// __proto__ exposes an object's prototype link in many JavaScript
// environments. It is mainly useful for learning/debugging.
// Modern code generally prefers Object.getPrototypeOf().
//
// person.__proto__ === personPrototype -> true
console.log("person.__proto__ === personPrototype:", person.__proto__ === personPrototype);
console.log("Object.getPrototypeOf(person) === personPrototype:",
  Object.getPrototypeOf(person) === personPrototype);

// 3. PROTOTYPE CHAIN
// JavaScript searches for a property on the object first.
// If it does not find it, it searches the prototype,
// then that prototype's prototype, and eventually null.
//
// person -> personPrototype -> Object.prototype -> null

console.log("toString comes from Object.prototype:", typeof person.toString);

// 4. CONSTRUCTOR FUNCTION
// Before ES6 classes, constructor functions were commonly used
// to create multiple objects with shared methods.

function User(name, role) {
  this.name = name;
  this.role = role;
}

// 5. prototype PROPERTY
// Functions used as constructors have a prototype property.
// Methods placed here are shared by instances.

User.prototype.introduce = function () {
  return `I am ${this.name}, and I am a ${this.role}.`;
};

const user1 = new User("Alex", "Developer");
const user2 = new User("Sam", "Designer");

console.log(user1.introduce());
console.log(user2.introduce());

// The instances do not each need their own introduce function.
console.log("Shared method:",
  user1.introduce === user2.introduce);

// 6. __proto__ WITH CONSTRUCTOR FUNCTIONS
console.log("user1.__proto__ === User.prototype:",
  user1.__proto__ === User.prototype);

// Better modern inspection:
console.log("Object.getPrototypeOf(user1) === User.prototype:",
  Object.getPrototypeOf(user1) === User.prototype);

// 7. CONSTRUCTOR
// A constructor initializes the new object.
// `new User(...)` roughly does:
// 1. Create a new object.
// 2. Link it to User.prototype.
// 3. Call User with `this` pointing to the new object.
// 4. Return the object.

console.log("Constructor:", user1.constructor === User);

// 8. METHODS
// A method is a function associated with an object/class/prototype.
User.prototype.sayRole = function () {
  return `${this.name}'s role is ${this.role}.`;
};

console.log(user1.sayRole());

// 9. CLASSES
// Classes provide cleaner syntax for constructor/prototype-based
// object-oriented programming. Under the hood, JavaScript classes
// still use prototypes.

class BankAccount {
  // 10. ENCAPSULATION
  // Private fields use # and cannot be accessed directly outside.
  #balance = 0;

  // 11. CONSTRUCTOR
  constructor(owner, openingBalance = 0) {
    this.owner = owner;
    this.#balance = openingBalance;
  }

  // 12. METHOD
  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit must be greater than 0.");
    }
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdrawal must be greater than 0.");
    }
    if (amount > this.#balance) {
      throw new Error("Insufficient balance.");
    }
    this.#balance -= amount;
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }

  getSummary() {
    return `${this.owner}: ₹${this.#balance}`;
  }
}

const account = new BankAccount("Alex", 1000);
console.log(account.getSummary());
account.deposit(500);
console.log(account.getBalance());

// This would fail because #balance is private:
// console.log(account.#balance);

// 13. INHERITANCE
// A child class can inherit properties/methods from a parent class.

// 14. extends
// `extends` creates the parent-child class relationship.

class SavingsAccount extends BankAccount {
  constructor(owner, openingBalance, interestRate) {
    // 15. super
    // super(...) calls the parent class constructor.
    super(owner, openingBalance);
    this.interestRate = interestRate;
  }

  addInterest() {
    const interest = this.getBalance() * this.interestRate;
    this.deposit(interest);
    return this.getBalance();
  }

  getSummary() {
    // super.getSummary() calls the parent's method.
    return `${super.getSummary()} | Interest: ${this.interestRate * 100}%`;
  }
}

const savings = new SavingsAccount("Sam", 2000, 0.05);
console.log(savings.getSummary());
savings.addInterest();
console.log(savings.getSummary());

// 16. INHERITANCE CHAIN
// savings
//   -> SavingsAccount.prototype
//   -> BankAccount.prototype
//   -> Object.prototype
//   -> null

console.log(
  "Savings prototype chain:",
  Object.getPrototypeOf(savings) === SavingsAccount.prototype,
  Object.getPrototypeOf(SavingsAccount.prototype) === BankAccount.prototype
);

// ============================================================
// INTERACTIVE EXAMPLE
// ============================================================

let currentAccount = null;

const nameInput = document.getElementById("nameInput");
const amountInput = document.getElementById("amountInput");
const output = document.getElementById("output");

function show(message) {
  output.textContent = message;
}

document.getElementById("createBtn").addEventListener("click", () => {
  const name = nameInput.value.trim() || "Guest";
  const amount = Number(amountInput.value) || 0;

  try {
    currentAccount = new SavingsAccount(name, amount, 0.05);
    show(
      `Account created!\\n\\n` +
      `${currentAccount.getSummary()}\\n` +
      `Prototype: SavingsAccount.prototype\\n` +
      `Parent prototype: BankAccount.prototype`
    );
  } catch (error) {
    show(error.message);
  }
});

document.getElementById("depositBtn").addEventListener("click", () => {
  if (!currentAccount) {
    show("Create an account first.");
    return;
  }

  const amount = Number(amountInput.value);

  try {
    currentAccount.deposit(amount);
    show(currentAccount.getSummary());
  } catch (error) {
    show(error.message);
  }
});

document.getElementById("showBtn").addEventListener("click", () => {
  if (!currentAccount) {
    show("Create an account first.");
    return;
  }

  show(
    `Owner: ${currentAccount.owner}\\n` +
    `Balance: ₹${currentAccount.getBalance()}\\n` +
    `Interest Rate: ${currentAccount.interestRate * 100}%\\n\\n` +
    `Encapsulation: balance is stored in private #balance\\n` +
    `Inheritance: SavingsAccount extends BankAccount\\n` +
    `super: used to call the parent constructor/methods`
  );
});

// ============================================================
// QUICK INTERVIEW SUMMARY
// ============================================================
//
// prototype:
//   Object used for shared properties/methods and inheritance.
//
// Prototype chain:
//   The lookup path JavaScript follows when a property isn't
//   found directly on an object.
//
// prototype:
//   Property available on constructor functions, used as the
//   prototype for objects created with new.
//
// __proto__:
//   Accessor for an object's prototype link; prefer
//   Object.getPrototypeOf() in modern code.
//
// Constructor function:
//   Regular function traditionally used with `new` to create objects.
//
// Class:
//   Cleaner syntax for JavaScript's prototype-based object model.
//
// Constructor:
//   Special class method that runs when an object is created.
//
// Method:
//   Function defined on an object/class/prototype.
//
// Inheritance:
//   Child objects/classes reuse behavior from a parent.
//
// Encapsulation:
//   Keeping internal data controlled/private; #private fields are
//   one modern JavaScript mechanism.
//
// extends:
//   Makes one class inherit from another class.
//
// super:
//   Used in a child class to call the parent constructor or methods.
//
// ============================================================
