import React from "react";
import { motion } from "framer-motion";
import homeBg from "../assets/homeBg.jpg";

export default function About() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="about"
      style={{
        backgroundImage: `url(${homeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "300px",
        height: "900px",
      }}>
      hello About
    </motion.div>
  );
}
