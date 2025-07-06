import React from "react";
import { useState, useEffect } from "react";

const Stories = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 font-inter">
        <div className="text-xl text-gray-700">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-100 font-inter">
        <div className="text-xl text-red-700">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 font-inter">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Our Products</h1>
        <p className="text-lg text-gray-600">
          Discover amazing items from our collection.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg flex flex-col"
          >
            <div className="relative h-48 w-full overflow-hidden flex items-center justify-center p-4">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-full max-w-full object-contain rounded-md"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/150x150/E0E0E0/000000?text=No+Image`;
                }}
              />
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <h2
                className="text-lg font-semibold text-gray-800 mb-2 truncate"
                title={product.title}
              >
                {product.title}
              </h2>
              <p className="text-sm text-gray-500 mb-2 capitalize">
                {product.category}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xl font-bold text-indigo-600">
                  ${product.price.toFixed(2)}
                </span>
                <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors shadow-md">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
