// src/App.tsx

import React from 'react';
// Importa BrowserRouter, Routes y Route de 'react-router-dom' (necesitas instalarlo)
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Productos from './pages/Productos';
// import Contacto from './pages/Contacto'; // Necesitarías crear Contacto.tsx
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <div className="main-content-wrapper">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/inicio" element={<Home />} />
                    <Route path="/productos" element={<Productos />} />
                    {/* <Route path="/contacto" element={<Contacto />} /> */}
                    {/* Añade otras rutas como /historia (AboutUs.tsx) */}
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

export default App;