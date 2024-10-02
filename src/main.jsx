import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./redux/formSlice.js";
import stepReducer from "./redux/stepSlice.js";

const store = configureStore({
  reducer: {
    form: formReducer,
    step: stepReducer,
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
