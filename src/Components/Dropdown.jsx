import React, { useState } from "react";
import { ProductsDropdown } from "./NavBarItem";
import { Link } from "react-router-dom";
import "./dropdown.css";

export default function Dropdown() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <ul
        className={dropdown ? "product-submenu clicked" : "product-submenu"}
        onClick={() => setDropdown(!dropdown)}>
        {ProductsDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
