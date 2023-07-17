import React from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
     <div className="container d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
        <div className="App">
        <Board />
      </div>
     </div>
  );
}

export default App;
