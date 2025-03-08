import React, { useContext, useRef, useState } from "react";
import Nav from "../components/Nav";
import { categories } from "../Category";
// import FoodItems from "../data/FoodItems";
import { GiThreeLeaves, GiMeat } from "react-icons/gi";
import { dataContext } from "../Context/Usercontext";
import CartHome from "../components/cartHome";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import useFoodItems from "../components/hooks/useFoodItems";



function Home() {

// code for dispatching the data to store by redux 
const dispatch = useDispatch();
const handleAddToCart = (food) => {
  const item = {
    id: food.id,
    name: food.item,
    price: food.price,
    image: food.image,
    quantity: 1,
  };
  dispatch(addToCart(item));
   // Send item to the Redux store
};

// save useFoodItems to FoodItems to match the old array 
 const FoodItems = useFoodItems();
 
 





  let { cat, setCat, input } = useContext(dataContext);

  function filterItems(category) {
    if (category === "All") {
      setCat(FoodItems);
    } else {
      // Case-insensitive matching for better accuracy
      const newList = FoodItems.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
      setCat(newList);
    }
  }
  // functions for create reference to open the cart slider 


  const cartRef = useRef();
  const handleOpenCart = () =>{
    if (cartRef.current){
      cartRef.current.openCart();
    }
  }

   // functions for create reference to open the cart slider ends here









  return (
    <div className="bg-slate-300 text-black min-h-screen">
      {/* passing the openCart function to nav 
       */}

      <Nav onCartOpen={handleOpenCart} />

      {/* Category Filter with condition that if input has an value, category will hide*/}

      {!input ? (
        <div className="categories  flex justify-center items-center gap-4 py-2 mt-12 flex-wrap ">
          {categories.map((val, i) => (
            <div
              key={i}
              className="item w-28 h-28 bg-white p-4 rounded shadow-2xl flex flex-col items-center justify-center hover:scale-110 transition-transform ease-in-out duration-150 cursor-pointer gap-2 text-2xl hover:text-slate-700 hover:shadow-amber-200"
              onClick={() => filterItems(val.name)}
            >
              {val.image}
              <span className="mt-2 text-sm font-medium text-black">
                {val.name}
              </span>
            </div>
          ))}
        </div>
      ) : null}

      {/* Products Display */}
      <div className="products-Container p-10 flex gap-8 flex-wrap justify-center">
        {cat.map((food, i) => (
          <div
            key={i}
            className="product w-60 h-80 bg-white rounded p-2 shadow-2xl hover:shadow-amber-200 hover:scale-110 transition-transform ease-in-out duration-150"
          >
            <img
              className="w-full h-[60%] rounded object-cover"
              src={food.image}
              alt={food.item}
            />

            <div className="content">
              <h1 className="font-bold pr-4 my-2">{food.item}</h1>

              <div className="flex justify-between pr-4 my-2">
                <p>Rs {food.price}/-</p>
                <div className="flex justify-center items-center gap-2">
                  {/* Veg/Non-Veg Icon */}
                  {food.type === "Veg" ? (
                    <GiThreeLeaves className="text-green-500" />
                  ) : (
                    <GiMeat className="text-xl text-red-400" />
                  )}

                  <p>{food.type}</p>
                </div>
              </div>

              <div className="flex justify-center p-2 bg-slate-700 items-center rounded-b-lg">
                <button className="w-auto font-bold text-white cursor-pointer"
                onClick={()=>handleAddToCart(food)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <CartHome ref={cartRef} />
    </div>
  );
}

export default Home;
