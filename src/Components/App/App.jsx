import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation.jsx";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import MoviesPage from "../../pages/MoviesPage/MoviesPage.jsx";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage.jsx";
import NotFound from "../../pages/NotFoundPage/NotFoundPage.jsx";
import MovieCast from "../MovieCast/MovieCast.jsx";
import MovieReviews from "../MovieReviews/MovieReviews.jsx";

export default function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:moviId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
