// App.jsx
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "./store/cartSlice";
import Home from "./pages/Home";
import { db } from "./firebase";
import { addFoodItem } from "./utils/addFood";

import FoodList from '../src/components/FoodList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Clear cart when app is loaded
    dispatch(clearCart());
  }, [dispatch]);



   {/* testing codes for firebase database, have to remove later */}


  

    const handleAddFood =()=>{
      addFoodItem ({
        name: "Margherita Pizza",
        price: 12,
        category: "Pizza",
        isAvailable: true,
      });
    };





      {/* testing codes ends here  */}

  return (
    <>
    {/* testing codes for firebase database, have to remove later
    <div>
      <h1>Food Booking App</h1>
      <button onClick={uploadAllItems}  className="p-8 bg-amber-400 cursor-pointer">Add Food Items</button>
      <FoodList></FoodList>
    </div> */}






      {/* testing codes ends here  */}


{/* commented to stop rendering */}


      <Home />
      
    </>
  );
}

export default App;
