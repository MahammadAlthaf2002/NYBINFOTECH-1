# Object Master - JavaScript Mini Assessment

## Project Goal

Build a small Student + Product Dashboard using JavaScript objects.

This project combines all of these concepts:

- Creating and Accessing Objects
- Nested Objects
- Object Destructuring
- Spread Operator
- Rest Operator
- Object.keys()
- Object.values()
- Object.entries()
- Optional Chaining (?.)
- Nullish Coalescing (??)

## How to Run

1. Extract the ZIP file.
2. Open the folder in VS Code.
3. Open `index.html` in a browser.
4. Open Browser DevTools -> Console to see the JavaScript examples.

No npm or installation is required.

## What You Should Understand

### 1. Creating and Accessing Objects
The `student` and `products` objects store related data.

### 2. Nested Objects
`student.address` and `product.seller` are objects inside other objects.

### 3. Destructuring
The project extracts values directly:

```js
const { name, course, score } = student;
```

### 4. Spread
A new object is created without changing the original:

```js
const updatedStudent = {
  ...student,
  score: 92
};
```

### 5. Rest
Remaining properties are collected:

```js
const { id, name, ...otherDetails } = student;
```

### 6. Object.keys()
Returns property names.

### 7. Object.values()
Returns property values.

### 8. Object.entries()
Returns key-value pairs.

### 9. Optional Chaining
Safely accesses nested data:

```js
product.seller?.name
```

### 10. Nullish Coalescing
Provides a fallback for `null` or `undefined`:

```js
product.seller?.name ?? "Seller not available"
```

## Assessment

Complete the 10 questions at the bottom of `script.js` without looking at the examples first.

## Expected Level

This is suitable as a beginner-to-intermediate JavaScript mini assessment before moving deeper into React.
