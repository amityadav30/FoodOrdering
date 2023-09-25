import { useState, useEffect } from "react";

const useAllRestaurant = () => {
  const [restaurant, setRestaurant] = useState([]); //All restaurants

  useEffect(() => {
    fetchData();
  }, []);

  // const fetchData = async () => {
  //   const fetchD = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
  //   );
  //   const json = await fetchD.json();
  //   const data = json?.data?.cards?.find(
  //     (item) =>
  //       item?.card?.card?.gridElements?.infoWithStyle?.restaurants != undefined
  //   );
  //   const restaurant =
  //     data?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  //   const restaurantList = restaurant || [];

  //   console.log("DATAAA ", restaurantList);
  //   setRestaurant(restaurantList); //Initially assigning both with all the data fetched and
  // };

  const fetchData = async () => {
    try {
      const response = await fetch(
        //"http://localhost:3000/api/all-restaurants"
        "https://food-ordering-server-lovg.vercel.app/api/all-restaurants"
      ); // Update this route
      const data = await response.json();
      console.log("WWWWW", data);
      setRestaurant(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return restaurant;
};

export default useAllRestaurant;
