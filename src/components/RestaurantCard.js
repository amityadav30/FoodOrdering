import { useContext } from "react";
import { IMG_CDN_URL } from "../constants";
import UserContext from "./UserContext";

const RestaurantCard = (props) => {
  const avgRating = parseFloat(props.avgRating);

  let bgColor;
  if (avgRating > 4) {
    bgColor = "bg-green-500";
  } else {
    bgColor = "bg-red-800";
  }

  return (
    <div className="border  h-72 p-3 rounded-lg m-2 w-60 shadow-lg">
      <img src={IMG_CDN_URL + props?.cloudinaryImageId} />
      <h2 className="font-bold">{props?.name}</h2>
      <h3 className="text-gray-dark text-xs w-4/5 overflow-hidden mt-2 ">
        {props?.cuisines?.slice(0, 6).join(", ")}
        {props?.cuisines?.length > 6 && " ..."}
      </h3>
      <div className="flex  justify-between items-center mt-3">
        <div>
          <h1
            className={`inline-block p-1 rounded font-thin text-sm text-white ${bgColor}`}
          >
            &#9733; {props?.avgRating}
          </h1>
        </div>

        <h4 className="text-sm">{props?.sla?.lastMileTravel}km</h4>

        <h3 className="text-sm">{props?.costForTwo}</h3>
      </div>
    </div>
  );
};

export default RestaurantCard;
