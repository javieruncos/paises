import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { listarPaises } from "../helpers/queries";
import "../styles/Inicio.css";
import ContenedorRow from "./ContenedorRow";

const Inicio = ({ darkmode, setDarkmode }) => {
  const [arregloPaises, setArregloPaises] = useState([]);
  const [buscador, setbuscador] = useState("");

  useEffect(() => {
    listarPaises().then((respuesta) => {
      console.log(respuesta);
      setArregloPaises(respuesta);
    });
  }, []);

  return (
    <div className="container mt-5">
      <div className="contenedorSearch">
        <div className="shadow d-flex">
          <div className="me-2 div-search px-1">
            <i className="bi bi-search "></i>
          </div>
          <input
            type="text"
            className="form-control inputSearch"
            placeholder="Search for a country"
            value={buscador}
            onChange={(e)=>setbuscador(e.target.value)}
          />
        </div>
        <div className="shadow">
          <Form.Select
            aria-label="Default select example"
            className="selectSearch inputSearch"
            value={buscador}
            onChange={(e)=>setbuscador(e.target.value)}
          >
            <option value="">Open this select menu</option>
            <option value="Americas">America</option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
          </Form.Select>
        </div>
      </div>
      <section>
        <ContenedorRow
          arregloPaises={arregloPaises}
          darkmode={darkmode}
          setDarkmode={setDarkmode}
          buscador={buscador}
          setbuscador={setbuscador}
        ></ContenedorRow>
      </section>
    </div>
  );
};

export default Inicio;
