import { Link } from "react-router-dom";

export default function MoviFind({ movies }) {
  return (
    <ul>
      {movies.map((movi) => (
        <li
          key={movi.id}
          // onClick={() => {
          //   imageClick(image.urls.regular, image.alt_description);
          // }}
        >
          <Link to={`/movies/${movi.id}`}>{movi.original_title}</Link>
        </li>
      ))}
    </ul>
  );
}
