import PageHeader from '@/components/PageHeader';
import useSWR from 'swr';
import { Card, Row, Col, Container } from 'react-bootstrap';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR('/api/movies?page=1&perPage=10', fetcher);

  if (error) return <p>Failed to load movies.</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <>
      {/* Page Header */}
      <PageHeader text="Film Collection : Sorted By Date" />

      <Container>
        <Row>
          {data.map((movie) => (
            <Col key={movie._id} md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>{movie.fullplot}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}