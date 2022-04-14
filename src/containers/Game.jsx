import { useEffect, useState } from "react";
import End from "../components/End";
import Loading from "../components/Loading";
import Quiz from "../components/Quiz";

const URL = "https://opentdb.com/api.php?amount=10&category=18&type=multiple";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function Game({ stopTimer }) {
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const getData = () => {
    fetch(URL)
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        let myData = myJson.results;
        let temp;

        myData.forEach((data) => {
          temp = [data.correct_answer, ...data.incorrect_answers];
          data.options = shuffle(temp);
        });

        setQuizData(myData);
        setLoading(false);
      });
  };

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {currentQuestion === 10 ? (
        <End stopTimer={stopTimer} />
      ) : loading ? (
        <Loading />
      ) : (
        <Quiz
          quizData={quizData[currentQuestion]}
          count={currentQuestion + 1}
          nextQuestion={nextQuestion}
        />
      )}
    </>
  );
}

export default Game;
