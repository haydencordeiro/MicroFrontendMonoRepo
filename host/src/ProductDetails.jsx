import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await res.json();
                setProduct(data);
            } catch (error) {
                console.error("Failed to fetch product details:", error);
            }
        };

        fetchProductDetails();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-2xl mx-auto py-12 px-4">
            <h2 className="text-3xl font-bold mb-6">{product.title}</h2>
            <img src={product.image} alt={product.title} className="w-full h-96 object-contain mb-6" />
            <p className="text-xl font-bold mb-4">${product.price}</p>
            <p className="text-lg mb-6">{product.description}</p>
            <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition">
                Add to Cart
            </button>
        </div>
    );
}
