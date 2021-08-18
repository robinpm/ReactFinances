import { NavLink, HashRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";

const Header = ({ title , subtitle }) => {
  document.title = title;
  return (
    <>
    <h1 className='pageTitle'>{title}</h1>
    <h2 className='pageSub'>{subtitle}</h2>
    <Navbar /></>

  );
};

Header.defaultProps = {
  title: "SHARED EXPENSES",
};

export default Header;
