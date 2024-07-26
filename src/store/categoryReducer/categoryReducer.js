import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/api";

export const fetchCategories = createAsyncThunk(
  "data/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/category/all");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const categoryReducer = createSlice({
  name: "categoryReducer",
  initialState: {
    loading: false,
    categories: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.categories = [];
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.loading = false;
        state.error = "Error fetching categories";
      });
  },
});

export default categoryReducer.reducer;
