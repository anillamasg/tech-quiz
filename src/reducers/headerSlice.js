import { createSlice } from "@reduxjs/toolkit";

export const headerSlice = createSlice({
  name: "header",
  initialState: {
    value: false,
  },
  reducers: {
    toggleHeader: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleHeader } = headerSlice.actions;
export default headerSlice.reducer;
