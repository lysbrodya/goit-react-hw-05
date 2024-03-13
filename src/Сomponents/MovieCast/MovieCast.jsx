import { getMovieCast } from "../../movi-api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function MovieCast() {
  const { moviId } = useParams();
  const [movi, setMovi] = useState(null);
  const [errors, setErrors] = useState(false);
  useEffect(() => {
    async function getData() {
      try {
        const data = await getMovieCast(moviId);
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
  const { cast } = movi;

  return (
    <div>
      {errors && <b>HTTP ERROR!</b>}
      <ul>
        {" "}
        {cast.map((oneCast) => (
          <li key={oneCast.id}>
            {" "}
            <img
              src={`https://image.tmdb.org/t/p/w500/${oneCast.profile_path}`}
              alt={oneCast.original_name}
              width="17%"
            />
            <p>{oneCast.original_name}</p>
            <p>
              Character:
              {oneCast.character}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
