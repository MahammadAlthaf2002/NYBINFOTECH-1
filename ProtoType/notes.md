# Interview Notes

## 1. What is a prototype?
A prototype is an object from which another object can inherit properties and methods.

## 2. What is the prototype chain?
When JavaScript cannot find a property on an object, it searches the object's prototype, then the prototype's prototype, until it reaches `null`.

Example:
`user -> User.prototype -> Object.prototype -> null`

## 3. What is `prototype`?
Constructor functions and classes have a prototype object. Methods placed there can be shared by instances.

## 4. What is `__proto__`?
`__proto__` accesses an object's prototype. For modern code, prefer `Object.getPrototypeOf(obj)`.

## 5. What is a constructor function?
A normal function used with `new` to initialize objects.

## 6. What is a class?
A cleaner syntax for creating objects and expressing prototype-based inheritance.

## 7. What is a constructor?
The `constructor()` method runs automatically when an instance is created with `new`.

## 8. What are methods?
Functions defined for an object/class to perform behavior.

## 9. What is inheritance?
A child class/object can reuse behavior from a parent.

## 10. What is encapsulation?
Keeping implementation details controlled and exposing only what is needed. JavaScript private fields use `#`.

## 11. What does `extends` do?
It creates inheritance between classes.

## 12. What does `super` do?
`super()` calls the parent constructor. `super.method()` calls a parent method.

## Most important relationship

```text
Constructor Function
       |
       v
User.prototype
       |
       v
new User()
       |
       v
user object
       |
       v
Object.prototype
       |
       v
null
```

For classes:

```text
BankAccount
     ^
     |
extends
     |
SavingsAccount
     |
     v
new SavingsAccount()
```

## Important interview point

JavaScript is prototype-based. Classes do not replace prototypes; class syntax is a cleaner way to work with JavaScript's existing prototype system.
