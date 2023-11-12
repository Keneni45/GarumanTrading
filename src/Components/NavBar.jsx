import { Link } from "react-router-dom";
import { NavItem } from "./NavBarItem";
import "./navbar.css";
import Dropdown from "./Dropdown";
import { useState } from "react";
import logo from "../assets/logo.jpg";
import { FaChevronDown } from "react-icons/fa6";

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="" style={{ width: "200px", height: "10vh" }} />
        </Link>
        <ul className="nav-items">
          {NavItem.map((item) => {
            if (item.title == "Products") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}>
                  <Link to={item.path}>{item.title}</Link>
                  {showDropdown && <Dropdown />}
                  <FaChevronDown />
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
