import React, { createContext, useState, useEffect } from "react";
import useFoodItems from "../components/hooks/useFoodItems";

export const dataContext = createContext();

function Usercontext({ children }) {
  const [cat, setCat] = useState([]);
  const [input, setInput] = useState("");

  // Fetch food items using the custom hook
  const foodItems = useFoodItems();

  // Sync fetched food items with `cat` state when available
  useEffect(() => {
    if (foodItems.length > 0) {
      setCat(foodItems);
    }
  }, [foodItems]);

  const data = {
    input,
    setInput,
    cat,
    setCat,
    foodItems, // ✅ Pass the original food list
  };

  return (
    <dataContext.Provider value={data}>
      {children}
    </dataContext.Provider>
  );
}

export default Usercontext;
