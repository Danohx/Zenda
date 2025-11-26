// src/pages/Home.tsx

import React from 'react';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import { productsData } from '../data/constants'; 
// Ya no necesitamos ZendaColors

const HeroSection: React.FC = () => (
    <section className="hero-section">
      <h2>Refresca tu vida con el poder de la naturaleza.</h2>
      <p>Infusiones artesanales de Bugambilia y frutas exóticas.</p>
      <Button variant="accent" className="btn-large-font btn-gold-border">
        Descubre los Sabores
      </Button>
    </section>
);

const AboutUsSection: React.FC = () => (
    <section className="about-us-section">
      <h2>Nuestra Historia: De la Flor al Vaso</h2>
      <p>
        En Zenda, combinamos recetas ancestrales con ingredientes frescos de la más alta calidad. Vendemos el equilibrio perfecto entre sabor y bienestar, usando la bugambilia como nuestro ingrediente estrella para crear bebidas funcionales y deliciosas.
      </p>
    </section>
);

const ProductsPreview: React.FC = () => (
    <section className="products-preview-section">
        <h2>Explora Nuestros Sabores</h2>
        <div className="products-container">
            {productsData.slice(0, 3).map(product => (
                // Pasamos la clase aquí. El ProductCard la recibe vía props.style
                <ProductCard key={product.name} {...product} /> 
            ))}
        </div>
        <Button variant="primary" className="btn-margin-top">
            Ver Menú Completo
        </Button>
    </section>
);

const CTASection: React.FC = () => (
    <section className="cta-section">
      <h2>¡No esperes más para probar la frescura Zenda!</h2>
      <Button variant="primary" className="btn-large-font btn-gold-border btn-shadow">
        Comprar en Línea Ahora
      </Button>
    </section>
);

const Home: React.FC = () => {
    return (
        <>
            <HeroSection />
            <AboutUsSection />
            <ProductsPreview />
            <CTASection />
        </>
    );
};

export default Home;