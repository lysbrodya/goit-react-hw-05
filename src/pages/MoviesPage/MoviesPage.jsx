import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchMovies } from "../../movi-api";
import { Link } from "react-router-dom";
export default function MoviesPage() {
  const [params, setParams] = useSearchParams();
  console.log(params);
  const [queryValue, setQueryValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(false);
  const [findmovi, setFindMovi] = useState({});
  const value = params.get("query") ?? "";
  const changeInput = (newFilter) => {
    params.set("query", newFilter);
    console.log(params.get("query"));
    setParams(params);
    console.log(params);
  };
  const fatchSearchMovi = () => {
    setQueryValue(value);

    console.log(queryValue);
  };
  useEffect(() => {
    async function getData() {
      try {
        const data = await getSearchMovies(queryValue);
        setFindMovi(data);
      } catch (error) {
        setErrors(true);
      }
    }
    getData();
  }, [queryValue]);
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          changeInput(e.target.value);
        }}
      />
      <button onClick={fatchSearchMovi}>Search</button>
      {isLoading && <b>Loading payments...</b>}
      {errors && <b>HTTP ERROR!</b>}
      <ul>
        {findmovi.map((movi) => (
          <li
            key={movi.id}
            // onClick={() => {
            //   imageClick(image.urls.regular, image.alt_description);
            // }}
          >
            <Link>{movi.overview}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
