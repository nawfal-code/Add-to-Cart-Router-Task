import React from "react";
// Design and develop a cart page that displays the items added to the cart.
const Cart = ({ cartitems, setCartItems, RemoveFromCartHandle }) => {

  if (cartitems.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-300">
        <h2 className="text-2xl font-bold text-gray-700">
          No items in cart 🛒
        </h2>
      </div>
    );
  }
// In the Cart page users may be able to Increase/Decrease the quantity of each item.
  const handleIncrementQuantity = (id) => {
    const updateProductCart = cartitems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updateProductCart);
  };

  const handleDecrementQuantity = (id) => {
    const updateProductCart = cartitems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updateProductCart);
  };
// Each cart item should show the product name, price, quantity, and a "Remove from Cart" button.
  return (
    <div className="p-4 bg-gray-300 min-h-screen">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {cartitems.map((item) => (
          <div
            key={item.id}
            className="border border-gray-600 hover:bg-gray-200 hover:scale-105 flex flex-col rounded p-4"
          >
            <img className="h-36 mx-auto" src={item.image} alt={item.title} />
            <h2 className="text-center font-bold h-12 overflow-hidden">
              {item.title}
            </h2>
            <h3 className="text-center p-2">
              <span className="text-green-800 font-bold">
                {/* Total price for each item in the cart should be shown as per quantity. */}
                ${(item.quantity * item.price).toFixed(2)}
              </span>
            </h3>
            <div className="text-center text-gray-700 font-bold h-10 mb-2 flex justify-center">
              <button
                onClick={() => handleDecrementQuantity(item.id)}
                className="border border-gray-600 p-3 font-bold hover:bg-gray-600 hover:text-white"
              >
                -
              </button>
              <div className="p-3">{item.quantity}</div>
              <button
                onClick={() => handleIncrementQuantity(item.id)}
                className="border border-gray-600 p-3 font-bold hover:bg-gray-600 hover:text-white"
              >
                +
              </button>
            </div>
            <button
              onClick={() => RemoveFromCartHandle(item.id)}
              className="bg-red-900 text-white text-center w-36 p-3 rounded mx-auto hover:bg-red-700 font-bold cursor-pointer"
            >
              Remove from Cart
            </button>
          </div>
        ))}
      </div>

      {/* --- Total Section --- */}
      <div className="col-span-full bg-white p-6 rounded shadow-md mt-6 text-center">
        {(() => {
          const total = cartitems.reduce((sum, item) => sum + item.price * item.quantity, 0);
          // The final price should be given a 10% discount on the total price.
          const discount = total * 0.1;
          const finalPrice = total - discount;
          return (
            <>
              <h2 className="text-2xl font-bold text-gray-800">Cart Summary</h2>
              <p className="text-gray-700 mt-2">
                Total Price: <span className="font-bold">${total.toFixed(2)}</span>
              </p>
              <p className="text-gray-700 mt-1">
                Discount (10%): <span className="font-bold text-green-700">-${discount.toFixed(2)}</span>
              </p>
              <h3 className="text-xl font-bold text-blue-800 mt-2">
                Final Price: ${finalPrice.toFixed(2)}
              </h3>
            </>
          );
        })()}
      </div>
    </div>
  );
};

export default Cart;
