// src/components/Footer.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLeaf } from "react-icons/fa";
import { SiWikipedia } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-5"
    >
      <Container>
        <Row className="align-items-center">
          {/* Left side */}
          <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
            <p className="mb-0 d-flex align-items-center justify-content-center justify-content-md-start gap-2">
              <FaLeaf className="text-success" />
              🌿 Vignan Plants © {new Date().getFullYear()} — All rights reserved.
            </p>
          </Col>

          {/* Right side */}
          <Col md={6} className="text-center text-md-end">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light me-3 d-inline-flex align-items-center gap-1"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://en.wikipedia.org/wiki/Plant"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light d-inline-flex align-items-center gap-1"
            >
              <SiWikipedia /> Learn More
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
