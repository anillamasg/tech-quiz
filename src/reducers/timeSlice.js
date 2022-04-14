import { createSlice } from "@reduxjs/toolkit";

export const timeSlice = createSlice({
  name: "time",
  initialState: {
    value: "00:00",
  },
  reducers: {
    setTime: (state, action) => {
      state.value = action.payload;
    },
    resetTime: (state) => {
      state.value = "00:00";
    },
  },
});

export const { setTime, resetTime } = timeSlice.actions;
export default timeSlice.reducer;
