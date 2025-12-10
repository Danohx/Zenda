// src/data/constants.ts
// import mandarinaImg from '../assets/mandarina.jpg';
import fresaImg from '../assets/Fresa.jpg';
import pinaImg from '../assets/Piña-Jamaica.jpg';
import mandarinaImg from '../assets/mandarina.jpg';

// Interfaz para el producto
export interface ProductType {
  name: string;
  imageUrl: string;
  className?: string;
  style?: React.CSSProperties;
}

// Datos de los Productos
export const productsData: ProductType[] = [
  { name: 'Bugambilia de Mandarina', imageUrl: mandarinaImg },
  { name: 'Bugambilia de Fresa', imageUrl: fresaImg },
  { name: 'Bugambilia de Piña y Jamaica', imageUrl: pinaImg },
];