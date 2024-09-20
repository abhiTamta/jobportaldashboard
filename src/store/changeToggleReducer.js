import { createSlice } from "@reduxjs/toolkit";

const changeSlice = createSlice({
  name: "changeToggle",
  initialState: {
    menuflod: false,
  },
  reducers: {
    onchange: (state, action) => {
      state.menuflod = action.payload;
      console.log(menuflod);
    },
  },
});

export const onchange = changeSlice.actions;
export default changeSlice.reducer;
