import React, { Component } from "react";
// import Header from "./Header";
import { Route, HashRouter } from "react-router-dom";
import Home from "./Home";
import Table from "./Table";
import Submitted from "./Submitted";
import Header from "./Header";

// import axios from "axios";

class Main extends Component {
  render() {
    
    
    const currDate = new Date();
    const month = currDate.toLocaleString("default", { month: "long" });
    const year = currDate.getFullYear();
    const pageTitle = month + " " + year;
    // const sampleData = getRequest({}, "connect.php");
    // console.log(sampleData);
    
    

    


    return (
      <HashRouter>
        <div>
          <Header subtitle={pageTitle} />

          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/table" component={Table} />
            <Route path="/submit" component={Submitted} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
