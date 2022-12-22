import React from "react";
import { Row } from "react-bootstrap";
import CardPaises from "./CardPaises";

const ContenedorRow = ({
  arregloPaises,
  darkmode,
  setDarkmode,
  buscador,
  setbuscador,
}) => {
  let buscadorPais = [];

  if (!buscador) {
    buscadorPais = arregloPaises;
  } else {
    buscadorPais = arregloPaises.filter((item) =>
      item.name.toLowerCase().includes(buscador.toLocaleLowerCase()) || item.region.toLowerCase().includes(buscador.toLocaleLowerCase())
    );
  }

  return (
    <div className="mt-5">
      <Row>
        {buscadorPais.map((item, indice) => (
          <CardPaises
            pais={item}
            key={indice}
            darkmode={darkmode}
            setDarkmode={setDarkmode}
          ></CardPaises>
        ))}
      </Row>
    </div>
  );
};

export default ContenedorRow;
