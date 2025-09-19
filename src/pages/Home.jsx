import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container fluid className="text-center py-5 bg-light" style={{height:"100%"}}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="display-4 fw-bold mb-3">🌿 Vignan Plants</h1>
        <p className="lead text-muted mb-4">
          Explore 140+ plants with their uses, habitats, and scientific details.
        </p>
        <Button
          as={Link}
          to="/plants"
          variant="success"
          size="lg"
          className="shadow"
        >
          View All Plants
        </Button>
      </motion.div>

      {/* Featured Plants Preview */}
      <Row className="mt-5">
        <Col md={4} className="mb-4">
          <motion.div
            className="p-3 bg-white shadow rounded"
            whileHover={{ scale: 1.05 }}
          >
            <h4>Medicinal Plants</h4>
            <p className="text-muted">
              Discover plants with healing properties used in Ayurveda and folk
              medicine.
            </p>
          </motion.div>
        </Col>

        <Col md={4} className="mb-4">
          <motion.div
            className="p-3 bg-white shadow rounded"
            whileHover={{ scale: 1.05 }}
          >
            <h4>Fruit-Bearing Plants</h4>
            <p className="text-muted">
              Explore plants that provide fruits, nutrition, and economic value.
            </p>
          </motion.div>
        </Col>

        <Col md={4} className="mb-4">
          <motion.div
            className="p-3 bg-white shadow rounded"
            whileHover={{ scale: 1.05 }}
          >
            <h4>Rare & Exotic Plants</h4>
            <p className="text-muted">
              Learn about rare species and their importance in biodiversity.
            </p>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}
