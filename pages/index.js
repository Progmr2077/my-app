/*********************************************************************************
* WEB422 – Assignment 3
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: ______________________ Student ID: __________________ Date: ____________________
*
*
********************************************************************************/
import useSWR from 'swr';
import { useState, useEffect } from 'react';
import { Pagination, Accordion } from 'react-bootstrap';
import MovieDetails from '@/components/MovieDetails';
import PageHeader from '@/components/PageHeader';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Home = () => {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const { data, error } = useSWR(`/api/movies?page=${page}&perPage=10`, fetcher);

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
      <Pagination>
        <Pagination.Prev onClick={previous} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
    </div>
  );
};

export default Home;