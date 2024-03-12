import { useEffect, useState } from "react";
// import axios from "axios";
import { getTranding } from "../../movi-api";
import TrendigMovies from "../../Components/TrendingMovies/TrendingMovies";

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

// const [trandingMovies, setTrandingMovies] = useState([]);
// useEffect(() => {
//   async function getData() {
//     const response = await axios.get(
//       "https://api.themoviedb.org/3/trending/movie/week",
//       {
//         headers: {
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWQ3YmNiMjYxNmVlMDA4ODBlNmFmNDJlYWIxZmI5ZiIsInN1YiI6IjY1ZWRmNWExYzE1YjU1MDE4NmYzMzA3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Cds96AwqsiIWlMrJlp9co9FobbivCruvPh9FOGIusbI",
//         },
//       }
//     );
//     console.log(response);
//   }
//   getData();
// }, []);
