import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import { IMG_LOGO } from "../constants";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Auth ", auth);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User successfully logged in
        navigate("/");
        const user = userCredential.user;
        console.log("Logged in:", user.email);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        // Handle login errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        setError(errorMessage);
        setEmail("");
        setPassword("");
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div className=" flex flex-col justify-center items-center  md:w-8/12 lg:w-5/12 ">
        <a href="/">
          <img className="h-20 p-3" alt="logo" src={IMG_LOGO} />
        </a>
        <form
          className="w-full sm:w-96 flex flex-col items-center"
          onSubmit={handleLogin}
        >
          <input
            className="mt-3 border px-7 py-3 w-full focus:border-yellow-500"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
          <input
            className="mt-3 border px-7 py-3 w-full focus:border-yellow-500"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
          <button
            className="inline-block mt-3 px-7 py-3 bg-yellow-400 text-blue-dark font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-yellow hover:shadow-lg focus:bg-yellow focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow active:shadow-lg transition duration-150 ease-in-out w-full"
            type="submit"
          >
            Login
          </button>
          <div className="flex mt-3">
            <h1>Don't have an account yet? </h1>
            <Link to="/signup">
              <h1 className="text-bold cursor-pointer text-red-800 underline">
                Sign up
              </h1>
            </Link>
          </div>
          <h1 className="text-bold text-red-800 ">{error}</h1>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
