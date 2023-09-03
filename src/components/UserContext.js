import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Amit",
    email: "amit@gmail.com",
  },
});

export default UserContext;
