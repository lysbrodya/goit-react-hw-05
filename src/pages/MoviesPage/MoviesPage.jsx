import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchMovies } from "../../movi-api";
import MoviFind from "../../Components/MovieFinded";
// import { Link } from "react-router-dom";

export default function MoviesPage() {
  // const [newParams] = useParams();
  const [findmovi, setFindMovi] = useState([]);
  const [queryValue, setQueryValue] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(false);

  const [params, setParams] = useSearchParams();
  const value = params.get("query") ?? "";

  const changeInput = (newFilter) => {
    params.set("query", newFilter);
    setParams(params);
  };

  const fetchSearchMovies = async () => {
    setIsLoading(true);
    setErrors(false);
    try {
      const data = await getSearchMovies(queryValue);
      setFindMovi(data);
    } catch (error) {
      setErrors(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (value !== "") {
      setQueryValue(value);
      fetchSearchMovies();
    }
  }, [value]);

  const handleSearch = () => {
    fetchSearchMovies();
    setQueryValue("");
  };

  return (
    <div>
      <input
        type="text"
        value={queryValue}
        onChange={(e) => {
          changeInput(e.target.value);
        }}
      />
      <button onClick={handleSearch}>Search</button>
      {isLoading && <b>Loading payments...</b>}
      {errors && <b>HTTP ERROR!</b>}
      <MoviFind movies={findmovi} />
    </div>
  );
}
// import { useState, useEffect } from "react";
// import { useParams, useHistory } from "react-router-dom";
// import { getSearchMovies } from "../../movi-api";
// import MoviFind from "../../Components/MovieFinded";

// export default function MoviesPage() {
//   const { query } = useParams();
//   const history = useHistory();
//   const [findmovi, setFindMovi] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errors, setErrors] = useState(false);

//   const fetchSearchMovies = async (query) => {
//     try {
//       setIsLoading(true);
//       setErrors(false);
//       const data = await getSearchMovies(query);
//       setFindMovi(data);
//     } catch (error) {
//       setErrors(true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchSearchMovies(query);
//   }, [query]);

//   const handleSearch = () => {
//     history.push(`/movies/${query}`);
//     fetchSearchMovies(query);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => {
//           history.push(`/movies/${e.target.value}`);
//         }}
//       />
//       <button onClick={handleSearch}>Search</button>
//       {isLoading && <b>Loading movies...</b>}
//       {errors && <b>HTTP ERROR!</b>}
//       <MoviFind movies={findmovi} />
//     </div>
//   );
// }
