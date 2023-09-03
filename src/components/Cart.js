import { Link, Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctional from "./Profile";
import useLogin from "../components/utils/useLogin";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, addItem } from "./utils/cartSlice";
import { useEffect } from "react";

const Cart = ({ removePromo }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);
  const total = useSelector((store) => store.cart.subTotal);
  const promo = useSelector((store) => store.cart.promotion);

  const handleRemoveFromCart = (item) => {
    dispatch(removeItem(item));
  };

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  return cartItems.length == 0 ? (
    <div className="flex flex-col gap-2 justify-center items-center ">
      <img
        className="w-96"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
        }
        alt="empty cart"
      />

      <span className="font-poppins">Your cart is empty</span>
      {/* <p className="font-fira-code text-xs">
          You can go to home page to view more restaurants
        </p> */}
      <div className="">
        <Link to="/">
          <button className="font-poppins bg-slate-900 p-2 text-white mt-2">
            see restaurants near you
          </button>
        </Link>
      </div>
    </div>
  ) : (
    <div className=" w-full">
      <div className="font-bold text-center text-xl m-5">CART</div>
      {cartItems.map((item) => (
        <div className="flex items-center  space-x-4">
          <div className="flex items-center w-2/3">
            <h1 className="w-full">{item.name}</h1>
          </div>

          <div className="flex items-center">
            <button
              className="bg-gray-300 text-gray-700 px-2 rounded-l"
              onClick={() => handleRemoveFromCart(item)}
            >
              -
            </button>
            <span className="bg-white border w-7 flex justify-center">
              {item.quantity}
            </span>
            <button
              className="bg-gray-300 text-gray-700 px-2 rounded-r"
              onClick={() => handleAddToCart(item)}
            >
              +
            </button>
          </div>

          <div className="w-1/4 text-right">
            <h1>₹ {(item.price / 100) * item.quantity}</h1>
          </div>
        </div>
      ))}
      {cartItems.length > 0 ? (
        <div className=" flex justify-between">
          <div className="font-bold  mt-4">SubTotal: </div>
          <div className="font-bold mt-4">₹ {total}</div>
        </div>
      ) : null}
      {promo && (
        <div className="flex justify-between m-3">
          <p>{promo}</p>
          {promo.includes("Promotion not applicable") ? null : (
            <button
              onClick={removePromo}
              className="bg-red-500 rounded-lg px-1 py-1 text-white"
            >
              Remove promo
            </button>
          )}
        </div>
      )}
    </div>
  );
};
export default Cart;
