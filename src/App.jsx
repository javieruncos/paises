import './App.css';
import Menu from './common/Menu';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Inicio from './components/Inicio';
import { useState } from 'react';
import Footer from './common/Footer';

function App() {
  const [darkmode, setDarkmode] = useState(false)
  return (
    <div className= {darkmode ? "dark" : "light" }>
     <Menu darkmode={darkmode} setDarkmode={setDarkmode}></Menu>
     <Inicio darkmode={darkmode} setDarkmode={setDarkmode}></Inicio>
     <Footer></Footer>
    </div>
  );
}

export default App;
