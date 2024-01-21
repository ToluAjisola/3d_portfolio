import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white
      items-center justify-center flex "
      >
        <p
          className="purple-gradient_text font-bold shadow-md w-10 h-10 rounded-lg bg-white
      items-center justify-center flex"
        >
          TA
        </p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-purple-600" : "text-white bg-dark"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-purple-600" : "text-white bg-dark"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
