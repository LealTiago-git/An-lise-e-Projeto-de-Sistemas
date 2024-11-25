import React from 'react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('R$', '').replace('.', '').replace(',', '.'));
    return sum + price * item.quantity;
  }, 0);

  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Carrinho de Compras</h2>
      {cart.length > 0 ? (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
          <thead>
            <tr style={{ backgroundColor: '#f4f4f4', textAlign: 'left' }}>
              <th style={styles.th}>Produto</th>
              <th style={styles.th}>Quantidade</th>
              <th style={styles.th}>Preço</th>
              <th style={styles.th}>Subtotal</th>
              <th style={styles.th}>Ação</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td style={styles.td}>{item.name}</td>
                <td style={styles.td}>{item.quantity}</td>
                <td style={styles.td}>{item.price}</td>
                <td style={styles.td}>
                  R$ {(item.quantity * parseFloat(item.price.replace('R$', '').replace('.', '').replace(',', '.'))).toFixed(2)}
                </td>
                <td style={styles.td}>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      padding: '0.25rem 0.5rem',
                      border: 'none',
                      borderRadius: '4px',
                      backgroundColor: '#ff4d4f',
                      color: '#fff',
                      cursor: 'pointer',
                    }}
                  >
                    Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ textAlign: 'center' }}>Seu carrinho está vazio!</p>
      )}

      <h3 style={{ textAlign: 'right' }}>Total: R$ {total.toFixed(2)}</h3>
    </main>
  );
};

const styles = {
  th: { padding: '0.75rem', borderBottom: '1px solid #ccc' },
  td: { padding: '0.75rem', borderBottom: '1px solid #ccc' },
};

export default Cart;
