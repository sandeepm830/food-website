// pages/CartHome.jsx
import React, { forwardRef, useImperativeHandle, useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/cartSlice";


const CartHome = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartSubtotal, setSubtotal] = useState(0);
  const [cartDeliveryFee, setDeliveryFee] = useState(0);
  const [cartTaxes, setTaxes] = useState(0);
  const [total, setTotal] = useState(0);

  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Open cart method for parent component
  useImperativeHandle(ref, () => ({
    openCart: () => setIsOpen(true),
  }));

  // Remove item from cart
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  // Update item quantity
  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return; // Ensure minimum quantity is 1
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  // Calculate cart totals
  const calculateTotals = () => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const deliveryFee = subtotal > 500 ? 0 : 199;
    const taxes = Math.round((subtotal + deliveryFee) * 0.18);
    const grandTotal = subtotal + deliveryFee + taxes;

    setSubtotal(subtotal);
    setDeliveryFee(deliveryFee);
    setTaxes(taxes);
    setTotal(grandTotal);
  };

  useEffect(() => {
    calculateTotals();
  }, [cartItems]);

  return (
    <div
      className={`w-[40vw] h-screen bg-white fixed top-0 right-0 shadow-xl transition-transform duration-500 ${
        !isOpen ? "translate-x-[50vw]" : ""
      }`}
    >
      {/* Cart Header */}
      <header className="flex justify-between px-8 py-4 text-slate-700 border-b">
        <span className="font-bold text-2xl">Your Cart</span>
        <IoCloseSharp
          className="font-bold text-4xl cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
      </header>

      {/* Cart Items */}
      <div className="overflow-y-auto max-h-[70vh]">
        {cartItems.length === 0 ? (
          <p className="text-center mt-10 text-lg">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between px-8 py-4 items-center border-b"
            >
              {/* Image + Item Info */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p>Price: Rs {item.price}/-</p>
                </div>
              </div>

              {/* Quantity Control + Price + Remove */}
              <div className="flex items-center gap-4">
                {/* Quantity Controls */}
                <div className="flex items-center border rounded-lg">
                  <button
                    className="px-3 py-1 text-xl"
                    onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    className="px-3 py-1 text-xl"
                    onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                {/* Total Price */}
                <span>Rs {item.price * item.quantity}/-</span>

                {/* Remove Button */}
                <MdDeleteForever
                  className="text-red-600 text-2xl cursor-pointer"
                  onClick={() => handleRemove(item.id)}
                />
              </div>
            </div>
          ))
        )}
      </div>

      {/* Cart Summary & Place Order */}
      {cartItems.length > 0 && (
        <>
          <div className="p-8 border-t">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>Rs {cartSubtotal}/-</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee:</span>
              <span>Rs {cartDeliveryFee}/-</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes:</span>
              <span>Rs {cartTaxes}/-</span>
            </div>
            <div className="flex justify-between mt-4 text-xl font-bold border-t-1 pb-2 pt-2">
              <span>Total:</span>
              <span>Rs {total}/-</span>
            </div>
          </div>
        <div className="flex justify-center">
        <button className="w-[50%] bg-blue-600 text-white py-4 text-xl cursor-pointer ">
            Place Order
          </button>
        </div>
          
        </>
      )}
    </div>
  );
});

export default CartHome;
