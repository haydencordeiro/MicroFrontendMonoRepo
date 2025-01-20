import "tailwindcss/tailwind.css";
import React, { useState, useEffect } from 'react';

export default function ProductsListing() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from FakeStoreAPI
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <>
            {/* E-commerce Landing Page */}
            <div className="bg-gray-50 min-h-screen">
                {/* Header */}
                <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-6 px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center w-full">
                        <h1 className="text-4xl font-bold">Welcome to FakeStore</h1>
                        <p className="mt-2 md:mt-0 text-lg">Your one-stop shop for amazing products</p>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="bg-white py-8 px-4">
                    <div className="text-center w-full">
                        <h2 className="text-3xl font-bold mb-4">New Collection</h2>
                        <p className="text-gray-600 mb-6">Discover our latest arrivals and best sellers for the season</p>
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600">
                            Shop Now
                        </button>
                    </div>
                </section>

                {/* Products Grid */}
                <section className="py-8 px-4">
                    <div className="w-full">
                        <h2 className="text-2xl font-bold mb-6">Our Products</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {products.map((product) => (
                                <div 
                                    key={product.id} 
                                    className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                                >
                                    <img 
                                        src={product.image} 
                                        alt={product.title} 
                                        className="h-48 w-full object-contain p-4"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold truncate" title={product.title}>{product.title}</h3>
                                        <p className="text-gray-500 mt-1">${product.price}</p>
                                        <button 
                                            className="mt-4 w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-800 text-white py-6 px-4">
                    <div className="text-center w-full">
                        <p className="text-sm">&copy; 2025 FakeStore. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}
