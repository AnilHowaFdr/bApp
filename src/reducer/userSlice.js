import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userData: (state, action) => {
      console.log(state.user);
      console.log(state.action);
    },
  },
});

// Action creators are generated for each case reducer function
export const { userData } = userSlice.actions;

export default userSlice.reducer;
