import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import ProfilePic from "../assets/img/ProfilePic.png";

const About = () => {
  return (
    <div className="mt-12 min-h-screen min-w-fit flex justify-around ">
      <div className="px-2.5 py-5 m-4 rounded-md overflow-hidden shadow  w-[30%] h-2/4">
        <h1 className="font-bold text-lg leading-4 justify-center text-title text-center">
          About Me
        </h1>
        <div className="flex flex-col justify-center items-center mt-4 gap-5">
          <div>
            <img
              className="rounded-full w-[150px] h-[150px] border-none align-middle"
              src={ProfilePic}
              alt="Profile Pic"
            />
          </div>
          <div className="">
            <p className="text-base text-bio pt-5 mt-0 mb-4">
              Front-End Developer who is passionate about developing end-to-end
              web solutions with creativity and technical excellence.
            </p>
            {/* <Social /> */}
          </div>
        </div>
      </div>
      <div className="px-2.5 py-5 m-4 rounded-md overflow-hidden shadow w-[70%] h-2/4">
        <h1 className="font-bold text-lg leading-4 justify-center text-title text-center">
          About this project
        </h1>
        <p className="text-base text-bio pt-5 mt-0 mb-4">
          Welcome to Foodhub, a delightful food ordering experience that I've
          crafted to hone my skills in React and Redux. As an enthusiastic
          developer, I embarked on this journey to not only satisfy your taste
          buds but also to create a playground where I could refine my knowledge
          of these cutting-edge technologies
        </p>
      </div>
    </div>
  );
};

export default About;
