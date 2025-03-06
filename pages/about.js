import Link from "next/link";
import { Card, Spinner } from "react-bootstrap";
import MovieDetails from "@/components/MovieDetails";
import PageHeader from "@/components/PageHeader";
import { Suspense } from "react";

export default function About({ movie }) {
    return (
        <>
            <PageHeader text="About the Developer - Your Name" />
            <Card>
                <Card.Body>
                    <p>Hi, I'm Your Name, a web developer passionate about building interactive web applications.</p>
                    <p>Here's a movie I like:</p>
                    <Link href={`/movies/${movie.title}`} passHref>
                        {movie.title}
                    </Link>
                </Card.Body>
                <Suspense fallback={<Spinner animation="border" />}>
                    <MovieDetails movie={movie} />
                </Suspense>
            </Card>
        </>
    );
}

export async function getStaticProps() {
    const res = await fetch("http://localhost:3000/api/movies?id=573a139bf29313caabcf3d23");
    const movie = await res.json();

    return {
        props: {
            movie,
        },
    };
}