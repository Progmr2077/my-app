import { Container, Row, Col } from "react-bootstrap";

export default function MovieDetails({ movie }) {
    return (
        <Container>
            <Row>
                {movie.poster && (
                    <Col md>
                        <img src={movie.poster} alt="poster" className="w-100" />
                        <br /><br />
                    </Col>
                )}
                <Col md>
                    <strong>Directed By:</strong> {movie.directors?.join(", ") || "N/A"}<br /><br />
                    <p>{movie.fullplot || "No description available."}</p>
                    <strong>Cast:</strong> {movie.cast?.length ? movie.cast.join(", ") : "N/A"}<br /><br />
                    <strong>Awards:</strong> {movie.awards?.text || "N/A"}<br />
                    <strong>IMDB Rating:</strong> {movie.imdb?.rating || "N/A"} ({movie.imdb?.votes || "N/A"} votes)
                </Col>
            </Row>
        </Container>
    );
}