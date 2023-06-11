import './App.css'
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  )
}

export default App
