// import Loader from "./Loader/Loader";
// lazy
// import { Suspense } from "react";
import { Route } from 'react-router-dom';
// import MovieReviews from "page/Reviews/Reviews";
// import MovieCast from "page/Cast/Cast";
import AppBar from "./SharedLayout/SharedLayout";
import Home from "page/Home/Home";
// import Movies from "page/Movies/Movies";
// import MovieDetails from "page/MovieDetails/MovieDetails";
// import Navigation from "./Navigation/Navigation";

import 'styles.css';
// const Home = lazy(() => {
//   import('../page/Home/Home');
// });

// const Movies = lazy(() => {
//   import('../page/Movies/Movies');
// });

// const MovieDetails = lazy(() => {
//   import('../page/MovieDetails/MovieDetails');
// });

export const App = () => {
  return (
    <div>
      {/* <Suspense fallback={<Loader />}> */}

      {/* <Navigation /> */}
      {/* <Routes> */}
      <Route path="/" element={<AppBar />} >
        <Route index element={<Home />} />
        {/* <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="reiwers" element={<MovieReviews />} />
              <Route path="cast" element={<MovieCast />} />
            </Route> */}
      </Route>
      {/* <Route path="*" element={<Home />} /> */}
      {/* </Routes> */}

      {/* </Suspense> */}

    </div>
  );
};