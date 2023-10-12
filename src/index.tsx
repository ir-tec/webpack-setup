import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";

const rootElement = document.querySelector("#root");

if (!rootElement) throw new Error("Canot find root");

const root = createRoot(rootElement);

root.render(<App />);
