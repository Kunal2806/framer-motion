import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <h1 style={{ padding: "20px" }}>Framer Motion Cursor</h1>
      <motion.div
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        style={{
          position: "fixed",
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: "red",
          pointerEvents: "none",
          top: 0,
          left: 0,
          zIndex: 9999,
        }}
      />
    </>
  );
}

export default App;
