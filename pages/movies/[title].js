import { useRouter } from 'next/router';
import useSWR from 'swr';
import MovieDetails from '@/components/MovieDetails';
import Error from 'next/error';
import PageHeader from '@/components/PageHeader';

export default function Movie() {
    const router = useRouter();
    const { title } = router.query;

    // Fetch data using SWR
    const { data, error } = useSWR(title ? `/api/movies?title=${encodeURIComponent(title)}` : null);

    if (!data) return null; // Don't render anything while loading
    if (error) return <Error statusCode={500} />;
    if (data.length === 0) return <Error statusCode={404} />;

    const movie = data[0];

    return (
        <>
            <PageHeader text={`Movie: ${movie.title}`} />
            <MovieDetails movie={movie} />
        </>
    );
}
