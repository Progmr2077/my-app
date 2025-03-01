import { Container, Row, Col } from 'react-bootstrap';

export default function MovieDetails({ movie }) {
    return (
        <Container>
            <Row>
                {movie.poster && (
                    <Col md={4}>
                        <img src={movie.poster} alt={movie.title} className="img-fluid" />
                    </Col>
                )}
                <Col md={movie.poster ? 8 : 12}>
                    <p><strong>Directed By:</strong> {movie.directors?.join(', ') || 'N/A'}</p>
                    <p>{movie.fullplot || 'No plot available.'}</p>
                    <p><strong>Cast:</strong> {movie.cast?.length ? movie.cast.join(', ') : 'N/A'}</p>
                    <p><strong>Awards:</strong> {movie.awards?.text || 'N/A'}</p>
                    <p><strong>IMDB Rating:</strong> {movie.imdb?.rating || 'N/A'} ({movie.imdb?.votes || 'N/A'} votes)</p>
                </Col>
            </Row>
        </Container>
    );
}