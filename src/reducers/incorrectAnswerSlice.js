import { createSlice } from "@reduxjs/toolkit";

export const incorrectAnswerSlice = createSlice({
  name: "incorrectAnswer",
  initialState: {
    value: 0,
  },
  reducers: {
    incrementIA: (state) => {
      state.value += 1;
    },
    resetIA: (state) => {
      state.value = 0;
    },
  },
});

export const { incrementIA, resetIA } = incorrectAnswerSlice.actions;
export default incorrectAnswerSlice.reducer;
