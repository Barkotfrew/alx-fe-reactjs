import React from "react";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo List</h1>
      <TodoList />
    </div>
  );
};

export default App;
