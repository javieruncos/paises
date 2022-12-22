import './App.css';
import Menu from './common/Menu';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Inicio from './components/Inicio';
import { useState } from 'react';

function App() {
  const [darkmode, setDarkmode] = useState(false)
  return (
    <div className= {darkmode ? "dark" : "light" }>
     <Menu darkmode={darkmode} setDarkmode={setDarkmode}></Menu>
     <Inicio></Inicio>
    </div>
  );
}

export default App;
