import React from "react";
import { Col, Card} from "react-bootstrap";

const CardPaises = ({ pais }) => {
  return (
    <>
      <Col md={4}>
        <div className="mt-3">
          <Card>
            <div className="imgContenedor">
              <img src={pais.flags.png} alt="bandera" className="w-100"/>
            </div>
            <Card.Body className="cardBody">
              <h6>{pais.name}</h6>
              <Card.Text>
              population: {pais.population} <br />
               capital: {pais.capital}  <br />
              region: {pais.region} <br />
              
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </>
  );
};

export default CardPaises;
