import React, { Component } from "react";
import Form from "./Components/Form";
import { NavLink } from "react-router-dom";

class Home extends Component {
  render() {
    const Submit = () => {
      return <NavLink to="/submit">Submit</NavLink>;
    };
    return (
      <div>
        <Form submit={Submit} />
      </div>
    );
  }
}

export default Home;
