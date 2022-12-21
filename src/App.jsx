import './App.css';
import Menu from './common/Menu';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Inicio from './components/Inicio';

function App() {
  return (
    <div className="App">
     <Menu></Menu>
     <Inicio></Inicio>
    </div>
  );
}

export default App;
