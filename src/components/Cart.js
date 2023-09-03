import { Link, Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctional from "./Profile";
import useLogin from "../components/utils/useLogin";
const Cart = () => {
  const log = useLogin();
  return (
    <div>
      <h1>CART</h1>
      <Profile name={"Class Amit"} DOB={"30th december"} />
      <ProfileFunctional name={"Functional Amit"} age={26} />
      <Outlet />
      <Link to="item">item</Link>
      {log}
    </div>
  );
};
export default Cart;
