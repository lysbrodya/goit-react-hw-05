import { useEffect, useState } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import { getMoviesById } from "../../movi-api";

export default function MovieDetailsPage() {
  const { moviId } = useParams();
  const [movi, setMovi] = useState(null);
  const [errors, setErrors] = useState(false);
  useEffect(() => {
    async function getData() {
      try {
        const data = await getMoviesById(moviId);
        console.log(data);
        setMovi(data);
      } catch (error) {
        setErrors(true);
      }
    }
    getData();
  }, [moviId]);
  if (!movi) {
    return <div>Loading...</div>;
  }
  const {
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
    poster_path,
    title,
  } = movi;
  return (
    <div>
      {errors && <b>HTTP ERROR!</b>}
      {movi && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
          <h1>
            {original_title} ({`${release_date}`.substr(0, 4)})
          </h1>
          <p>User score: {Number(`${vote_average}`.substr(0, 3)) * 10}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          {genres.map((genre) => (
            <p key={genre.id}>{genre.name}</p>
          ))}
        </div>
      )}
      <h3>Aditional infomation</h3>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
