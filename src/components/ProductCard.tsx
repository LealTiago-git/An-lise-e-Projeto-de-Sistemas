import React from 'react';
import { useCart } from '../context/CartContext';

type ProductCardProps = {
  id: number;
  name: string;
  price: string;
  image: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image }) => {
  const { addToCart } = useCart();

  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1rem',
        textAlign: 'center',
        width: '200px',
      }}
    >
      <img src={image} alt={name} style={{ width: '100%', height: 'auto', marginBottom: '1rem' }} />
      <h3>{name}</h3>
      <p>{price}</p>
      <button
        onClick={() => addToCart({ id, name, price, image })}
        style={{
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '4px',
          backgroundColor: '#4CAF50',
          color: '#fff',
          cursor: 'pointer',
        }}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ProductCard;
