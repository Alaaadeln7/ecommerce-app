import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsReducer/productsReducer";
import UserReducer from "./userReducer/UserReducer";
import categoryReducer from "./categoryReducer/categoryReducer";

const store = configureStore({
  reducer: {
    products: productsReducer,
    user: UserReducer,
    categories: categoryReducer,
  },
});

export default store;
