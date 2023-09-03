import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      day: "Tuesday",
    };
  }

  render() {
    return (
      <>
        <h1>
          Name: {this.props.name} DOB:{this.props.DOB}
        </h1>
        <h2>Count class: {this.state.count}</h2>
        <button
          onClick={() => {
            //We donot mutate state directly, we use this.setState
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count+
        </button>
        <p>__________________________________________________</p>
      </>
    );
  }
}

export default Profile;
