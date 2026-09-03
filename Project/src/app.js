// Small project covering:
// try, catch, finally, throw, Custom Errors
// localStorage, sessionStorage, JSON.stringify, JSON.parse
// Fetch API, GET, POST, API response handling
// Promises, .then(), .catch(), async/await, API error handling

const API_URL = "https://jsonplaceholder.typicode.com";

// ---------------- Custom Error ----------------
class APIError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "APIError";
    this.status = status;
  }
}

// ---------------- Storage ----------------
function saveUser(user) {
  // JSON.stringify(): object -> string
  localStorage.setItem("user", JSON.stringify(user));

  // sessionStorage keeps data for the current browser tab/session.
  sessionStorage.setItem("lastUserId", String(user.id));
}

function getSavedUser() {
  const data = localStorage.getItem("user");

  if (!data) return null;

  try {
    // JSON.parse(): string -> object
    return JSON.parse(data);
  } catch (error) {
    console.error("Invalid JSON in localStorage:", error);
    return null;
  } finally {
    console.log("Finished reading localStorage.");
  }
}

function displaySavedUser() {
  const user = getSavedUser();
  const element = document.getElementById("savedUser");

  if (user) {
    element.textContent = `${user.name} (ID: ${user.id})`;
  } else {
    element.textContent = "No user saved.";
  }
}

// ---------------- Promise + .then/.catch ----------------
// This function demonstrates Promise chaining.
function loadPostsWithPromises() {
  const status = document.getElementById("status");
  const postsBox = document.getElementById("posts");

  status.textContent = "Loading...";
  postsBox.innerHTML = "";

  fetch(`${API_URL}/posts`)
    .then((response) => {
      // Fetch does not reject automatically for HTTP 404/500.
      // We manually throw an error for unsuccessful responses.
      if (!response.ok) {
        throw new APIError("Failed to fetch posts.", response.status);
      }
      return response.json();
    })
    .then((posts) => {
      const firstTen = posts.slice(0, 10);
      postsBox.innerHTML = firstTen.map(post => `
        <article class="post">
          <h3>${escapeHTML(post.title)}</h3>
          <p>${escapeHTML(post.body)}</p>
        </article>
      `).join("");
      status.textContent = "Posts loaded successfully.";
      status.className = "success";
    })
    .catch((error) => {
      console.error(error);
      status.textContent = `Error: ${error.message}`;
      status.className = "error";
    })
    .finally(() => {
      console.log("GET request finished.");
    });
}

// ---------------- Async/Await + try/catch/finally ----------------
async function createPost(title, body) {
  try {
    if (!title.trim() || !body.trim()) {
      // throw: manually create an error
      throw new APIError("Title and body are required.", 400);
    }

    const response = await fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        body,
        userId: 1
      })
    });

    if (!response.ok) {
      throw new APIError("POST request failed.", response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Error handling for network/API/validation errors
    throw error;
  } finally {
    console.log("POST request finished.");
  }
}

// ---------------- Helper ----------------
function escapeHTML(value) {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}

// ---------------- Events ----------------
document.getElementById("loadPosts").addEventListener("click", () => {
  loadPostsWithPromises();
});

document.getElementById("postForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const message = document.getElementById("postMessage");
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  message.textContent = "Creating post...";
  message.className = "";

  try {
    const newPost = await createPost(title, body);

    // Save returned API data to localStorage
    saveUser({ id: newPost.userId, name: "Demo User" });
    displaySavedUser();

    message.textContent = `Post created successfully. New ID: ${newPost.id}`;
    message.className = "success";
    event.target.reset();
  } catch (error) {
    if (error instanceof APIError) {
      message.textContent = `API Error ${error.status}: ${error.message}`;
    } else {
      message.textContent = `Unexpected Error: ${error.message}`;
    }
    message.className = "error";
  } finally {
    console.log("Create-post UI operation completed.");
  }
});

document.getElementById("clearStorage").addEventListener("click", () => {
  localStorage.removeItem("user");
  sessionStorage.removeItem("lastUserId");
  displaySavedUser();
});

displaySavedUser();
