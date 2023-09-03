import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ITEM_IMG_CDN } from "../constants";
import { addItem, removeItem } from "./utils/cartSlice";

const MenuItem = ({ item }) => {
  //console.log("CART VALUES ", item);
  const newprice = item?.price / 100;
  const [cart, setCart] = useState();
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);

  const ItemQuantity = cartItems.find((cartItem) => item?.id === cartItem.id);

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="flex p-2 m-2 ">
      <div className="w-2/3">
        <p className=" font-bold ">{item?.name}</p>
        <p className="py-1">$ {newprice}</p>
        <p>{item?.description}</p>
      </div>

      <div className="w-1/3">
        <img
          className=" overflow-hidden h-2/3 rounded-xl w-full"
          src={ITEM_IMG_CDN + item?.imageId}
        />
        <div className="flex justify-between m-2 bg-white border border-gray-400 rounded-md">
          <button
            className="text-black bg-gray-200 hover:bg-gray-400 px-4 py-2 rounded-md shadow-sm"
            onClick={() => handleRemoveFromCart(item)}
          >
            -
          </button>
          <p className="text-lg font-semibold text-black">
            {ItemQuantity ? ItemQuantity.quantity : 0}
          </p>
          <button
            className="text-black bg-gray-200 hover:bg-gray-400 px-4 py-2 rounded-md shadow-sm"
            onClick={() => handleAddToCart(item)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
