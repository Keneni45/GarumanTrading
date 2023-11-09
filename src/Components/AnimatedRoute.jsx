import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Products from "../Pages/Products";
import Home from "../Pages/Home";
import Partner from "../Pages/Partner";

export default function AnimatedRoute() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/*" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/products" element={<Products />} /> */}
        </Routes>
      </AnimatePresence>
    </div>
  );
}
