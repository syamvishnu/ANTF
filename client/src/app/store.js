import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import dataReducer from "../features/data/dataSlice";
import searchSlice from "../features/data/searchSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    data: dataReducer,
    search: searchSlice,
  },
});
