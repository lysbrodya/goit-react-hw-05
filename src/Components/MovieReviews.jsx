import { useEffect, useState } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import { getMoviesById } from "../movi-api";

export default function MovieReviews() {
  const { moviId } = useParams();
  const [movi, setMovi] = useState(null);
  const [errors, setErrors] = useState(false);
  console.log(moviId);
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
  return (
    <div>
      <h1>MoviId: {moviId}</h1>
      {errors && <b>HTTP ERROR!</b>}
      {movi && (
        <div>
          <p>{movi.release_date}</p>
          <p>{movi.release_date}</p>
          <p></p>
        </div>
      )}
      <ul>
        <li>
          <NavLink to="subpage-a">SubPage A</NavLink>
        </li>
        <li>
          <NavLink to="subpage-b">SubPage A</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
