import Header from "../components/Header/Header";
import Dashboard from "../components/Dashboard";
import { useEffect } from "react";
import Game from "./Game";
import { setTime, resetTime } from "./../reducers/timeSlice";
import { resetCA } from "./../reducers/correctAnswerSlice";
import { resetIA } from "./../reducers/incorrectAnswerSlice";
import { useDispatch, useSelector } from "react-redux";

let min = 0,
  sec = 0,
  intervalID = 0;

function App() {
  const gameStarted = useSelector((state) => state.gameStarted.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCA());
    dispatch(resetIA());
    dispatch(resetTime());
    min = 0;
    sec = 0;
  }, [gameStarted]);

  const startTimer = () => {
    intervalID = setInterval(() => {
      sec += 1;
      if (sec === 60) {
        min += 1;
        sec = 0;
      }

      let minString = min < 10 ? `0${min}` : `${min}`;
      let secString = sec < 10 ? `0${sec}` : `${sec}`;

      const time = `${minString}:${secString}`;
      dispatch(setTime(time));
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalID);
  };

  return (
    <>
      <Header />
      {gameStarted ? (
        <Game stopTimer={stopTimer} />
      ) : (
        <Dashboard startTimer={startTimer} />
      )}
    </>
  );
}

export default App;
