import './styles/app.scss'

import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import ErrorPage from "./pages/404";
import HousingDetail from './pages/HousingDetail';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing/:id" element={<HousingDetail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
