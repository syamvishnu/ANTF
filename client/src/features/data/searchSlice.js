import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  data: null,
  isError: false,
  isSuccess: false,
  message: "",
};

export const searchData = createAsyncThunk(
  "searchData/data",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/data/records",
        data
      );
      console.log(response.data);
      return response.data;
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

const searchSlice = createSlice({
  name: "searchData",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.data = null;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      ///////////////// Search Data   ///////////////////////
      .addCase(searchData.pending, (state) => {
        state.isLoading = true;
        state.data = null;
        state.isError = false;
        state.isSuccess = false;
        state.message = "Loading";
      })
      .addCase(searchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Successful";
      })
      .addCase(searchData.rejected, (state, action) => {
        state.isLoading = false;
        state.data = null;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = searchSlice.actions;
export default searchSlice.reducer;
