import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = ({ cartitems, setCartItems,RemoveFromCartHandle }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

// Use the Fake Store API to fetch a list of products.
  const fetchData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setItems(res.data);
     setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

// When the "Add to Cart" button is clicked, the product should be added to the cart.
  const AddToCartHandle = (id) => {
    const product = items.find((item) => item.id === id);
    if (cartitems.some((i) => i.id === id)) {
      alert("Already added!");
    } else {
     setCartItems([...cartitems, { ...product, quantity: 1 }]);
    }
  };
if (loading) return (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
    <div className="w-12 h-12 border-4 border-orange-700 border-t-transparent rounded-full animate-spin"></div>
    <h2 className="mt-4 text-xl font-semibold tracking-wide">Loading products...</h2>
  </div>
);

// Display the fetched products in a user-friendly format on the main page

return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 gap-5 bg-gray-300">
      {items.map((item) => {
        const isAdded = cartitems.some((i) => i.id === item.id);
        // Each product should display key information, such as the product image, title, price, and description.
        // Ensured that the products are displayed in a responsive layout
        return (
          <div
            key={item.id}
            className="border border-gray-600 hover:bg-gray-200 hover:scale-105 flex flex-col rounded p-4"
          >
            <img className="h-36 mx-auto" src={item.image} alt={item.title} />
            <h2 className="text-center font-bold h-12 overflow-hidden">
              {item.title}
            </h2>
            <h3 className="text-center font-semibold text-green-900 mb-2">
              ${item.price}
            </h3>
            <p className="text-center text-gray-700 font-light text-sm h-10 overflow-hidden mb-2">
              {item.description}
            </p>
            
{/* If the product is already in the cart display  "Remove from Cart" button, when clicked, the product should be removed from the cart. */}
            {!isAdded ? (
              <button
                onClick={() => AddToCartHandle(item.id)}
                className="bg-gray-900 text-white text-center w-36 p-3 rounded mx-auto hover:bg-orange-700 font-bold cursor-pointer"
              >
                Add To Cart
              </button>
            ) : (
              <button
                onClick={() => RemoveFromCartHandle(item.id)}
                className="bg-red-900 text-white text-center w-36 p-3 rounded mx-auto hover:bg-red-700 font-bold cursor-pointer"
              >
                Remove from Cart
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
