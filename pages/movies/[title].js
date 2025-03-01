import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PageHeader from '@/components/PageHeader';
import MovieDetails from '@/components/MovieDetails';

export default function Movie() {
    const router = useRouter();
    const { title } = router.query;
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        if (title) {
            // Fetch movie details from the API
            fetch(`/api/movies?title=${encodeURIComponent(title)}`)
                .then((res) => res.json())
                .then((data) => setMovie(data[0])) // Assuming the API returns an array
                .catch((error) => console.error('Error fetching movie:', error));
        }
    }, [title]);

    if (!movie) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <PageHeader text={`Movie: ${movie.title}`} />
            <MovieDetails movie={movie} />
        </>
    );
}