// src/components/Header.tsx

import React from 'react';
import Button from './Button';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-logo-container">
                <img src="/logo.jpg" alt="Zenda Logo" />
                <h1>ZENDA</h1>
            </div>
            <nav>
                {['Inicio', 'Productos', 'Historia', 'Contacto'].map(item => (
                    <a key={item} href={`/${item.toLowerCase()}`}>{item}</a>
                ))}
            </nav>
            {/* AÑADIDO: variant="accent" | ELIMINADO: style={...} */}
            <Button variant="accent" className="btn-small-padding">
                Comprar Ahora
            </Button>
        </header>
    );
};

export default Header;