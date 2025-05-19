import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducer/userSlice";
// import transferSlice from "./reducer/transferSlice";

export const store = configureStore({
  reducer: {
    loggedData: userSlice,
    // transferedData: transferSlice,
  },
});
