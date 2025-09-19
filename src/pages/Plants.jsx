import sheetData from "../data/plants";
import PlantCard from "../components/PlantCard";
import {  Container,Row,Col} from 'react-bootstrap';


function Plants() {
  return (
    <Container >
      <h1 className="text-center fw-bold my-3">Vignan Plants</h1>

      <Row >
        {sheetData.map((plant) => (
          <Col sm={6} md={6} lg={4} xl={3} className="my-2 p-5 p-sm-3" key={plant.sno}>
          <PlantCard plant={plant} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default Plants;
