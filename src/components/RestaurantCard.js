import { IMG_CDN_URL } from "../constants";

const RestaurantCard = (props) => {
  return (
    <div className="border h-80 p-2 m-2 w-44 shadow-lg">
      <img src={IMG_CDN_URL + props.cloudinaryImageId} />
      <h2 className="font-bold">{props.name}</h2>
      <h3>{props.cuisines?.join(", ")}</h3>
      <h4>{props.lastMileTravelString}</h4>
    </div>
  );
};

export default RestaurantCard;
