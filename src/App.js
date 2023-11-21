import logo from './logo.svg';
import './App.css';
import {Route, Router, Routes} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router basename='/pokedex-react'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
