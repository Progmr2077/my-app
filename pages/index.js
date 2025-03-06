/*********************************************************************************
* WEB422 – Assignment 3
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Jacob Rivera Student ID: 109641233 Date: March 5th, 2025
********************************************************************************/
import useSWR from 'swr';
import { useState, useEffect, Suspense } from 'react';
import { Pagination, Accordion, Spinner } from 'react-bootstrap';
import MovieDetails from '@/components/MovieDetails';
import PageHeader from '@/components/PageHeader';

const fetcher = (url) => fetch(url, { headers: { 'Cache-Control': 'no-cache' } }).then((res) => res.json());

const Home = () => {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const { data, error } = useSWR(`/api/movies?page=${page}&perPage=10`, fetcher, { revalidateOnFocus: false });

  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  const previous = () => {
    if (page > 1) setPage(page - 1);
  };

  const next = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <PageHeader text="Film Collection : Sorted by Date" />
      <Suspense fallback={<Spinner animation="border" />}>
        <Accordion>
          {pageData.map((movie) => (
            <Accordion.Item eventKey={movie._id} key={movie._id}>
              <Accordion.Header>
                <strong>{movie.title}</strong> ({movie.year}) - {movie.directors.join(', ')}
              </Accordion.Header>
              <Accordion.Body>
                <MovieDetails movie={movie} />
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Suspense>
      <Pagination>
        <Pagination.Prev onClick={previous} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
    </div>
  );
};

export default Home;