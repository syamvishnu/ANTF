import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        (error.message && error.toString());

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const signinUser = createAsyncThunk(
  "auth/signin",
  async (user, thunkAPI) => {
    try {
      return await authService.signin(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        (error.message && error.toString());

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: {
    //Signup User
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.user = action.payload;
    },
    [registerUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    //Signin User
    [signinUser.pending]: (state) => {
      state.isLoading = true;
    },
    [signinUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.user = action.payload;
    },
    [signinUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
