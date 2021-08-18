import React, { Component } from "react";
// import Header from "./Header";
import { Route, NavLink, BrowserRouter as Router, HashRouter } from "react-router-dom";
import Home from "./Home";
import Table from "./Table";
import SubmitForm from "./SubmitForm";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Shared Expenses</h1>
          <ul className="header">
            <li>
              <NavLink exact to="/">Homee</NavLink>
            </li>
            <li>
              <NavLink to="/table">Table</NavLink>
            </li>
            <li>
              <NavLink to="/submit">Submit</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/table" component={Table} />
            <Route path="/submit" component={SubmitForm} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
