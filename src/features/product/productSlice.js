import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../services/config";

const initialState = {
    loading: false,
    products: [],
    error: "",
}

const fectchProducts = createAsyncThunk("products/fetchproducts", () => {
    return api.get("products");        
})


const productsSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fectchProducts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fectchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
            state.error = "";
        })
        builder.addCase(fectchProducts.rejected, (state, action) => {
            state.loading = false;
            state.products = [];
            state.error = action.error.message
        })
    }
})


export default productsSlice.reducer
// console.log(productsSlice.reducer)
export { fectchProducts }
export const selectorProduct = store => store.product