import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import Header from "./components/header/index.js";
import Timeline from "./components/timeline";
import { ZoomProvider } from "./contexts/ZoomContext";

function App() {
  return (
    <ZoomProvider>
      <Header />
      <main>
        <Timeline />
      </main>
    </ZoomProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);