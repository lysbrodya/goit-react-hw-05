import { getMovieRewiew } from "../../movi-api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function MovieReviews() {
  const { moviId } = useParams();
  const [movi, setMovi] = useState(null);
  const [errors, setErrors] = useState(false);
  useEffect(() => {
    async function getData() {
      try {
        const data = await getMovieRewiew(moviId);
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
  const { results } = movi;
  return (
    <ul>
      {results.map((result) => (
        <li key={result.key}>
          <h3>Author: {result.author}</h3>
          <p>{result.content}</p>
        </li>
      ))}
    </ul>
  );
}
