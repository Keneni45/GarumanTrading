import React from "react";
import { motion } from "framer-motion";

export default function Products() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="service">
      hello Products
    </motion.div>
  );
}
