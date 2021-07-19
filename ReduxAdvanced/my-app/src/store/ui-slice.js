import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false },
  reducers: {
    togge(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});
export const uiSliceAction = uiSlice.actions;
export default uiSlice;
