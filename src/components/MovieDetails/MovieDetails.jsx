import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';

function MovieDetails(){
    const dispatch = useDispatch()
    const history = useHistory()
    const id = useSelector(store => store.id);
    const movieData = useSelector(store => store.movieData);
    useEffect(() => {
        dispatch({ 
            type: 'SAGA/FETCH_SPECIFIC', 
            payload: id
        });
    }, []);


    //once a user clicks on a movie image, render the movie details (image, title, all genres, description)
    console.log(movieData);
    console.log(id);

    
    const resetIdStore = () => {
        dispatch({ 
            type: 'RESET',
        });
        history.push('/')
    }
    return (
        <>
           {movieData.map((data)=>{
            return(
                <div key={data.id}>
                <div>{data.title}</div>
                <img src={data.poster}/>
                <h5>{data.description}</h5>
                </div>
            )
           })}
           <button onClick={resetIdStore}>Back</button> 
        </>
    )
}

export default MovieDetails