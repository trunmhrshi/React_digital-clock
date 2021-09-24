import React from "react";
import "./App.css";
import Clock from "./Clock";
function App() {
  return (
    <>
      <div className="date">
        <div className="holder">
          <Clock />
        </div>
      </div>
    </>
  );
}

export default App;
