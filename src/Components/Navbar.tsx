import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  //   const navigate = useNavigate();

  return (
    <>
      <nav className="bg-white shadow-md px-6 py-4">
        <ul className="flex gap-6 text-md font-medium">
          <li>
            <Link
              to="/"
              className={`hover:text-blue-600 ${
                pathname === "/" ? "text-blue-600" : "text-black"
              }`}
            >
              <li>Home</li>
            </Link>
          </li>
          <li>
            <Link
              to="/favourites"
              className={`hover:text-blue-600 ${
                pathname === "/favourites" ? "text-blue-600" : "text-black"
              }`}
            >
              <li>Favourites</li>
            </Link>
          </li>
          {/* <li onClick={() => navigate("/test")}>TEst</li> */}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
