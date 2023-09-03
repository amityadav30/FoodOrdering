export const filterRestaurants = (restaurants, searchText) => {
  //function to check filtered restaurants
  console.log("Reastaurant ", restaurants);
  console.log("SearchText ", searchText);
  //console.log("FILL ", restaurant.data.data);
  const filteredItems = restaurants?.filter((item) => {
    return item?.info?.name?.toLowerCase().includes(searchText.toLowerCase());
  });
  return filteredItems;
};
