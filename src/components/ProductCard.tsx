// src/components/ProductCard.tsx
import React from 'react';
import { type ProductType } from '../data/constants';
import Button from './Button';

// Desestructuramos las props para que el código sea más limpio
const ProductCard: React.FC<ProductType> = ({ name, imageUrl }) => {
    return (
        <div className="product-card">
            
            {/* 1. CREAMOS EL CONTENEDOR (El marco de la foto) */}
            <div className="product-card-image">    
                <img 
                    src={imageUrl} 
                    alt={name} 
                    style={{ opacity: 1 }} 
                />
            </div>
            
            <h3 className="product-card-title">{name}</h3>

            <Button variant="accent" onClick={() => alert(`Mostrando detalles de ${name}`)}>
                Ver Detalles Nutrimentales
            </Button>
        </div>
    );
};

export default ProductCard;