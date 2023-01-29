import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    let history = useHistory()
    useEffect(() => {
        dispatch({ type: 'SAGA/FETCH_MOVIES' });
    }, []);

    //create a click handler for when the image of a specific movie is clicked and identify the unique id of that image.
    //this will enable us to send the user to a specified page depending on the unique id.
    const detailsPage = (id) => {
       console.log(id);
       let idToSave = id
        history.push(`/${id}`)
        dispatch({ 
            type: 'REDUX/SAVE_ID',
            payload: idToSave
        });
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} onClick={()=> detailsPage(movie.id)}
                            />

                        </div>
                        
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;