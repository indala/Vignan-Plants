// PlantCard.jsx
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function PlantCard({ plant }) {
  const navigate = useNavigate();

  
  


  return (
    // parent provides perspective
    <div
      style={{ perspective: 1000 }}
      className="rounded-xl overflow-hidden"
    >
      <motion.div
        role="button"
        aria-label={plant.CommonName}
        className=""
        onClick={() => navigate(`/plants/${plant.sno}`)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration:1 }}
        
      >
        {/* image fills the card */}
        <motion.div
          transition={{ duration: 0.5 }}
          whileHover={{ scale:1.09}}
          whileTap={{ scale: 0,rotateY: 360 }}
          style={{ transformStyle: "preserve-3d" }}
          >
        <img
          src={plant.url}
          alt={plant.CommonName}
          className="w-100  rounded-5 p-2"
          style={{aspectRatio: '1/1'}}
          loading="lazy"
          draggable="false"
        />
        </motion.div>
        <div className="p-2   text-center fw-bold" style={{fontSize:'1.2rem',backgroundColor:'#e0e0e0'}}>
          
          {plant.CommonName}
        </div>
       
      </motion.div>
    </div>
  );
}
