import React from 'react';
import Button from './Button';

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="header-logo-container">
        <img src="/logo.jpg" alt="Zenda Logo" />
        <h1>ZENDA</h1>
      </div>

      <nav>
        <button onClick={() => scrollToSection('inicio')}>Inicio</button>
        <button onClick={() => scrollToSection('productos')}>Productos</button>
        <button onClick={() => scrollToSection('historia')}>Historia</button>
        <button onClick={() => scrollToSection('contacto')}>Contacto</button>
      </nav>

      <Button variant="accent" className="btn-small-padding">
        Comprar Ahora
      </Button>
    </header>
  );
};

export default Header;
