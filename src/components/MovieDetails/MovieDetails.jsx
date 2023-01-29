import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';

function MovieDetails() {
  const dispatch = useDispatch();
  const history = useHistory();
  const id = useSelector((store) => store.id);
  const genres = useSelector((store) => store.genres);
  const movieData = useSelector((store) => store.movieData);
  useEffect(() => {
    dispatch({
      type: 'SAGA/FETCH_SPECIFICMOVIE',
      payload: id,
    });
    dispatch({
      type: 'SAGA/FETCH_SPECIFICGENRE',
      payload: id,
    });
  }, []);

  //once a user clicks on a movie image, render the movie details (image, title, all genres, description)
  console.log(movieData);
  console.log(id);
  console.log(genres);

  const resetIdStore = () => {
    dispatch({
      type: 'RESET',
    });
    history.push('/');
  };
  return (
    <>
      {movieData.map((data) => {
        return (
          <div key={data.id}>
            <div>{data.title}</div>
            <img src={data.poster} />
            <h5>
              Genres:{' '}
              {genres.map((genres) => {
                return <h6>{genres.genres}</h6>;
              })}
            </h5>
            <h6>{data.description}</h6>
          </div>
        );
      })}
      <button onClick={resetIdStore}>Back</button>
    </>
  );
}

export default MovieDetails;
