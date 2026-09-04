// ===============================
// TASK MANAGER MINI PROJECT
// Topics: DOM, Events, Dynamic Elements,
// Event Delegation, Forms, API, Local Storage
// ===============================

const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const emptyState = document.querySelector("#emptyState");
const formMessage = document.querySelector("#formMessage");
const searchInput = document.querySelector("#searchInput");
const clearCompletedBtn = document.querySelector("#clearCompletedBtn");
const loadApiBtn = document.querySelector("#loadApiBtn");
const totalCount = document.querySelector("#totalCount");
const completedCount = document.querySelector("#completedCount");
const pendingCount = document.querySelector("#pendingCount");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// ---------- Local Storage ----------
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ---------- DOM Manipulation ----------
function renderTasks(searchTerm = "") {
  taskList.innerHTML = "";

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  emptyState.style.display = filteredTasks.length ? "none" : "block";

  filteredTasks.forEach(task => {
    // Creating elements dynamically
    const li = document.createElement("li");
    li.className = `task ${task.completed ? "completed" : ""}`;
    li.dataset.id = task.id;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    checkbox.checked = task.completed;

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = task.title;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.dataset.action = "delete";
    deleteButton.textContent = "Delete";

    li.append(checkbox, span, deleteButton);
    taskList.appendChild(li);
  });

  updateStats();
}

function updateStats() {
  const completed = tasks.filter(task => task.completed).length;
  totalCount.textContent = tasks.length;
  completedCount.textContent = completed;
  pendingCount.textContent = tasks.length - completed;
}

// ---------- Form Handling ----------
taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = taskInput.value.trim();

  if (!title) {
    formMessage.textContent = "Please enter a task.";
    return;
  }

  tasks.unshift({
    id: Date.now(),
    title,
    completed: false
  });

  saveTasks();
  renderTasks(searchInput.value);

  taskInput.value = "";
  formMessage.textContent = "";
  taskInput.focus();
});

// ---------- Event Delegation ----------
// One listener handles clicks for all current/future task buttons.
taskList.addEventListener("click", function (event) {
  const deleteButton = event.target.closest('[data-action="delete"]');

  if (!deleteButton) return;

  const taskElement = deleteButton.closest(".task");
  const id = Number(taskElement.dataset.id);

  tasks = tasks.filter(task => task.id !== id);

  saveTasks();
  renderTasks(searchInput.value);
});

// Checkbox event delegation
taskList.addEventListener("change", function (event) {
  if (!event.target.classList.contains("task-checkbox")) return;

  const taskElement = event.target.closest(".task");
  const id = Number(taskElement.dataset.id);

  const task = tasks.find(task => task.id === id);
  if (task) task.completed = event.target.checked;

  saveTasks();
  renderTasks(searchInput.value);
});

// ---------- Search ----------
searchInput.addEventListener("input", function () {
  renderTasks(searchInput.value);
});

// ---------- Clear Completed ----------
clearCompletedBtn.addEventListener("click", function () {
  tasks = tasks.filter(task => !task.completed);
  saveTasks();
  renderTasks(searchInput.value);
});

// ---------- API Call ----------
// Fetches sample todos from JSONPlaceholder.
loadApiBtn.addEventListener("click", async function () {
  loadApiBtn.disabled = true;
  loadApiBtn.textContent = "Loading...";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const apiTasks = await response.json();

    const newTasks = apiTasks.map(item => ({
      id: Date.now() + item.id,
      title: item.title,
      completed: item.completed
    }));

    tasks = [...newTasks, ...tasks];
    saveTasks();
    renderTasks(searchInput.value);
  } catch (error) {
    formMessage.textContent = "Could not load API tasks. Check your internet connection.";
    console.error(error);
  } finally {
    loadApiBtn.disabled = false;
    loadApiBtn.textContent = "Load Sample Tasks";
  }
});

// Initial rendering
renderTasks();
