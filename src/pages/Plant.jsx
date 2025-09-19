import { useParams, Link } from "react-router-dom";
import sheetData from "../data/plants";
import { Container, Row, Col, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Plant() {
  const { sno } = useParams();
  const plant = sheetData.find((p) => p.sno === Number(sno));

  if (!plant) {
    return (
      <Container className="text-center py-5">
        <h2>Plant not found</h2>
        <Button as={Link} to="/plants" variant="secondary">
          Back to Plants
        </Button>
      </Container>
    );
  }

  // Google search link
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
    plant.CommonName
  )}`;

  return (
    <Container className="py-4">
      <Row className="align-items-center">
        {/* Image Left */}
        <Col md={6} className="mb-3 mb-md-0">
          <motion.div
            className="p-3 bg-white shadow rounded"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.8, x: "-100vw" }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Click image to know more</Tooltip>}
            >
              <a href={searchUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={plant.url}
                  alt={plant.CommonName}
                  className="img-fluid rounded shadow w-100"
                  loading="lazy"
                  style={{ aspectRatio: "1/1", objectFit: "cover", cursor: "pointer" }}
                />
              </a>
            </OverlayTrigger>
          </motion.div>
        </Col>

        {/* Description Right */}
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="fw-bold">{plant.CommonName}</h2>
            <h5 className="text-muted mb-3">{plant.ScientificName}</h5>
            <p>
              <strong>Uses:</strong> {plant.uses}
            </p>
            <p>
              <strong>Habitat:</strong> {plant.Habitat}
            </p>
            <Button as={Link} to="/plants" variant="success">
              ← Back to All Plants
            </Button>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}
