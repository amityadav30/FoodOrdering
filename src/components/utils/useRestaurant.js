import { useState, useEffect } from "react";
import { FETCH_RESMENU_URL } from "../../constants";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo(resId);
  }, []);

  async function getRestaurantInfo(resId) {
    const data = await fetch(FETCH_RESMENU_URL + resId);
    const json = await data.json();
    setRestaurant(json?.data);
    console.log("Data ", data);
    console.log("Json ", json);
  }

  return restaurant;
};

export default useRestaurant;
