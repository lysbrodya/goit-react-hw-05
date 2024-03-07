// import { useState } from 'react'
import { Routes, Route, Link, Outlet } from "react-router-dom";
// import clsx from "clsx";
import css from "./App.module.css";

// const buildLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About page</h1>
      <ul>
        <li>
          <Link to="mission">Read about our mission</Link>
        </li>
        <li>
          <Link to="team">Get to know the team</Link>
        </li>
        <li>
          <Link to="reviews">Go through the reviews</Link>
        </li>
        <li>
          <Link to="/products">products</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

const Products = () => {
  return (
    <div>
      <h1>Products page</h1>
    </div>
  );
};
const ProductDetails = () => {
  return (
    <div>
      <h1>ProductDetails</h1>
    </div>
  );
};

const NotFound = () => {
  return (
    <div>
      <h1>Vy pomililisya</h1>
    </div>
  );
};
const Mission = () => {
  return (
    <div>
      <h2>Mission</h2>
    </div>
  );
};
const Team = () => {
  return (
    <div>
      <h2>team</h2>
    </div>
  );
};
const Reviews = () => {
  return (
    <div>
      <h2>reviews</h2>
    </div>
  );
};

function App() {
  return (
    <div>
      <nav className={css.nav}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
