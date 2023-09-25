import { useState, useEffect } from "react";
import { FETCH_RESMENU_URL } from "../../constants";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo(resId);
  }, []);

  // async function getRestaurantInfo(resId) {
  //   const data = await fetch(
  //     `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=${resId}&submitAction=ENTER`
  //   );
  //   const json = await data.json();
  //   setRestaurant(json?.data);
  //   // console.log("Data ", data);
  //   // console.log("Json ", json);
  // }

  async function getRestaurantInfo(resId) {
    try {
      const response = await fetch(
        //"http://localhost:3000/api/restaurant-menu/${resId}"
        `https://food-ordering-server-lovg.vercel.app/api/restaurant-menu/${resId}`
      ); // Update this route
      const data = await response.json();
      setRestaurant(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return restaurant;
};

export default useRestaurant;
