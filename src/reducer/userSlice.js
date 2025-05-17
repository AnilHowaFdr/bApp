import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("userData")) || null,
  // user: JSON.parse(localStorage.getItem("userData"))? JSON.parse(localStorage.getItem("userData")): null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    currentUserData: (state, actions) => {
      state.user = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { currentUserData } = userSlice.actions;

export default userSlice.reducer;
