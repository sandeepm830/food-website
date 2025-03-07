// App.jsx
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "./store/cartSlice";
import Home from "./pages/Home";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Clear cart when app is loaded
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
