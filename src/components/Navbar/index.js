import "./styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/" className="navbar-link">
        <div className="navbar-wrapper">MINI NETFLIX</div>
      </Link>
    </>
  );
};

export default Navbar;
