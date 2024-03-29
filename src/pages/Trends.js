import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from '@mui/material';
import SingleContent from '../components/SingleContent/SingleContent';
import CustomPagination from '../components/Pagination/CustomPagination';

const Trends = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_KEY}&page=${page}`
    );

    setContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <div>
        <span className='pageTitle'> Trending Movies / tvseries.</span>

        <Container
          className='trending'
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}>
          {content &&
            content.map((c) => (
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type={c.media_type}
                vote_average={c.vote_average}
              />
            ))}
        </Container>
        <CustomPagination setPage={setPage} />
      </div>
    </>
  );
};

export default Trends;
