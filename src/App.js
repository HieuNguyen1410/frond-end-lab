// import logo from './logo.svg';
import { Navbar, NavbarBrand } from "reactstrap";
import Main from "./components/MainComponent";
import "./App.css";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
