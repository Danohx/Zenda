// src/pages/Home.tsx

import React from 'react';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import { productsData } from '../data/constants'; 
import { useReveal } from '../hooks/useReveal';
import { useRevealStagger } from '../hooks/userRevealStagger';

const HeroSection: React.FC = () => {
    const ref = useReveal();

    return(
        <section ref={ref} className="hero-section">
        <h2>Refresca tu vida con el poder de la naturaleza.</h2>
        <p>Infusiones artesanales de Bugambilia y frutas exóticas.</p>
        <Button variant="accent" className="btn-large-font btn-gold-border">
            Descubre los Sabores
          </Button>
        </section>
    )
};

// Modificación de AboutUsSection
const AboutUsSection: React.FC = () => {
    const ref = useReveal();

    return(
        <section ref={ref} className="about-us-section">
        <div className="about-content">
            <div className="text-container">
                <h2>Nuestra Historia: De la Flor al Vaso</h2>
                <p>
                En Zenda, combinamos recetas ancestrales con ingredientes frescos...
                </p>
            </div>
            
            <div className="video-container">
                <video
                muted
                playsInline
                controls
                loop
                preload="none"
                poster="/images/video-zenda-preview.png"
                >
                    <source src="/videos/info-zenda.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
        </section>
    )
};

const ProductsPreview: React.FC = () => {
    const ref = useRevealStagger('.product-card');

    return(
        <section className="products-preview-section">
            <h2>Explora Nuestros Sabores</h2>
            <div ref={ref} className="products-container">
                {productsData.slice(0, 3).map(product => (
                    <ProductCard key={product.name} {...product} /> 
                ))}
            </div>
        </section>
    )
};

const CTASection: React.FC = () => {
    const ref = useReveal();

    return(
        <section ref={ref} className="cta-section">
        <h2>¡No esperes más para probar la frescura Zenda!</h2>
        <Button variant="primary" className="btn-large-font btn-gold-border btn-shadow">
            Comprar en Línea Ahora
          </Button>
        </section>
    )
};

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