import React, { Component } from "react";
import axios from "axios";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://api.stop-watch.xyz/webfinances.php")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <table className="">
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                {/* <th>Notes</th> */}
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{(item.Date).substr(5)}</td>
                  <td>{item.User}</td>
                  <td>{item.Description}</td>
                  <td>${item.Amount}</td>
                  {/* <td>{item.Notes}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
          {/* <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.Date} {item.User} {item.Description} {item.Amount}{" "}
                {item.Notes}
              </li>
            ))}
          </ul> */}
        </div>
      );
    }
  }
}

export default Table;
