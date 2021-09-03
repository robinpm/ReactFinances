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
      // function onlyUnique(value, index, self) {
      //   return self.indexOf(value) === index;
      // }

      // Calculate the totals and dues of each user
      // Returns a n x 3 array where n is the amount of users
      // Col 1: User name
      // Col 2: Total Spent
      // Col 3: Amount owed
      // TBD - Col 4: Who it's owed to - TBD
      const userCalc = (totalArr) => {
        // Get unique list of users
        let userList = [
          ...new Set(
            totalArr.map(function (value, index) {
              return value[0];
            })
          ),
        ];
        userList.push("Total");
        let userTable = [
          userList,
          new Array(userList.length + 1).fill(0),
          new Array(userList.length + 1).fill(0),
        ];

        userTable = userTable[0].map((_, colIndex) =>
          userTable.map((row) => row[colIndex])
        );
        // Get total from OG array

        // Set to be to two decimal places
        let grandTotal = totalArr[0]
          .map((_, colIndex) => totalArr.map((row) => row[colIndex]))[1] // Transpose array
          .reduce(function (a, b) {
            return parseFloat(a) + parseFloat(b); // then sum up the 2nd row's elementsmust be parsed as floats
          }, 0)
          .toFixed(2); // Set to be to two decimal places

        userTable[userTable.length - 1][1] = grandTotal;
        //Parse through all transactions
        for (let i = 0; i < totalArr.length; i++) {
          let currName = totalArr[i][0];
          let currBill = totalArr[i][1];

          //parse through the user table
          for (let j = 0; j < userTable.length; j++) {
            if (currName === userTable[j][0]) {
              userTable[j][1] += parseFloat(currBill);
            }
          }
        }
        console.log(userTable);

        for (let i = 0 ; i < userTable.length ; i++){
          userTable[i][2] = (
            (grandTotal - userTable[i][1]) /
            (userTable.length-1)
          ).toFixed(2);

         
        }

        console.log(
          userTable[0][2],
          " > ",
          userTable[1][2],
          " = ",
          userTable[0][2] < userTable[1][2]
        );



        // let owed = userTable.map((userTotal) => ((grandTotal-userTotal[1])/userTotal.length).toFixed(2));
        // let newTable = userTable + owed;

        // DISGUSTING HARDCODED OWE WHAT TO WHO CODE
         if (parseInt(userTable[0][2]) < parseInt(userTable[1][2])) {
           userTable[1][2] = (userTable[1][2] - userTable[0][2]).toFixed(2);
           userTable[0][2] = 'n/a';
         } else {
           userTable[0][2] = (userTable[0][2] - userTable[1][2]).toFixed(2);
           userTable[1][2] = 'n/a';
         }

        console.log(userTable[1][2] - userTable[0][2]);
        return userTable;
      };
      // END UserCalc //

      const userTable = userCalc(userPriceArr);
      let grandTotal = userTable[userTable.length - 1][1];
      // console.log(grandTotal);
      const styleObj = {
        color: `rgb(${(grandTotal / 1000) * 255},0,0)`,
      };

      return (
        <div>
          <h2>
            Total Spent: <span style={styleObj}> ${grandTotal}</span>
          </h2>
          <br />
          <table id="exprep">
            <thead className="no-touchy">
              <tr>
                <th>Name</th>
                <th>Amount Spent</th>
                <th>Owes</th>
              </tr>
            </thead>
            <tbody>
              {userTable.map((user) => (
                <tr key={user.id}>
                  <td>{user[0]}</td>
                  <td>$ {user[1]}</td>
                  <td>$ {user[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table id="transactions">
            <thead className="no-touchy">
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
                  <td id="Desc">{item.Description}</td>
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
