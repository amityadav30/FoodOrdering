import { IMG_LOGO } from "../constants";
//import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "./utils/useLogin";
import LoginLogout from "./LoginLogout";
const Header = (props) => {
  //const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useLogin();
  return (
    <div className="flex flex-col justify-between items-center bg-yellow-400 md:bg-red-800 md:flex-row  lg:bg-slate-500">
      {/* {((a = 9), console.log("HEADER", a))} */}
      <a href="/">
        <img className="h-24 p-3" alt="logo" src={IMG_LOGO} />
      </a>
      <ul className="flex px-4  align-middle">
        <li className="px-4 vertical-align: middle">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="px-4 inline-block align-middle">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="px-4">
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li className="px-4">
          {" "}
          <Link to={"/cart"}>Cart</Link>
        </li>
        <li className="px-4">
          <Link to={"/instamart"}>InstaMart</Link>
        </li>
      </ul>
      <LoginLogout />
      {/* {log} */}
      {/* {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>LogOut</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )} */}

      {/* {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>LogOut</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>LogIn</button>
      )} */}
    </div>
  );
};
export default Header;
