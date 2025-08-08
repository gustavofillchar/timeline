import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import Header from "./components/header/index.js";
import Timeline from "./components/timeline";

function App() {
  return (
    <>
      <Header />
      <main>
        <Timeline />
      </main>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);