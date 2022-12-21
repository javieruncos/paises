import React, { useEffect ,useState} from "react";
import { Form } from "react-bootstrap";
import { listarPaises } from "../helpers/queries";
import "../styles/Inicio.css"
import ContenedorRow from "./ContenedorRow";

const Inicio = () => {

    const [arregloPaises, setArregloPaises] = useState([])

   useEffect(()=>{
    listarPaises().then((respuesta)=>{
        console.log(respuesta)
        setArregloPaises(respuesta)
    })
   },[])


  return (
    <div className="container mt-5">
      <div className="contenedorSearch">
        <div className="shadow d-flex">
          <div className="me-2 div-search px-1">
            <i className="bi bi-search "></i>
          </div>
          <input type="text" className="form-control inputSearch" placeholder="Search for a country"/>
        </div>
        <div className="shadow">
          <Form.Select aria-label="Default select example" className="selectSearch inputSearch">
            <option>Open this select menu</option>
            <option value="1">America</option>
            <option value="2">Europe</option>
            <option value="3">Africa</option>
            <option value="3">Asia</option>
            <option value="3">Oceania</option>
          </Form.Select>
        </div>
      </div>
      <section>
        <ContenedorRow arregloPaises={arregloPaises}></ContenedorRow>
      </section>
    </div>
  );
};

export default Inicio;
