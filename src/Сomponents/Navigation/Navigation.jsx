import css from "./Navigation.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const makeLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function Navigation() {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={makeLinkClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={makeLinkClass}>
        Movies
      </NavLink>
    </nav>
  );
}
