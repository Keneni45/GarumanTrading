import React from "react";
//import { motion } from "framer-motion";
import "./products.css";
import { NavLink } from "react-router-dom";

export default function Products() {
  const Navigation = [
    { name: "Products", href: "/about" },
    { name: "Service", href: "/contact" },
    { name: "Products", href: "/about" },
    { name: "Service", href: "/contact" },
    { name: "Products", href: "/about" },
    { name: "Service", href: "/contact" },
  ];

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
      {Navigation.map((item) => (
        <NavLink
          key={item.name}
          to={item.href}
          className={({ isActive }) => {
            console.log(item.href + "" + isActive);
          }}></NavLink>
      ))}
    </div>

    // <motion.div
    //   initial={{ width: 0 }}
    //   animate={{ width: "100%" }}
    //   exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    //   className="products">
    //   OUR PRODUCT
    //   <div className="products-container">
    //     <p className="products_p">
    //       {" "}
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores rerum
    //       et quam minima dicta labore, ex sequi accusantium neque molestiae
    //       perferendis! Porro odio exercitationem error suscipit laborum nihil
    //       nam odit.
    //     </p>
    //     <div className="coffee-img">{/* <img src={coffee} alt="" /> */}</div>
    //     <p className="service_p">
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi itaque
    //       officiis quisquam officia, dolorem necessitatibus perspiciatis iusto
    //       deserunt delectus cupiditate. Obcaecati odit doloribus molestias
    //       voluptates, perferendis sed non similique in.
    //     </p>
    //     <div className="lithium-img">
    //       {/* <img src={lithium} alt="" />{" "} */}
    //     </div>
    //     <p className="products_p">
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi itaque
    //       officiis quisquam officia, dolorem necessitatibus perspiciatis iusto
    //       deserunt delectus cupiditate. Obcaecati odit doloribus molestias
    //       voluptates, perferendis sed non similique in.
    //     </p>
    //     <div className="pulse-img">{/* <img src={pulse} alt="" />{" "} */}</div>
    //   </div>
    // </motion.div>
  );
}
