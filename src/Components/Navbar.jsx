import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-sky-600 text-white px-4 py-2 shadow">
      <ul className="flex gap-4">
        <li>
          <Link to="/">Inicio</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
