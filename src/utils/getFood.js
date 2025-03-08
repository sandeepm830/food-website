import { db } from "../firebase";
import { collection, doc, getDocs } from "firebase/firestore";

export const getFoodItems = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "foodItems"));
    const foodItems = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return foodItems;
  } catch (error) {
    console.error("❌ Error fetching food items: ", error);
    return [];
  }
};