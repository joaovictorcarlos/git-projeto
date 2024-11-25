//import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
function App() {
  return (
    <div className="App">
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Ristorente Con Fusion</NavbarBrand>
              <div>Aluno: joão victor</div>
            </div>
          </Navbar>  
    <Menu />
    </div>
  );
}

export default App;
