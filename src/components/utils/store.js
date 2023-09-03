import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cartSlice from "./cartSlice";

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  middleware,
});

export default store;

//Store to whole application using Provider from react-redux library
//Provider is component , wrp the main component i.e start of application using it
{
  /* <Provider store={store}>
<App/>
</Provider> */
}

//subscribe to the store using useSelector
