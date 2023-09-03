import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "./utils/useRestaurant";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;

  const restaurant = useRestaurant(resId);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div>
      <h1>Restaurant Menu +{resId}</h1>
      <h2>{restaurant?.name}</h2>
      <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
      <h2>Rating = {restaurant?.avgRating}</h2>
      <h2>City = {restaurant?.city}</h2>
      <h3>Menu: </h3>
      <ul>
        {Object?.values(restaurant?.menu?.items).map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
