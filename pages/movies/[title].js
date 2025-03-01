import { useRouter } from 'next/router';
import useSWR from 'swr';
import MovieDetails from '@/components/MovieDetails';
import PageHeader from '@/components/PageHeader';

export default function Movie() {
  const router = useRouter();
  const { title } = router.query;

  const { data, error } = useSWR(title ? `/api/movies?title=${encodeURIComponent(title)}` : null);

  if (!data) return <div>Loading...</div>;
  if (error) return <div>Error loading movie.</div>;

  const movie = data[0]; // Assuming the API returns an array of movies

  return (
    <>
      <PageHeader text={`Movie: ${movie.title}`} />
      <MovieDetails movie={movie} />
    </>
  );
}