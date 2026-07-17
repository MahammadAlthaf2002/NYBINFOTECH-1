import React from "react";

const OnDoubleClickEvent = () => {

  function handleDoubleClick() {
    alert("Button Double Clicked");
  }

  return (
    <div>

      <h2>React onDoubleClick Event</h2>

      <button onDoubleClick={handleDoubleClick}>
        Double Click Me
      </button>

    </div>
  );

};

export default OnDoubleClickEvent;