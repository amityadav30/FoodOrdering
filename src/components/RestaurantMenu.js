import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import DiscountCard from "./utils/DiscountCard";
import useRestaurant from "./utils/useRestaurant";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuItem from "./MenuItem";
import Cart from "./Cart";
import { useSelector, useDispatch } from "react-redux";
import { mainTotal, mainPromotion, mainDiscount } from "./utils/cartSlice";

const RestaurantMenu = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { resId } = params;
  const restaurant = useRestaurant(resId);
  const cuisines =
    restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const [currentDiscount, setCurrentDiscount] = useState(null);

  const rdiscount = useSelector((store) => store.cart.discount);
  const cartItems = useSelector((store) => store.cart.items);
  const rtotal = useSelector((store) => store.cart.subTotal);
  const rpromotion = useSelector((store) => store.cart.promotion);

  useEffect(() => {
    const subTotal = cartItems.reduce(
      (accumulator, item) => accumulator + (item.price / 100) * item.quantity,
      0
    );
    dispatch(mainTotal(subTotal - rdiscount));
  }, [cartItems, rdiscount]);

  const handleRemovePromo = () => {
    dispatch(mainPromotion(""));
    dispatch(mainDiscount(0));
    setCurrentDiscount(null);
  };

  const handleDiscount = (discount) => {
    const preDiscount = rtotal;
    if (discount.includes("off up to") && discount.includes("Above")) {
      const pattern = /(\d+)% off up to ₹(\d+) \| Use \w+ Above ₹(\d+)/;
      const [, discountPercent, upto, minimum] = discount.match(pattern);

      if (preDiscount < minimum) {
        dispatch(
          mainPromotion(
            "Promotion not applicable. Minimum cart value required: ₹" + minimum
          )
        );
      } else {
        dispatch(mainPromotion("Promotion applied !!!"));

        const lessBy = Math.min((preDiscount * discountPercent) / 100, upto);
        dispatch(mainDiscount(lessBy));
      }
    } else if (discount.includes("off up to")) {
      const pattern = /(\d+)% off up to ₹(\d+)/;
      const [, discountPercent, upto] = discount.match(pattern);

      dispatch(mainPromotion("Promotion applied !!!"));

      const lessBy = Math.min((preDiscount * discountPercent) / 100, upto);
      dispatch(mainDiscount(lessBy));
    }
  };

  if (currentDiscount) {
    handleDiscount(currentDiscount);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex flex-col sm:flex-row bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500">
        <img
          className="m-8 h-52 self-center rounded-xl"
          src={
            IMG_CDN_URL +
            restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
          alt="Restaurant Image"
        />
        <div className="self-center p-2 m-2">
          <h2 className="font-bold text-white text-2xl mb-2">
            {restaurant?.cards[0]?.card?.card?.info?.name}
          </h2>
          <div className="text-white text-lg mb-2">
            {restaurant?.cards[0]?.card?.card?.info?.cuisines.join(", ")}
          </div>
          <div className="text-white flex items-center">
            <span className="text-white mr-1">&#9733;</span>
            <span className="text-lg">
              {restaurant?.cards[0]?.card?.card?.info?.avgRating}
            </span>
          </div>
        </div>
      </div>

      <div className="p-2 m-2">
        <h2 className="text-lg font-semibold mb-2 p-2 m-2">Special Offers</h2>
        <div className="flex flex-wrap">
          {[
            { meta: "40% off up to ₹80 | Use code TRYNEW" },
            { meta: "20% off up to ₹120 | Use FEDERALCC Above ₹249" },
          ].map((discount, index) => (
            <DiscountCard
              onClick={() => setCurrentDiscount(discount.meta)}
              discount={discount}
              key={index}
              className="pr-8"
            />
          ))}
        </div>
      </div>

      <div className="flex sm:flex-row relative flex-wrap">
        <div className="flex-1 border m-2 p-2 w-full sm:w-3/5">
          <h4 className="p-2 m-2 font-bold text-xl">Menu</h4>
          {cuisines?.map(
            (item, index) =>
              item?.card?.card?.title && (
                <Accordion
                  key={index}
                  className="border-none mb-6"
                  elevation={0}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    id="panel1a-header"
                    className="cursor-pointer"
                  >
                    <p className="font-bold">{item?.card?.card?.title}</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    {item?.card?.card?.itemCards?.map((item, index) => (
                      <MenuItem item={item?.card?.info} key={index} />
                    ))}
                  </AccordionDetails>
                </Accordion>
              )
          )}
        </div>
        <div className="flex justify-between  border m-2 p-2 w-full sm:w-96 max-w-96 max-h-96 sticky top-0 overflow-y-auto bg-white shadow">
          <Cart removePromo={handleRemovePromo} />
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
