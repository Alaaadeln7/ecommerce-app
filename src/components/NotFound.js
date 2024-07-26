import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Container
      style={{ height: "50vh" }}
      className="not-found-container d-flex justify-content-center align-items-center text-center "
    >
      <Row>
        <Col>
          <h1
            style={{ fontSize: "5rem", color: "#dc3545" }}
            className="not-found-heading"
          >
            404
          </h1>
          <h1 className="not-found-text">Oops! Page not found.</h1>
          <button className="btn btn-danger mt-3" onClick={() => navigate("/")}>
            Back to home page
          </button>
        </Col>
      </Row>
    </Container>
  );
}
