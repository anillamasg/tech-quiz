import "./Header.css";
import { Container } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import { BiX, BiCheck, BiTime } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Fragment } from "react";

function Header() {
  const header = useSelector((state) => state.header.value);
  const correctAnswer = useSelector((state) => state.correctAnswer.value);
  const incorrectAnswer = useSelector((state) => state.incorrectAnswer.value);
  const time = useSelector((state) => state.time.value);

  return (
    <Fragment>
      {header && (
        <Navbar className="header" expand="lg">
          <Container className="my-2">
            <Nav.Item>
              <BiCheck />
              <span>{correctAnswer} correct</span>
            </Nav.Item>
            <Nav.Item>
              <BiX />
              <span>{incorrectAnswer} wrong</span>
            </Nav.Item>
            <Nav.Item>
              <BiTime />
              <span style={{ marginLeft: "0.35rem" }}>{time}</span>
            </Nav.Item>
          </Container>
        </Navbar>
      )}
    </Fragment>
  );
}

export default Header;
