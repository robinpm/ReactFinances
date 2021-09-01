import React, { Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      userPriceArr: 0,
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
            userPriceArr: result.map((item) => [item.User, item.Amount]),
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
    const { error, isLoaded, items, userPriceArr } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      // const testo = items.User[0];

      console.log(userPriceArr[1][0]);
      var robTotal = 0;
      var conTotal = 0;
      for (let i = 0; i < userPriceArr.length; i++) {
        if (userPriceArr[i][0] == "Robin") {
          // console.log("Rob");
          robTotal += parseFloat(userPriceArr[i][1]);
        } else {
          conTotal += parseFloat(userPriceArr[i][1]);
        }
      }

      const getOwe = (total1, total2) => {
        if (total1 >= total2) {
          console.log("t1: ", total1, " | ", "t2: ", total2);
          return (total1 - total2).toFixed(2);
          
        } else {
          return 0;
        }
      };

      const robOwe = getOwe(conTotal, robTotal);
      const conOwe = getOwe(robTotal, conTotal);

      // if (conTotal > robTotal) {
      //   var robOwe = (conTotal - robTotal).toFixed(2);
      // } else {
      //   var robOwe = 0;
      // }

      // if (robTotal > robTotal) {
      //   var robOwe = (conTotal - robTotal).toFixed(2);
      // } else {
      //   var robOwe = 0;
      // }

      const tester = 1 + 1;
      console.log(
        conTotal.toFixed(2),
        " | ",
        robTotal.toFixed(2),
        " | ",
        tester
      );

      return (
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>$$ Spent</th>
                <th>Owes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Robin</th>
                <th>$ {robTotal.toFixed(2)}</th>
                <th>$ {robOwe}</th>
              </tr>
              <tr>
                <th>Connie</th>
                <th>$ {conTotal.toFixed(2)}</th>
                <th>$ {conOwe}</th>
              </tr>
            </tbody>
          </table>
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
                  <td>{item.Date.substr(5)}</td>
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
