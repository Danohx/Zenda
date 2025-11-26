// src/components/ProductCard.tsx

import React from 'react';
import { type ProductType } from '../data/constants'; // ZendaColors ya no es necesario aquí
import Button from './Button';

const ProductCard: React.FC<ProductType> = (product) => {
    // Nota: El componente ahora debe recibir la clase 'product-card' del CSS global
    return (
        // 1. Usar className con una cadena (String)
        <div className="product-card">
            
            {/* 2. Usar className y confiar en los estilos CSS */}
            <img src={product.imageUrl} alt={product.name} className="product-card-image" />
            
            {/* 3. Usar className para el encabezado */}
            <h3 className="product-card-title">{product.name}</h3>

            {/* 4. Usar className para la ficha nutrimental */}
            <div className="nutritional-info">
                {/* 5. Usar <span> con una clase para negrita si es necesario, no estilo en línea */}
                <p><span className="bold-text">Calorías: </span>{product.kcal}</p>
                <p><span className="bold-text">Vitamina C: </span>{product.vitaminC}</p>
                <p><span className="bold-text">Antioxidantes: </span>{product.antioxidants}</p>
            </div>

            <Button variant="accent" onClick={() => alert(`Mostrando detalles de ${product.name}`)}>
                Ver Detalles Nutrimentales
            </Button>
        </div>
    );
};

export default ProductCard;