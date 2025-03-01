import Link from 'next/link';
import { Card } from 'react-bootstrap';
import MovieDetails from '@/components/MovieDetails';
import PageHeader from '@/components/PageHeader';

export default function About({ movie }) {
  return (
    <>
      <PageHeader text="About the Developer" />
      <Card>
        <Card.Body>
          <h2>About the Developer</h2>
          <p>Jacob Rivera</p>
          <p>A short description about yourself.</p>
          <Link href="/movies/Dark City">Dark City</Link>
          <MovieDetails movie={movie} />
        </Card.Body>
      </Card>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://your-vercel-app/api/movies/your-movie-id');
  const data = await res.json();

  return {
    props: {
      movie: data,
    },
  };
}