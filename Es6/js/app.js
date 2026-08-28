import { defaultTasks } from "./data.js";
import {
  createTask,
  getUserLabel,
  taskLabel,
  getTaskParts,
  countArguments,
  addWithoutMutation
} from "./utils.js";

const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const category = document.querySelector("#category");
const searchInput = document.querySelector("#searchInput");
const taskList = document.querySelector("#taskList");
const clearCompleted = document.querySelector("#clearCompleted");

let tasks = [...defaultTasks];
let nextId = Math.max(...tasks.map(({ id }) => id)) + 1;

// Map: quick lookup of category counts.
const categoryCounts = new Map();

// WeakMap: object metadata can be associated without preventing garbage collection.
const taskMetadata = new WeakMap();

// WeakSet: tracks task objects that have been rendered.
const renderedTasks = new WeakSet();

function updateCategoryMap() {
  categoryCounts.clear();

  tasks.forEach(({ category }) => {
    categoryCounts.set(
      category,
      (categoryCounts.get(category) ?? 0) + 1
    );
  });
}

function render() {
  updateCategoryMap();

  const search = searchInput.value.trim().toLowerCase();

  const visibleTasks = tasks.filter(({ title, category }) =>
    `${title} ${category}`.toLowerCase().includes(search)
  );

  taskList.innerHTML = visibleTasks.length
    ? visibleTasks.map(task => `
      <li class="task ${task.completed ? "completed" : ""}">
        <input type="checkbox" data-action="toggle" data-id="${task.id}"
          ${task.completed ? "checked" : ""}>
        <div class="task-info">
          <div class="task-title">${taskLabel(task)}</div>
          <div class="task-meta">${task.category}</div>
        </div>
        <button class="delete" data-action="delete" data-id="${task.id}">Delete</button>
      </li>
    `).join("")
    : `<li class="empty">No tasks found.</li>`;

  document.querySelector("#total").textContent = tasks.length;
  document.querySelector("#completed").textContent =
    tasks.filter(({ completed }) => completed).length;
  document.querySelector("#pending").textContent =
    tasks.filter(({ completed }) => !completed).length;

  visibleTasks.forEach(task => {
    renderedTasks.add(task);
    taskMetadata.set(task, { renderedAt: Date.now() });
  });

  console.log("Categories:", [...categoryCounts.entries()]);
  console.log("User:", getUserLabel({ profile: { name: "Student" } }));
  console.log("Rest example:", countArguments("a", "b", "c"));
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = taskInput.value.trim();
  if (!title) return;

  const newTask = createTask(title, category.value, nextId++);
  tasks = addWithoutMutation(tasks, newTask);

  // Object destructuring.
  const { title: newTitle, category: newCategory } = getTaskParts(newTask);
  console.log(`Added: ${newTitle} [${newCategory}]`);

  taskInput.value = "";
  render();
});

taskList.addEventListener("click", (event) => {
  const target = event.target;
  const id = Number(target.dataset.id);

  if (target.dataset.action === "delete") {
    tasks = tasks.filter(task => task.id !== id);
    render();
  }

  if (target.dataset.action === "toggle") {
    tasks = tasks.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );
    render();
  }
});

searchInput.addEventListener("input", render);

clearCompleted.addEventListener("click", () => {
  tasks = tasks.filter(({ completed }) => !completed);
  render();
});

render();
