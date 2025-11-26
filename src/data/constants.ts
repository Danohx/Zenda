// src/data/constants.ts

// Interfaz para el producto
export interface ProductType {
  name: string;
  kcal: string;
  vitaminC: string;
  antioxidants: string;
  imageUrl: string;
  className?: string;
  style?: React.CSSProperties;
}

// Datos de los Productos
export const productsData: ProductType[] = [
  { name: 'Bugambilia Limón y Jamaica', kcal: '70–90 kcal', vitaminC: '6–12 mg', antioxidants: 'Alto', imageUrl: '/assets/limon-jamaica.jpg' },
  { name: 'Bugambilia Uva y Kiwi', kcal: '85–115 kcal', vitaminC: '20–35 mg', antioxidants: 'Alto', imageUrl: '/assets/uva-kiwi.jpg' },
  { name: 'Bugambilia Guayaba', kcal: '85–115 kcal', vitaminC: '40–80 mg', antioxidants: 'Muy Alto', imageUrl: '/assets/guayaba.jpg' },
  { name: 'Bugambilia Mora con Fresa', kcal: '90–120 kcal', vitaminC: '25–45 mg', antioxidants: 'Muy Alto', imageUrl: '/assets/mora-fresa.jpg' },
];