import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import  Cart from "./pages/Cart"
import Home from "./pages/Home"
const App = () => {
  const [cartitems, setCartItems] = useState([]);
  const RemoveFromCartHandle = (id) => {
    const filteredArr = cartitems.filter((i) => i.id !== id);
    setCartItems(filteredArr);
  };

  return (
    <BrowserRouter>
      <div className="sticky top-0 z-40">
      <Navbar cartitems={cartitems} />
      </div>
      <Routes>
        <Route
          path="/"
          element={<Home cartitems={cartitems} setCartItems={setCartItems} RemoveFromCartHandle={RemoveFromCartHandle} />}
        />
        <Route
          path="/cart"
          element={<Cart cartitems={cartitems} setCartItems={setCartItems} RemoveFromCartHandle={RemoveFromCartHandle} />}
        />
      </Routes>
      <div>
      <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
