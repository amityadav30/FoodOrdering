import { IMG_LOGO } from "../constants";
import { Link } from "react-router-dom";
import useLogin from "./utils/useLogin";
import Login from "./Login";
import UserContext from "./UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useLogin();
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className=" bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500 lg:bg-white border-b-2 border-gray-300 shadow-md w-full">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center w-full">
        <a href="/">
          <img className="h-20 p-3" alt="logo" src={IMG_LOGO} />
        </a>
        <ul className="flex-grow justify-center   flex items-center md:space-x-8 ml-4">
          {/* The 'hidden' class will hide the menu on small screens */}
          <li>
            <Link
              to={"/"}
              className="text-gray-700 hover:text-gray-400 font-semibold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              className="text-gray-700 hover:text-gray-400 font-semibold"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={"/help"}
              className="text-gray-700 hover:text-gray-400 font-semibold"
            >
              Help
            </Link>
          </li>
          <li>
            <Link
              to={"/cart"}
              className="text-gray-700 hover:text-gray-400 font-semibold"
            >
              Cart ({cartItems.length})
            </Link>
          </li>
          {/* <li>
            <Link
              to={"/instamart"}
              className="text-gray-700 hover:text-gray-400 font-semibold"
            >
              InstaMart
            </Link>
          </li>
          <li>
            <Link
              to={"/career"}
              className="text-gray-700 hover:text-gray-400 font-semibold"
            >
              Career
            </Link>
          </li> */}
        </ul>
        <Login />
      </div>
    </div>
  );
};

export default Header;
