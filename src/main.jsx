import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Usercontext from "./Context/Usercontext.jsx";
import { Provider } from "react-redux";
import { store } from './store/store.js'

createRoot(document.getElementById("root")).render(
  <Provider store={store}> {/* ✅ Pass the store here */}
    <Usercontext>
      <App />
    </Usercontext>
  </Provider>
);
