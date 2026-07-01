import { useNavigate } from "react-router";
import { Link } from "react-router/internal/react-server-client";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-black flex items-center justify-between px-4 py-2">
      <h1 onClick={() => navigate("/")} className="text-white cursor-pointer">
        CICLO MARKET
      </h1>
      <input
        type="text"
        placeholder="Search..."
        className="bg-white rounded-md py-1 px-2 mx-4 grow"
      />
      <div className="flex items-center justify-between gap-1">
        <Link className="text-white" to="/login">
          Login
        </Link>
        <span className="text-white">|</span>
        <Link className="text-white" to="/register">
          Register
        </Link>
        <button className="bg-orange-700 px-2 py-1 text-white rounded-md cursor-pointer">
          Cart
        </button>
      </div>
      <hr />
    </nav>
  );
};
