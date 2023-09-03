import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorElement from "./components/ErrorElement";
import Help from "./components/Help";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import Item from "./components/Item";
import Shimmer from "./components/Shimmer";
import UserContext from "./components/UserContext";
import { Provider } from "react-redux";
import store from "./components/utils/store";
import { Career } from "./components/Career";
import MainCart from "./components/MainCart";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

const InstaMart = lazy(() => import("./components/InstaMart"));

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Owner",
    email: "owner@gmail.com",
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Provider store={store}>
        <UserContext.Provider value={{ user: user, setUser: setUser }}>
          <Header />
          <div className="flex-1">
            <Outlet />
          </div>
          <Footer />
        </UserContext.Provider>
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading About.........</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/cart",
        element: <MainCart />,
        children: [
          {
            path: "item",
            element: <Item />,
          },
        ],
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/restaurant/:resId", //why we do this? to access resId value later on?
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <InstaMart />
          </Suspense>
        ),
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/signup",
        element: <SignUpForm />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
