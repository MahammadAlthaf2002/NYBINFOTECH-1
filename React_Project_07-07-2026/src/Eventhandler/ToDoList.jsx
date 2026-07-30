import React, { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // onChange
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  // onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") {
      alert("Please enter a task");
      return;
    }

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  // onClick
  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((item) => item.id !== id);
    setTasks(updatedTasks);
  };

  // onDoubleClick
  const handleComplete = (id) => {
    const updatedTasks = tasks.map((item) =>
      item.id === id
        ? { ...item, completed: !item.completed }
        : item
    );

    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React To-Do List</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={handleChange}
        />

        <button type="submit">
          Add Task
        </button>
      </form>

      <hr />

      {tasks.length === 0 ? (
        <h3>No Tasks Available</h3>
      ) : (
        tasks.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "350px",
              marginBottom: "10px",
            }}
          >
            <span
              onDoubleClick={() => handleComplete(item.id)}
              style={{
                cursor: "pointer",
                textDecoration: item.completed
                  ? "line-through"
                  : "none",
                color: item.completed ? "green" : "black",
              }}
            >
              {item.text}
            </span>

            <button
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default ToDoList;