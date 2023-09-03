import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  return (
    <Link to="/login">
      <div className="font-semibold">Login</div>
    </Link>
  );
};

export default Login;
