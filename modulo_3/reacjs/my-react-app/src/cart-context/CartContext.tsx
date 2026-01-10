import { createContext } from 'react';

// 1. Definimos la interfaz del Producto (La forma de tus datos)
export interface Product {
  id: number;
  name: string;
}

// 2. Definimos qué contiene el Contexto (Datos + Funciones)
export interface CartContextType {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (id: number) => void;
}

// 3. Creamos el contexto tipado
// Inicializamos con undefined o null para forzar la validación en el componente
export const CartContext = createContext<CartContextType | undefined>(undefined);