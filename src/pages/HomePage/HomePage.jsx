import { useEffect, useState } from "react";
import { getTranding } from "../../movi-api";
import TrendigMovies from "../../components/TrendingMovies/TrendingMovies.jsx";

export default function HomePage() {
  const [trandingMovies, setTrandingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const data = await getTranding();
        setTrandingMovies(data);
      } catch (error) {
        setErrors(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);
  return (
    <div>
      <h1>Trendig today</h1>
      {isLoading && <b>Loading payments...</b>}
      {errors && <b>HTTP ERROR!</b>}
      <TrendigMovies movies={trandingMovies} />
    </div>
  );
}
