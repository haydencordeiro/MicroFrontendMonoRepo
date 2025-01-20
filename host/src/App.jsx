import React from "react";
import ReactDOM from "react-dom/client";
import ProductsListing from "react_remote/ProductsListing"
import "./index.scss";
import ProductDetails from "./ProductDetails"; // Import the ProductDetails component
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductsListing />} />
        <Route path="/product/:id" element={<ProductDetails />} /> {/* Product details route */}
      </Routes>
    </Router>
  );
}
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)