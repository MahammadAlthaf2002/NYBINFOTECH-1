# Task Manager Mini Project

A beginner-friendly JavaScript mini project covering:

- DOM Selection
- DOM Manipulation
- Creating Elements Dynamically
- Event Listeners
- Event Delegation
- Form Handling
- Local Storage
- JSON.stringify()
- JSON.parse()
- Fetch API
- GET request
- Promises / async-await
- API response handling
- Error handling
- Search/filter
- Array methods
- Complete weekly JavaScript revision

## How to run

1. Extract the ZIP file.
2. Open the project folder in VS Code.
3. Open `index.html` in a browser.

For the API button, make sure you have an internet connection.

## Features

1. Add a task using the form.
2. Mark a task as completed.
3. Delete a task.
4. Search tasks.
5. Clear completed tasks.
6. Load 5 sample tasks from JSONPlaceholder API.
7. Tasks remain after refreshing because Local Storage is used.
8. Task counters update automatically.

## Main JavaScript concepts

### DOM Selection
`querySelector()` is used to select HTML elements.

### DOM Manipulation
`innerHTML`, `textContent`, `className`, `dataset`, `append()` and `appendChild()` are used.

### Dynamic Elements
`createElement()` creates task elements at runtime.

### Events
`addEventListener()` handles submit, click, change and input events.

### Event Delegation
A single listener on `#taskList` handles dynamically-created delete buttons and checkboxes.

### Form Handling
`preventDefault()` stops page reload and the submitted value is validated.

### Local Storage
`JSON.stringify(tasks)` converts the JavaScript array to a string before saving.
`JSON.parse(...)` converts the stored string back into a JavaScript array.

### API
`fetch()` sends a GET request to JSONPlaceholder.
`response.json()` reads the JSON response.
`async/await`, `try/catch/finally` handle the asynchronous operation.

## Suggested interview questions

1. What is the DOM?
2. Difference between querySelector and getElementById?
3. Why do we use createElement?
4. What is event bubbling?
5. What is event delegation?
6. Why is preventDefault used in forms?
7. What is Local Storage?
8. Why are JSON.stringify and JSON.parse needed?
9. What does fetch return?
10. What is the difference between a Promise and async/await?
11. Why do we check response.ok?
12. Why is event delegation useful for dynamically-created elements?
