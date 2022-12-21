import React from "react";
import { Row} from "react-bootstrap";
import CardPaises from "./CardPaises";


const ContenedorRow = ({arregloPaises}) => {
  return (
    <div className="mt-5">
      <Row>
        {
            arregloPaises.map((item)=><CardPaises pais={item} key={item.id}></CardPaises>)
        }
      </Row>
    </div>
  );
};

export default ContenedorRow;
