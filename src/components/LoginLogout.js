import useLogin from "./utils/useLogin";

const LoginLogout = () => {
  const [isLoggedIn, setIsLoggedIn] = useLogin();
  return isLoggedIn ? (
    <button className="px-4" onClick={() => setIsLoggedIn(false)}>
      LogOut
    </button>
  ) : (
    <button className="px-4" onClick={() => setIsLoggedIn(true)}>
      Login
    </button>
  );
};

export default LoginLogout;
