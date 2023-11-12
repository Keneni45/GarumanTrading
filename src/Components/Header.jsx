// import React, { useEffect, useState } from "react";
// import "./header.css";
// import { FaBars, FaChevronDown } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.jpg";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const handleClick = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
//   useEffect(() => {
//     const isMobile = window.innerWidth <= 500;
//     setIsMenuOpen(isMobile);
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 500);
//     };
//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);
//   return (
//     <div>
//       <div>
//         {isMobile ? (
//           <div className="mobile-header">
//             <div>
//               <img
//                 src={logo}
//                 alt="logo"
//                 style={{ width: "120px", height: "120px" }}
//               />
//             </div>
//             <div className="menu-bar" onClick={handleClick}>
//               <div className="menu-icon">
//                 <span>
//                   <FaBars />
//                 </span>
//                 {isMenuOpen && (
//                   <ul className="menu-list">
//                     <li>
//                       <Link to="/home" className="link-header">
//                         Home
//                       </Link>
//                     </li>
//                     <li>
//                       Products
//                       {/* <Link to="/products" className="link-header">
//                         Products
//                       </Link> */}
//                     </li>
//                     <li>
//                       <Link to="/about" className="link-header">
//                         About
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to="/contact" className="link-header">
//                         Contact
//                       </Link>
//                     </li>
//                   </ul>
//                 )}
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="header-component">
//             <div className="logo-img">
//               <img src={logo} alt="logo" />
//             </div>
//             <ul className="header-unordered-list">
//               <li className="link-header">
//                 <Link to="/home" className="link-header">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/products" className="link-header">
//                   Products
//                   <FaChevronDown color="black" />
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/partner" className="link-header">
//                   Partner
//                 </Link>
//               </li>

//               <li>
//                 {" "}
//                 <Link to="/about" className="link-header">
//                   About
//                 </Link>
//               </li>
//               <li>
//                 {" "}
//                 <Link to="/contact" className="link-header">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
// 0;
