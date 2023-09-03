import React, { useEffect } from "react";
import Cart from "./Cart";
import { useSelector, useDispatch } from "react-redux";
import { mainTotal, mainPromotion, mainDiscount } from "./utils/cartSlice";

const MainCart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);
  const rpromo = useSelector((store) => store.cart.promotion);
  const rtotal = useSelector((store) => store.cart.subTotal);
  const rdiscount = useSelector((store) => store.cart.discount);

  useEffect(() => {
    const subTotal = cartItems.reduce(
      (accumulator, item) => accumulator + (item.price / 100) * item.quantity,
      0
    );
    dispatch(mainTotal(subTotal - rdiscount));
  }, [cartItems]);

  const handleRemovePromo = () => {
    dispatch(mainPromotion(""));
    dispatch(mainDiscount(0));
    const subTotal = cartItems.reduce(
      (accumulator, item) => accumulator + (item.price / 100) * item.quantity,
      0
    );
    dispatch(mainTotal(subTotal));
    //dispatch(mainTotal(rtotal));
  };

  return (
    <div className="flex justify-center">
      <div className="flex justify-center items-center w-1/2">
        <div className="flex justify-center items-center w-2/3 mt-5 p-4 border border-gray-300 rounded-lg ">
          <Cart removePromo={handleRemovePromo} />
        </div>
      </div>
    </div>
  );
};

export default MainCart;
