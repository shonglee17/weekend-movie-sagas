import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
function MovieDetails(){
    
    //once a user clicks on a movie image, render the movie details (image, title, all genres, description)
    const dispatch = useDispatch()
    const history = useHistory()
    const id = useSelector(store => store.id);
    console.log(id);
    
    const resetStore = () => {
        dispatch({ 
            type: 'RESET',
        });
        history.push('/')
    }
    return (
        <>
           <div>Title: {id}</div>
           <button onClick={resetStore}>Back</button> 
        </>
    )
}

export default MovieDetails