// src/pages/Productos.tsx (CORREGIDO)

import React from 'react';
import ProductCard from '../components/ProductCard';
import { productsData } from '../data/constants'; 

const Productos: React.FC = () => {
    return (
        <div className="productos-page-container">
            <h1 className="productos-page-title">Catálogo Completo de Bebidas Zenda</h1>
            <p className="productos-page-description">Selecciona tu sabor favorito y conoce su información nutrimental detallada.</p>
            <div className="products-container">
                {productsData.map(product => (
                    <ProductCard key={product.name} {...product} className="product-card-margin" />
                ))}
            </div>
        </div>
    );
};

export default Productos;