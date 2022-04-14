import { useEffect } from "react";
import { Card, Container, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toggleGameStarted } from "../reducers/gameStartedSlice";
import { useSelector } from "react-redux";

import { toggleHeader } from "../reducers/headerSlice";

function End({ stopTimer }) {
  const correctAnswer = useSelector((state) => state.correctAnswer.value);
  const incorrectAnswer = useSelector((state) => state.incorrectAnswer.value);
  const time = useSelector((state) => state.time.value);
  const dispatch = useDispatch();

  useEffect(() => {
    stopTimer();
    dispatch(toggleHeader());
  }, []);

  return (
    <Container
      fluid
      className="d-flex"
      style={{
        height: "88vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card style={{ width: "30rem" }}>
        <Card.Body className="text-center lead">
          <Card.Title>Congratulations!! You've completed the quiz.</Card.Title>
          <Card.Text className="mt-4">
            Correct Answers: <b>{correctAnswer}</b>
          </Card.Text>
          <Card.Text>
            Incorrect Answers: <b>{incorrectAnswer}</b>
          </Card.Text>
          <Card.Text>
            Time: <b>{time}</b>
          </Card.Text>

          <Button
            variant="primary"
            size="lg"
            className="mt-3 w-100"
            onClick={() => dispatch(toggleGameStarted())}
          >
            Back to Home
          </Button>
        </Card.Body>
      </Card>
      {/* <div className="card" style={{ width: "30rem" }}>
        <div className="card-body text-center">
          <p class="h5 card-title">
            Congratulations!! You've completed the quiz.
          </p>
          <a
            className="btn btn-primary btn-lg mt-3 w-100"
            onClick={() => dispatch(toggleGameStarted())}
          >
            Back to Home
          </a>
        </div>
      </div> */}
    </Container>
  );
}

export default End;
