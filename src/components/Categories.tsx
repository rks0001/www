import React from "react";
import Catcard from "./Catcard";
import med2 from "../images/med4.svg";
import "../styles/Categories.css";
import { Container, Col, Row } from "react-bootstrap";

const Categories = () => {
  return (
    <>
      <div className="categories">
        <div className="headtext">Shop by Categories :-</div>
        <Container>
          <Row className="rowone">
            <Col>
              <Catcard
                title="Allopathic Medicines"
                desp="Description"
                img={med2}
                link="https://react-bootstrap.netlify.app/docs/components/cards/"
              />
            </Col>
            <Col>
              <Catcard
                title="Ayurvedic Medicines"
                desp="Description"
                img={med2}
              />
            </Col>
            <Col>
              <Catcard
                title="Generic Medicines"
                desp="Description"
                img={med2}
              />
            </Col>
          </Row>
          <Row className="rowtwo">
            <Col>
              <Catcard title="Mom & Baby" desp="Description" img={med2} />
            </Col>
            <Col>
              <Catcard title="Diabetic Care" desp="Description" img={med2} />
            </Col>
            <Col>
              <Catcard title="Pain Relief" desp="Description" img={med2} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Categories;
