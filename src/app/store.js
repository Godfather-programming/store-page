import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../features/cart/cartSlice"
import productReducer from "../features/product/productSlice"

import logger from "redux-logger";

const store = configureStore({
    reducer: { cart : cartReducer, product: productReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store