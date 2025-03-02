import { Container, Row, Col, Card } from "react-bootstrap";

export default function MovieDetails({ movie }) {
  return (
    <Container>
      <Row>
        {movie.poster && (
          <Col md>
            <img src={movie.poster} alt="poster" className="w-100" />
            <br />
            <br />
          </Col>
        )}
        <Col md>
          <Card>
            <Card.Body>
              <strong>Directed By:</strong> {movie.directors.join(", ")}
              <br />
              <br />
              <p>{movie.fullplot}</p>
              <strong>Cast:</strong> {movie.cast && movie.cast.length > 0 ? movie.cast.join(", ") : "N/A"}
              <br />
              <br />
              <strong>Awards:</strong> {movie.awards.text}
              <br />
              <strong>IMDB Rating:</strong> {movie.imdb.rating} ({movie.imdb.votes} votes)
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}