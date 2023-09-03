import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <Link to="profile">Pro</Link>
//       <Outlet />
//     </div>
//   );
// };

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <Link to="profile">Pro</Link>
        <Outlet />
      </div>
    );
  }
}

export default About;
