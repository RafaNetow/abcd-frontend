import React from "react";
import ref from "./containers/References/References";
import "./App.css";
import TodoList from "./containers/TodoList";

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
};

export default App;
