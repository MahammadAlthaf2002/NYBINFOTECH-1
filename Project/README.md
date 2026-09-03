# API Task Manager - JavaScript Mini Project

## How to run
1. Extract the ZIP.
2. Open the project folder in VS Code.
3. Open `index.html` with Live Server (recommended).
4. Click **Load Posts** to test the GET request.
5. Fill the form and click **Create Post** to test the POST request.

The project uses JSONPlaceholder, a public fake REST API, so no backend is required.

## Topics covered

### Error Handling
- `try`
- `catch`
- `finally`
- `throw`
- Custom `APIError`

### Storage
- `localStorage.setItem()`
- `localStorage.getItem()`
- `localStorage.removeItem()`
- `sessionStorage.setItem()`
- `sessionStorage.removeItem()`
- `JSON.stringify()`
- `JSON.parse()`

### Fetch/API
- Fetch API
- GET request
- POST request
- `response.ok`
- `response.json()`
- API response handling
- HTTP error handling

### Promises
- Promise returned by `fetch()`
- `.then()`
- `.catch()`
- `.finally()`

### Async JavaScript
- `async`
- `await`
- `try/catch/finally` with async functions

## Project flow

GET:
User clicks Load Posts
-> fetch()
-> check response.ok
-> response.json()
-> display posts
-> catch errors
-> finally

POST:
User submits form
-> validate data
-> fetch() with method POST
-> JSON.stringify()
-> check response.ok
-> response.json()
-> save data in localStorage
-> catch errors
-> finally

## Important learning points

1. `fetch()` rejects mainly for network-level failures; HTTP 404/500 responses still resolve, so check `response.ok`.
2. `JSON.stringify(object)` converts an object into JSON text.
3. `JSON.parse(text)` converts JSON text back into a JavaScript object.
4. `localStorage` persists after closing the browser.
5. `sessionStorage` is limited to the current browser tab/session.
6. `throw` sends an error to the nearest matching `catch`.
7. A custom error class can store extra information such as HTTP status.
