import React, { useContext, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { MdFastfood } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { useSelector } from "react-redux";
import { dataContext } from "../Context/Usercontext";
import FoodItems from "../data/FoodItems";

function Nav({ onCartOpen }) {
  let { input, setInput, cat, setCat } = useContext(dataContext);

  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total quantity in the cart
  const cartQty = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const newList = FoodItems.filter((food) => {
      return food.item.toLowerCase().includes(input.toLowerCase());
    });
    setCat(newList);
  }, [input]);

  return (
    <nav className="w-full h-[80px] bg-slate-600 flex justify-between items-center px-5 shadow-2xl shadow-amber-200">
      {/* Logo */}
      <div className="logo w-16 h-16 rounded bg-white flex justify-center items-center shadow-2xl">
        <MdFastfood className="text-slate-700 text-4xl" />
      </div>

      {/* Search Box */}
      <form
        action=""
        className="flex items-center gap-2 bg-white px-4 py-2 rounded text-black w-[50%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <IoSearch className="text-2xl" />
        <input
          type="text"
          placeholder="Search here.."
          className="border-none outline-none px-4 text-black w-full text-xl"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      {/* Cart */}
      <div
        className="logo w-16 h-16 rounded bg-white flex justify-center items-center shadow-2xl relative cursor-pointer"
        onClick={onCartOpen}
      >
        {cartQty > 0 && (
          <span className="absolute top-0 text-slate-700 right-2 text-lg font-bold">
            {cartQty}
          </span>
        )}
        <IoMdCart className="text-slate-700 text-4xl" />
      </div>
    </nav>
  );
}

export default Nav;
