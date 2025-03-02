import { useRouter } from "next/router";
import useSWR from "swr";
import MovieDetails from "@/components/MovieDetails";
import PageHeader from "@/components/PageHeader";

export default function Movie({ movie }) {
    const router = useRouter();
    const { title } = router.query;
    const { data, error } = useSWR(`/api/movies?title=${title}`);

    if (error) return <p>Error loading movie details.</p>;
    if (!data) return <p>Loading...</p>;
    if (data.length === 0) return <p>Movie Not Found</p>;

    return (
        <>
            <PageHeader text={data[0].title} />
            <MovieDetails movie={data[0]} />
        </>
    );
}