// FoodList.jsx
import React from "react";
import useFoodItems from "./hooks/useFoodItems";

const FoodList = () => {
  const foodItems = useFoodItems();
  console.log("FoodItems Fetched from Database : ", foodItems);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {foodItems.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg shadow-lg">
            <img
              src={item.image}
              alt={item.item}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{item.item}</h2>
            <p className="text-gray-600">{item.type}</p>
            <p className="text-lg font-bold">₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
