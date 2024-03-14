import { Link, useLocation } from "react-router-dom";
export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <ul>
      {movies.map((movi) => (
        <li key={movi.id}>
          <Link to={`/movies/${movi.id}`} state={location}>
            {movi.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
