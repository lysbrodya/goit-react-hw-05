import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function MoviesFilter() {
  const [params, setParams] = useSearchParams();
  const [value, setValue] = useState(params.get("query") ?? "");

  const handleSearch = () => {
    params.set("query", value);
    setParams(params);
    setValue("");
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <button type="submit" onClick={handleSearch}>
        search
      </button>
    </div>
  );
}
