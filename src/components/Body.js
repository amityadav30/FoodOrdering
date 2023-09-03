import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useState, useEffect, useRef, useContext } from "react";
import Shimmer from "./Shimmer";
import shimmerImg from "../assets/img/shimmer.png";
import { Link } from "react-router-dom";
import { filterRestaurants } from "./utils/helper";
import useAllRestaurant from "./utils/useAllRestaurant";
import useOnline from "./utils/useOnline";
import UserContext from "./UserContext";

const Body = () => {
  const { user, setUser } = useContext(UserContext);

  let search = "I DONT KNOW";
  const inputRef = useRef();
  const restData = useAllRestaurant();
  const [searchText, setSearchText] = useState(""); //Text serached in search box
  const [restaurants, setRestaurants] = useState([]); //All restaurants
  const [filteredRest, setFilteredRest] = useState([]); //Filtered Restaurants     //If we dont intialize both with restData it doesnt load

  //console.log("Search>>>>>>>", search);
  const online = useOnline();
  //console.log("ONLINE>>>>>>>>>>  ", online);

  useEffect(() => {
    // console.log("IN useEFFECT");
    setRestaurants(restData);
    //setFilteredRest(restData);
  }, [restData]);
  // console.log("RESTAURANTS ", restaurants);
  if (!online) {
    return <h1>You're Offline!!!!!!!!!</h1>;
  }

  //console.log("RESS", restData); //Prints twice 1. empty and  2. non-empty

  // setRestaurants(useAllRestaurant()); //Initially assigning both with all the data fetched and
  // setFilteredRest(useAllRestaurant()); //....using only filteredlist to display  i.e Change in only filter list not in all restaurant list
  return restaurants?.length === 0 ? (
    <>
      <Shimmer />
    </>
  ) : (
    <div className="p-3">
      <div className="mx-9">
        <input
          type="text"
          placeholder="Search for Restaurant"
          className="border pl-5 w-96 hover:border-2 hover:border-black-600 rounded bg-gray-50 "
          ref={inputRef}
          onChange={(e) => {
            //search = e.target.value;
            //setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-gray-600 text-white m-3 p-2 rounded-lg h-7 inline-flex hover:bg-black items-center"
          onClick={() => {
            setSearchText(inputRef.current.value);
            // console.log("In button ", inputRef?.current?.value);
            const data = filterRestaurants(
              restaurants,
              inputRef?.current?.value
            ); // Get list of filtered Restaurants in data
            setFilteredRest(data); //Updating filtered Restaurants
            //fetchData();
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap gap-5 justify-center ">
        {searchText && filteredRest?.length == 0 && (
          <h1>No Restaurant Found</h1>
        )}

        {(inputRef.current ? filteredRest : restaurants)?.map((restaurant) => {
          return (
            <Link to={"/restaurant/" + restaurant?.info?.id}>
              <RestaurantCard {...restaurant?.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
