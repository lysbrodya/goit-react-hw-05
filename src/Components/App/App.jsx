import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation.jsx";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import MoviesPage from "../../pages/MoviesPage/MoviesPage.jsx";
import MovieReviews from "../MovieReviews.jsx";
import NotFound from "../../pages/NotFoundPage/NotFoundPage.jsx";
// import PaymensPage from "./pages/PaimentsPage";
// import NotFound from "./NotFound";
// import PaymentDitalsPage from "./PaymentDitalsPage";

export default function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:moviId" element={<MovieReviews />}>
          {/* <Route path="subpage-a" element={<div>SubPage A</div>} />
          <Route path="subpage-b" element={<div>SubPage B</div>} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
