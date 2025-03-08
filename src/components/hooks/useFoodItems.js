// useFoodItems.js
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";


const useFoodItems = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "foodItems"));
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id, // Firestore document ID
          ...doc.data(), // Spread the document data (item, price, etc.)
        }));
        setFoodItems(items);
      } catch (error) {
        console.error("Error fetching food items from Firestore:", error.message);
        alert("Failed to load food items. Please try again later.");
      }
    };

    fetchFoodItems();
  }, []);
  // Return the array of food items, each item is an object containing the Firestore document ID and its data
  return foodItems;
  
};

export default useFoodItems;
