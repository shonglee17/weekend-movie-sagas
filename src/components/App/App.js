import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';
function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>

        <Route path="/1" exact>
          <MovieDetails />
        </Route>
        
        <Route path="/2" exact>
          <MovieDetails />
        </Route>

        <Route path="/3" exact>
          <MovieDetails />
        </Route>

        <Route path="/4" exact>
          <MovieDetails />
        </Route>

        <Route path="/5" exact>
          <MovieDetails />
        </Route>

        <Route path="/6" exact>
          <MovieDetails />
        </Route>

        <Route path="/7" exact>
          <MovieDetails />
        </Route>

        <Route path="/8" exact>
          <MovieDetails />
        </Route>

        <Route path="/9" exact>
          <MovieDetails />
        </Route>

        <Route path="/10" exact>
          <MovieDetails />
        </Route>

        <Route path="/11" exact>
          <MovieDetails />
        </Route>

        <Route path="/12" exact>
          <MovieDetails />
        </Route>

        <Route path="/13" exact>
          <MovieDetails />
        </Route>

        <Route path="/14" exact>
          <MovieDetails />
        </Route>
        {/* Stretch Goal - Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
