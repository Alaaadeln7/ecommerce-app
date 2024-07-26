import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const getUserFromCookies = () => {
  const userCookie = Cookies.get("user");
  if (userCookie === undefined || userCookie === null || userCookie === "") {
    return null;
  }

  try {
    return JSON.parse(userCookie);
  } catch (error) {
    return null;
  }
};
export const createUser = createAsyncThunk(
  "userReducer/createUser",
  async ({ userData, navigate }, { rejectWithValue }) => {
    const url = "https://eaglecode.onrender.com/user/register";
    try {
      const response = await axios.post(url, userData);
      navigate("/login");
      console.log("Server response:", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData, { rejectWithValue }) => {
    const url = "https://eaglecode.onrender.com/user/login";
    try {
      console.log(userData);
      const response = await axios.post(url, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const updateUser = createAsyncThunk(
  "user/loginUser",
  async ({ userData, user }, { rejectWithValue }) => {
    const url = `https://eaglecode.onrender.com/user/update/${user._id}`;
    try {
      console.log(userData);
      const response = await axios.patch(url, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userReducer = createSlice({
  name: "userReducer",
  initialState: {
    loading: false,
    user: getUserFromCookies(),
    error: "",
    token: Cookies.get("token") || null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
      Cookies.remove("token");
      Cookies.remove("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.user = {};
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        Cookies.set("token", action.payload.token, {
          expires: 7,
          secure: true,
        });
        Cookies.set("user", JSON.stringify(action.payload.user), {
          expires: 7,
          secure: true,
        });
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        console.log(action);
        state.error = "Please check your data";
      });
  },
});

export default userReducer.reducer;
export const { logout } = userReducer.actions;
