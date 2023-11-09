import React from "react";
import "./partner.css";
import { motion } from "framer-motion";

export default function Partner() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
      <div className="box">
        <div className="partner-container"></div>
        <div className="partner-container"></div>
        <div className="partner-container"></div>
      </div>
      <div className="box">
        <div className="partner-container">Our Patner</div>
        <div className="partner-container"></div>
        <div className="partner-container"></div>
      </div>
    </motion.div>
  );
}
