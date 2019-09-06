import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Expense from "./components/Expense";

const App: React.FC = () => {
  return (
    <div className="App">
      <Expense project={"123"}></Expense>
    </div>
  );
};

export default App;
