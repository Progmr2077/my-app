import Link from 'next/link';
import { Card } from 'react-bootstrap';
import MovieDetails from '@/components/MovieDetails';
import PageHeader from '@/components/PageHeader';

export async function getStaticProps() {
  const res = await fetch('https://your-vercel-app/api/movies/573a139bf29313caabcf3d23');
  const data = await res.json();

  return {
    props: {
      movie: data,
    },
  };
}

export default function About({ movie }) {
  return (
    <>
      <PageHeader text="About the Developer" />
      <div>
        <h2>About the Developer</h2>
        <p>Your Name Here</p>
        <p>A short description about yourself.</p>
        <Link href="/movies/Dark City">
          <a>Check out Dark City</a>
        </Link>
      </div>
      <MovieDetails movie={movie} />
    </>
  );
}