const usage = document.getElementById("usage");
const solar = document.getElementById("solar");
const grid = document.getElementById("grid");
const message = document.getElementById("message");

// Promise + Web API (setTimeout)
function getEnergyReading() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        usage: Math.floor(320 + Math.random() * 80),
        solar: Math.floor(90 + Math.random() * 35),
        grid: "Stable"
      });
    }, 800);
  });
}

// Async/Await
async function updateDashboard() {
  message.textContent = "Fetching latest reading...";
  const data = await getEnergyReading();

  usage.textContent = `${data.usage} kWh`;
  solar.textContent = `${data.solar} kW`;
  grid.textContent = data.grid;
  message.textContent = "Energy reading updated just now.";
}

document.getElementById("refresh").addEventListener("click", updateDashboard);

// Microtask vs Macrotask execution order
document.getElementById("demoBtn").addEventListener("click", () => {
  const output = document.getElementById("output");
  output.innerHTML = "";

  const add = (text, className = "") => {
    const p = document.createElement("p");
    p.textContent = text;
    p.className = className;
    output.appendChild(p);
  };

  add("1. Synchronous code → Call Stack");

  setTimeout(() => {
    add("4. setTimeout → Macrotask Queue", "macro");
  }, 0);

  Promise.resolve().then(() => {
    add("3. Promise.then() → Microtask Queue", "micro");
  });

  add("2. Synchronous code finishes → Call Stack empty");
});

// Initial request
updateDashboard();
