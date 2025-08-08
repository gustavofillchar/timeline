import React from "react";
import ReactDOM from "react-dom/client";
import timelineItems from "./timelineItems.js";
import assignLanes from "./assignLanes.js";
import Header from "./components/header";
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