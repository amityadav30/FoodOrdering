import { useEffect, useState } from "react";

const useOnline = () => {
  const [status, setStatus] = useState(true);
  useEffect(() => {
    const handleOnline = () => {
      setStatus(true);
    };

    const handleOffline = () => {
      setStatus(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    //Clear eventListeners
    window.removeEventListener("online", handleOnline);
    window.removeEventListener("offline", handleOffline);
  }, []);

  return status;
};

export default useOnline;
