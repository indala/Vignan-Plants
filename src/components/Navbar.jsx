import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";


export default function AppNavbar() {
  const [expanded, setExpanded] = useState(false);

  const MotionLinkItem=({label,path})=>{
    return (
      <motion.div
        whileTap={{scale:0.9}}
        whileHover={{ scale: 1.1 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3,type:"spring" }}
      >
        <Nav.Link as={NavLink} to={path}  onClick={handleNavClick} className="fw-bold" >
          {label}
        </Nav.Link>
      </motion.div>
    );
  }

  
  
  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <Navbar
        bg="success"
        variant="dark"
        expand="md"
        sticky="top"
        expanded={expanded}
        onToggle={setExpanded}
        className="header shadow-sm py-3 py-md-4  "
      >
        <Container fluid>
          {/* Brand */}
          <Navbar.Brand as={NavLink} to="/" className="fw-bold">
            🌿 Vignan Plants
          </Navbar.Brand>

          {/* Mobile Toggle */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-uppercase fw-semibold text-center text-md-start d-flex flex-column flex-md-row gap-3">
              <MotionLinkItem label="Home" path="/" />
              <MotionLinkItem label="Plants" path="/plants" />
              <MotionLinkItem label="About" path="/about" />

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
}
