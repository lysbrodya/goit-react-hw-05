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
  const { results } = movi;
  return (
    <ul>
      {errors && <b>HTTP ERROR!</b>}
      {results.map((result) => (
        <li key={result.key}>
          <h3>Author: {result.author}</h3>
          <p>{result.content}</p>
        </li>
      ))}
    </ul>
  );
}
