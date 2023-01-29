import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

//                                                       STORES BEGIN HERE
// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case 'REDUX/SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case 'REDUX/SET_GENRES':
      return action.payload;
    default:
      return state;
  }
};

//Used to store the ID's when image is clicked
const id = (state = [], action) => {
  switch (action.type) {
    case 'REDUX/SAVE_ID':
      return action.payload;

    case 'RESET':
      return state;

    default:
      return state;
  }
};
//Used to store data from a specific movie
const movieData = (state = [], action) => {
  switch (action.type) {
    case 'REDUX/SET_MOVIEDATA':
      return action.payload;

    case 'RESET':
      return state;

    default:
      return state;
  }
};
//                                                     GENERATOR FUNCTIONS BEGIN HERE
function* fetchAllMovies() {
  // get all movies from the DB
  try {
    const movies = yield axios.get('/api/movie');
    console.log('get all:', movies.data);
    yield put({ type: 'REDUX/SET_MOVIES', payload: movies.data });
  } catch {
    console.log('get all error');
  }
}

function* fetchSpecificMovie(action) {
  try {
    let id = action.payload;
    // GET THE FRUIT FROM THE SERVER!
    const response = yield axios({
      method: 'GET',
      url: `/api/movie/${id}`,
    });

    // WOOT. HERE'S THE FRUIT:
    const movieInfo = response.data;
    console.log(movieInfo);
    // WOO! NOW, PUT THAT FRUIT IN THE
    // basketReducer:
    yield put({
      type: 'REDUX/SET_MOVIEDATA',
      payload: movieInfo,
    });
  } catch (error) {
    console.log('fetchSpecificMovie error:', error);
  }
}

function* fetchSpecificGenre(action) {
  try {
    let id = action.payload;
    // GET THE FRUIT FROM THE SERVER!
    const response = yield axios({
      method: 'GET',
      url: `/api/genre/${id}`,
    });

    // WOOT. HERE'S THE FRUIT:
    const movieInfo = response.data;
    console.log(movieInfo);
    // WOO! NOW, PUT THAT FRUIT IN THE
    // basketReducer:
    yield put({
      type: 'REDUX/SET_GENRES',
      payload: movieInfo,
    });
  } catch (error) {
    console.log('fetchSpecificMovie error:', error);
  }
}
//                                                            GLOBAL STORES ARE HERE
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    id,
    movieData,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('SAGA/FETCH_MOVIES', fetchAllMovies);
  yield takeEvery('SAGA/FETCH_SPECIFICMOVIE', fetchSpecificMovie);
  yield takeEvery('SAGA/FETCH_SPECIFICGENRE', fetchSpecificGenre);
}

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
