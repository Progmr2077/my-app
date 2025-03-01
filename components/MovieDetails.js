import { Container, Row, Col } from 'react-bootstrap';

export default function MovieDetails({ movie }) {
  return (
    <Container>
      <Row>
        {movie.poster && (
          <Col md={4}>
            <img src={movie.poster} alt={`${movie.title} Poster`} className="img-fluid" />
          </Col>
        )}
        <Col md={movie.poster ? 8 : 12}>
          <p><strong>Directed By:</strong> {movie.directors.join(', ')}</p>
          <p>{movie.fullplot}</p>
          <p><strong>Cast:</strong> {movie.cast?.length > 0 ? movie.cast.join(', ') : 'N/A'}</p>
          <p><strong>Awards:</strong> {movie.awards.text}</p>
          <p><strong>IMDB Rating:</strong> {movie.imdb.rating} ({movie.imdb.votes} votes)</p>
        </Col>
      </Row>
    </Container>
  );
}