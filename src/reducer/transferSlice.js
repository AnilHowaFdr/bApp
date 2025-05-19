import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: 
  
//   JSON.parse(localStorage.getItem("transferData")) || null,
  // user: JSON.parse(localStorage.getItem("userData"))? JSON.parse(localStorage.getItem("userData")): null,
};

export const userSlice = createSlice({
  name: "transfer",
  initialState,
  reducers: {
    currentTransferData: (state, actions) => {
      state.transfer = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { currentTransferData } = transferSlice.actions;

export default transferSlice.reducer;
