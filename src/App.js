import "./App.css";
import Form from "./Components/Form";
import Header from "./Header";

function App() {
  const currDate = new Date();
  const month = currDate.toLocaleString("default", { month: "long" });
  const year = currDate.getFullYear();
  const pageTitle = "Shared Expenses | " + month + " " + year;

  return (
    <div className="App">
      <Header title={pageTitle} />
      <div id="home">
        <Form />
      </div>
      <div id="tableview"></div>
    </div>
  );
}

export default App;
