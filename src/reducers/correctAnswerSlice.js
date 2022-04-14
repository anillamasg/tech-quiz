import { createSlice } from "@reduxjs/toolkit";

export const correctAnswerSlice = createSlice({
  name: "correctAnswer",
  initialState: {
    value: 0,
  },
  reducers: {
    incrementCA: (state) => {
      state.value += 1;
    },
    resetCA: (state) => {
      state.value = 0;
    },
  },
});

export const { incrementCA, resetCA } = correctAnswerSlice.actions;
export default correctAnswerSlice.reducer;
