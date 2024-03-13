import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchMovies } from "../../movi-api";
import MoviFind from "../../Components/MovieFinded/MovieFinded";
import MoviesFilter from "../../Components/MoviesFilter/MoviesFilter";

export default function MoviesPage() {
  const [findmovi, setFindMovi] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(false);

  const [params] = useSearchParams();
  const value = params.get("query") ?? "";
  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const data = await getSearchMovies(value);
        setFindMovi(data);
      } catch (error) {
        setErrors(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [value]);

  return (
    <div>
      <MoviesFilter />

      {isLoading && <b>Loading payments...</b>}
      {errors && <b>HTTP ERROR!</b>}
      <MoviFind movies={findmovi} />
    </div>
  );
}
