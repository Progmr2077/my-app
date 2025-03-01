import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, Row, Col } from 'react-bootstrap';
import PageHeader from '@/components/PageHeader';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from the API
    fetch('/api/movies')
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error fetching movies:', error));
  }, []);

  return (
    <>
      <PageHeader text="All Movies" />
      <Row>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Col key={movie._id} md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>{movie.plot}</Card.Text>
                  <Link href={`/movies/${encodeURIComponent(movie.title)}`}>
                    View Details
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </Row>
    </>
  );
}