import React, { Component } from "react";


class Table extends Component {
  render() {
    
    console.log('getting data....\n')

    fetch("https://robinpm.com/F4ncyScr1pt5/getMonth.php")
      .then((response) => response.text())
      .then((data) => console.log(data));
    return (
      <div>
        TABLES GOES HERE
      </div>
    );
  }
}

export default Table;
