import { ButtonGroup, Card, Container, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { incrementCA } from "../reducers/correctAnswerSlice";
import { incrementIA } from "../reducers/incorrectAnswerSlice";

function Quiz({ quizData, count, nextQuestion }) {
  const dispatch = useDispatch();

  const checkIfCorrect = (e) => {
    const correctAnswer = quizData.correct_answer;
    if (e.target.innerText === correctAnswer) {
      dispatch(incrementCA());
    } else {
      dispatch(incrementIA());
    }
  };

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
        <Card.Header
          className="text-center h3 text-secondary"
          style={{ background: "none" }}
        >
          Question {count}
        </Card.Header>
        <Card.Body>
          <Card.Text className="lead">{quizData.question}</Card.Text>
        </Card.Body>
        <ButtonGroup className="mt-1" vertical aria-label="Basic example">
          {quizData.options.map((option, index) => {
            return (
              <Button
                size="lg"
                className="mt-2 rounded"
                variant="outline-primary"
                onClick={(e) => {
                  checkIfCorrect(e);
                  nextQuestion();
                }}
                key={index}
              >
                {option}
              </Button>
            );
          })}
        </ButtonGroup>
      </Card>
    </Container>
  );
}

export default Quiz;
