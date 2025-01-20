import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import ProductsListing from "./ProductsListing";

const App = () => (
  <div className="">
    <ProductsListing></ProductsListing>
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)