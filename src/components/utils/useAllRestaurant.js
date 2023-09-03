import { useState, useEffect } from "react";

const useAllRestaurant = () => {
  const [restaurant, setRestaurant] = useState([]); //All restaurants

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const fetchD = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );
    const json = await fetchD.json();
    const data = json.data.cards;
    setRestaurant(data); //Initially assigning both with all the data fetched and
  };

  return restaurant;
};

export default useAllRestaurant;
