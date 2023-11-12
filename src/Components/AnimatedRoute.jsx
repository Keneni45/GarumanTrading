import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Partner from "../Pages/Partner";
import AgroChemicals from "../Pages/Products/AgroChemicals";
import ImportExport from "../Pages/Products/ImportExport";
import MetallicMinerals from "../Pages/Products/MetallicMinerals";

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
          <Route path="/agrochemicals" element={<AgroChemicals />} />
          <Route path="/export/import" element={<ImportExport />} />
          <Route path="/metallic/minerals" element={<MetallicMinerals />} />

          {/* <Route path="/products" element={<Products />} /> */}
        </Routes>
      </AnimatePresence>
    </div>
  );
}
