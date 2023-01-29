Base Mode Objective:
    1. Create a details page using sagas/redux for each movie including the following:
        -genres(all)
        -title
        -description
        -image

    2. Details page must have a <button> that takes them back to the home page

    3. Utitlize a '/GET' request with a route.get(/id) for specific movies

Outcome:
    1. Genres and details(title, description, image) were obtained differently. First dispatch fetches the details that belong to the movie that was clicked. The second dispatch fetches the genres belonging to that movie. Both of the dispatches can be found in the MovieDetails.jsx inside useEffect.

    2. The back button resets the id store that houses the id of the image clicked using a 'RESET' dispatch to redux. The back button also is pathed to return back to home screen.

    3. The id is sent to the server side /GET/:id routes (movie.router)/(genre.router) to identify which movie to fetch the datas from.