import { Container, Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toggleGameStarted } from "../reducers/gameStartedSlice";
import { toggleHeader } from "../reducers/headerSlice";

function Dashboard({ startTimer }) {
  const dispatch = useDispatch();

  return (
    <Container
      className="d-flex"
      fluid
      style={{
        height: "88vh",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Card style={{ width: "30rem" }}>
        <Card.Img
          className="img-fluid"
          variant="top"
          src="https://media.istockphoto.com/vectors/quiz-concept-quiz-word-vector-illustration-vector-id1204641429?k=20&m=1204641429&s=170667a&w=0&h=jJUVf9Nn9qtI4ZrCvtvLhkPohwq_RTHrWzYotS0qNGs="
        />
        <Card.Body className="text-center">
          <Card.Title className="lead">
            Are you ready for the most exciting quiz ever? <br />
            Let's find out.
          </Card.Title>
          <Button
            variant="primary"
            size="lg"
            className="mt-3 w-100"
            onClick={() => {
              dispatch(toggleGameStarted());
              dispatch(toggleHeader());
              startTimer();
            }}
          >
            Start Quiz
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Dashboard;
