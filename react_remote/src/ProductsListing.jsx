import "tailwindcss/tailwind.css";
import { Link } from "react-router-dom"; // Import Link for navigation

import React, { useState, useEffect } from "react";

export default function ProductsListing() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const fetchProducts = async (page) => {
        setIsLoading(true);
        try {
            const res = await fetch(`https://fakestoreapi.com/products?limit=8&page=${page}`);
            const data = await res.json();
            setProducts((prevProducts) => [...prevProducts, ...data]);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchSuggestions = async (query) => {
        if (query.length === 0) {
            setSuggestions([]);
            return;
        }

        try {
            const res = await fetch(`https://fakestoreapi.com/products`);
            const data = await res.json();
            const filteredSuggestions = data.filter((product) =>
                product.title.toLowerCase().includes(query.toLowerCase())
            );
            setSuggestions(filteredSuggestions.slice(0, 5)); // Limit to 5 suggestions
        } catch (error) {
            console.error("Failed to fetch suggestions:", error);
        }
    };

    useEffect(() => {
        fetchProducts(page);
    }, [page]);

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        fetchSuggestions(query);
    };

    const loadMoreProducts = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <>
            {/* E-commerce Landing Page */}
            <div className="bg-gray-50 min-h-screen">
                {/* Header with Search Bar */}
                <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-10">
                    <div className="flex justify-between items-center max-w-7xl mx-auto">
                        <h1 className="text-2xl font-bold text-gray-800">FakeStore</h1>
                        <div className="relative w-1/2">
                            <input
                                type="text"
                                placeholder="Search for products..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="absolute right-2 top-2 text-gray-600 hover:text-gray-800">
                                🔍
                            </button>
                            {suggestions.length > 0 && (
                                <ul className="absolute bg-white border rounded-lg shadow-lg w-full mt-2">
                                    {suggestions.map((suggestion) => (
                                        <li
                                            key={suggestion.id}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => {
                                                setSearchQuery(suggestion.title);
                                                setSuggestions([]);
                                            }}
                                        >
                                            {suggestion.title}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-4">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-5xl font-extrabold mb-4">Discover Our New Collection</h2>
                        <p className="text-lg mb-6">Explore the best deals and latest trends all in one place</p>
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100">
                            Shop Now
                        </button>
                    </div>
                </section>

                {/* Products Grid */}
                <section className="py-12 px-4">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Products</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition duration-300"
                                >
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="h-56 w-full object-contain p-4"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-lg font-semibold truncate mb-2" title={product.title}>
                                            {product.title}
                                        </h3>
                                        <p className="text-gray-700 font-bold text-xl mb-4">${product.price}</p>
                                        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            {isLoading ? (
                                <button
                                    className="bg-gray-500 text-white px-6 py-3 rounded-lg cursor-not-allowed"
                                    disabled
                                >
                                    Loading...
                                </button>
                            ) : (
                                <button
                                    onClick={loadMoreProducts}
                                    className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
                                >
                                    Load More
                                </button>
                            )}
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 text-gray-300 py-10">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                        <div>
                            <h4 className="text-lg font-bold mb-4">About Us</h4>
                            <p className="text-sm">FakeStore is your go-to platform for quality products at unbeatable prices.</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-4">Customer Service</h4>
                            <ul className="text-sm space-y-2">
                                <li>Contact Us</li>
                                <li>FAQs</li>
                                <li>Shipping & Returns</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                            <ul className="text-sm space-y-2">
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
                            <p className="text-sm mb-4">Subscribe to get updates on our latest offers!</p>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    <div className="text-center mt-8 text-sm">
                        &copy; 2025 FakeStore. All rights reserved.
                    </div>
                </footer>
            </div>
        </>
    );
}
