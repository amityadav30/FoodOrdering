import { useState } from "react";

const useLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return [isLoggedIn, setIsLoggedIn];

  // return isLoggedIn ? (
  //   <button onClick={() => setIsLoggedIn(false)}>Logoutt</button>
  // ) : (
  //   <button onClick={() => setIsLoggedIn(true)}>Loginn</button>
  // );
};

export default useLogin;
