import { Card, Container } from "react-bootstrap";

function Loading() {
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
      <Card style={{ width: "30rem", height: "55vh", alignItems: "center" }}>
        <Card.Img
          variant="top"
          className="img-fluid h-100"
          src="https://i.pinimg.com/originals/d7/1d/35/d71d35c0bea47efae9d92396bfbbcb57.gif"
        />
      </Card>
    </Container>
  );
}

export default Loading;
