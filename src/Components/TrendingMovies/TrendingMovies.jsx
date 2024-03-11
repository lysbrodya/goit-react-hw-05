import { Link } from "react-router-dom";

export default function TrendigMovies({ movies }) {
  return (
    <ul>
      {movies.map((movi) => (
        <li
          key={movi.id}
          // onClick={() => {
          //   imageClick(image.urls.regular, image.alt_description);
          // }}
        >
          <Link>{movi.title}</Link>
        </li>
      ))}
    </ul>
  );
}
