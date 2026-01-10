import React, { useContext } from 'react';
import { CartContext } from './CartContext';

export default function CartView() {
  // 1. Consumimos el contexto
  const context = useContext(CartContext);

  // 2. (Opcional pero recomendado en TS) Verificamos que el contexto exista
  if (!context) {
    throw new Error("CartView debe ser usado dentro de un CartProvider");
  }

  const { items, addItem, removeItem } = context;

  return (
    <div>
      <h2>Carrito</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {/* TypeScript ahora sabe que item tiene .name e .id */}
            {item.name} 
            <button onClick={() => removeItem(item.id)}>❌</button>
          </li>
        ))}
      </ul>
      <button 
        onClick={() => addItem({ id: Date.now(), name: 'Nuevo producto' })}
      >
        Agregar producto
      </button>
    </div>
  );
}