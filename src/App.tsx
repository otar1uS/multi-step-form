import { useState } from "react";
import "./styles/style.css";
import PersonalInfo from "./personalinfo";
import Tracker from "./tracker";
function App() {
  return (
    <div className="app">
      <Tracker>
        <PersonalInfo />
      </Tracker>
    </div>
  );
}

export default App;
