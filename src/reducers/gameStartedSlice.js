import { createSlice } from "@reduxjs/toolkit";

export const gameStartedSlice = createSlice({
  name: "gameStarted",
  initialState: {
    value: false,
  },
  reducers: {
    toggleGameStarted: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleGameStarted } = gameStartedSlice.actions;
export default gameStartedSlice.reducer;
