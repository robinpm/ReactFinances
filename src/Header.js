import Navbar from "./Components/Navbar";
// import Favicon from "react-favicon";

const Header = ({ title, subtitle }) => {
  document.title = title + " | " + subtitle;
  return (
    <>
      {/* <Favicon url="../../public/favicon.png" /> */}
      <h1 className="pageTitle">{title}</h1>
      <h2 className="pageSub">{subtitle}</h2>
      <Navbar />
    </>
  );
};

Header.defaultProps = {
  title: "Shared Expenses",
};

export default Header;
