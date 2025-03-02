import Link from "next/link";
import { Card } from "react-bootstrap";
import MovieDetails from "@/components/MovieDetails";
import PageHeader from "@/components/PageHeader";

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
                <MovieDetails movie={movie} />
            </Card>
        </>
    );
}

export async function getStaticProps() {
    const res = await fetch("https://your-vercel-app-url/api/movies/573a139bf29313caabcf3d23");
    const data = await res.json();

    return {
        props: {
            movie: data,
        },
    };
}