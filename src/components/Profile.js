import { useState } from "react";

const Profile = (props) => {
  const [counter] = useState(0);

  return (
    <>
      <h1>
        Name: {props.name} Age: {props.age}
      </h1>
      <h2>Count: {counter}</h2>
    </>
  );
};

export default Profile;
