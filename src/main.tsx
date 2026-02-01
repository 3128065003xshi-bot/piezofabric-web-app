import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";

// Dynamic import for ESM compatibility
const awsExports = await import("./aws-exports.js");

Amplify.configure(awsExports.default || awsExports); // .default handles some export variations

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);