import { NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Table from "./Table";
import SubmitForm from "./SubmitForm";

const Header = ({ title }) => {
  document.title = title;
  return (
      <HashRouter>
          <header className="header">
      <h2 className="title">{title}</h2>
      <ul className="navbar">
        <li>
          <NavLink href="../Home">Home</NavLink>
        </li>
        <li>
          <NavLink href="../Table">Table View</NavLink>
        </li>
        <li>
          <NavLink href="../SubmitForm">Submit</NavLink>
        </li>
      </ul>
        </header>
    </HashRouter>

  );
};

Header.defaultProps = {
  title: "Shared Expenses",
};

export default Header;
