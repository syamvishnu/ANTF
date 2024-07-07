import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  data: null,
  isError: false,
  isSuccess: false,
  message: "",
};

export const addData = createAsyncThunk("data/addData", async (data, thunkAPI) => {
  try {
    const response = await axios.post("http://localhost:8000/data", data);
    console.log(response.data);
    return response.data; // Assuming the server responds with relevant data
  } catch (error) {
const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        (error.message && error.toString());

      return thunkAPI.rejectWithValue(message);  }
});

const dataSlice = createSlice({
  name: "inputData",
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
      .addCase(addData.pending, (state) => {
        state.isLoading = true;
        state.data = null;
        state.isError = false;
        state.isSuccess = false;
        state.message = "Loading";
      })
      .addCase(addData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Successful";
      })
      .addCase(addData.rejected, (state, action) => {
        state.isLoading = false;
        state.data = null;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = dataSlice.actions;
export default dataSlice.reducer;
