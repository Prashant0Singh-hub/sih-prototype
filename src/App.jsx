import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Addition from "./Components/Addition";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

const App = () => { 
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addition" element={<Addition />} />
      </Routes>
    </Router>
  );
};

export default App;