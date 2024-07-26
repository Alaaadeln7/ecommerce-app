import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchProducts = createAsyncThunk(
  "productsReducer/fetchProducts",
  async () => {
    const res = await fetch(`https://eaglecode.onrender.com/products`);
    const result = res.json();
    return result;
  }
);
export const deleteProduct = createAsyncThunk(
  "productsReducer/deleteProduct",
  async (productId) => {
    try {
      const response = await axios.delete(
        `https://eaglecode.onrender.com/products/${productId}`
      );
      console.log(response);
      return response.data;
    } catch (error) {
      throw Error("Error deleting product");
    }
  }
);
export const addProduct = createAsyncThunk(
  "productsReducer/addProduct",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://eaglecode.onrender.com/products/addProduct`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const fetchSingleProduct = createAsyncThunk(
  "productsReducer/fetchSingleProduct",
  async (productId) => {
    const response = await axios.get(
      `https://eaglecode.onrender.com/products/${productId}`
    );
    return response?.data.data.product;
  }
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async ({ productId, values }) => {
    const response = await axios.patch(
      `https://eaglecode.onrender.com/products/${productId}`,
      values,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response.data);
    return response.data;
  }
);
const productsReducer = createSlice({
  name: "productsReducer",
  initialState: {
    products: [],
    loading: false,
    error: "",
    status: null,
    product: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.products = [];
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.error = "Error fetching products";
      })
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.status = action.payload.status;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        console.log(action.payload);
      })
      .addCase(deleteProduct.rejected, (state) => {
        state.loading = false;
        state.error = "Error deleting products";
      })
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
        console.log(action.payload);
        state.status = action.payload.status;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchSingleProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productsReducer.reducer;
