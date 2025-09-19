import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const Loader = () => {
  const emojis = ["🌱", "🌿", "🌳"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % emojis.length);
    }, 800); // change every 0.8s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <motion.div className="position-relative" style={{ width: "4rem", height: "4rem" }}>
        {emojis.map((emoji, i) => (
          <motion.div
            key={i}
            className="position-absolute"
            style={{ fontSize: "4rem", top: 0, left: 0 }}
            animate={{
              opacity: i === index ? 1 : 0,
              scale: i === index ? 1.2 : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            {emoji}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Loader;
