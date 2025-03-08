import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export const addFoodItem = async (item)=>{
  try{
    await addDoc(collection(db, "foodItems"), item);
    console.log("Food item added: ", item);
  }
  catch(error){
    console.error("Error adding Food Items: ", error);
  };
  

  
};