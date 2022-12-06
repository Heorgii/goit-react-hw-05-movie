import { lazy } from "react";
import { Suspense } from "react";
import { Route, Routes } from 'react-router-dom';
import 'styles.css';

const AppBar = lazy(() => import('./SharedLayout/SharedLayout'));
const Loader = lazy(() => import('./Loader/Loader'));
const Navigation = lazy(() => import('./Navigation/Navigation'));
const Home = lazy(() => import('../page/Home/Home'));
const Movies = lazy(() => import('../page/Movies/Movies'));
const MovieDetails = lazy(() => import('../page/MovieDetails/MovieDetails'));
const MovieReviews = lazy(() => import('../page/Reviews/Reviews'));
const MovieCast = lazy(() => import('../page/Cast/Cast'));

export const App = () => {
  return (
    <div>
        <Navigation />

      <Suspense fallback={<Loader />}>

        <Routes>
          <Route path="/" element={<AppBar />} >
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="reiwers" element={<MovieReviews />} />
              <Route path="cast" element={<MovieCast />} />
            </Route>
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>

      </Suspense>

    </div>
  );
};