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
        console.log(data);
        setMovi(data);
      } catch (error) {
        setErrors(true);
      }
    }
    getData();
  }, [moviId]);
  if (!movi) {
    return <div>Loading...</div>; // Добавляем заглушку для случая, когда movi еще не загружен
  }
  const { cast } = movi;

  return (
    <div>
      <ul>
        {" "}
        {cast.map((oneCast) => (
          <li key={oneCast.id}>
            {" "}
            <img
              src={`https://image.tmdb.org/t/p/w500/${oneCast.profile_path}`}
              alt={oneCast.original_name}
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
