import { configureStore } from "@reduxjs/toolkit";
import correctAnswerSlice from "./reducers/correctAnswerSlice";
import gameStartedReducer from "./reducers/gameStartedSlice";
import incorrectAnswerSlice from "./reducers/incorrectAnswerSlice";
import timeSlice from "./reducers/timeSlice";
import headerSlice from "./reducers/headerSlice";
export default configureStore({
  reducer: {
    gameStarted: gameStartedReducer,
    correctAnswer: correctAnswerSlice,
    incorrectAnswer: incorrectAnswerSlice,
    time: timeSlice,
    header: headerSlice,
  },
});
