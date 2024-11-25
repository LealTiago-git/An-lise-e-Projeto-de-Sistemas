import React from 'react';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const products = [
    { id: 1, name: 'Notebook Dell', price: 'R$ 4.200,00', image: 'https://memorycomp.com.br/wp-content/uploads/2022/04/peripherals_laptop_latitude_3420nt_gallery_1.psd-scaled.jpg' },
    { id: 2, name: 'Teclado Mecânico', price: 'R$ 350,00', image: 'https://keychron.net.br/cdn/shop/products/Keychron-V1-Custom-Mechanical-Keyboard-frosted-black-knob-K-Pro-red.jpg?v=1677076817&width=1214' },
    { id: 3, name: 'Mouse Gamer', price: 'R$ 150,00', image: 'https://m.media-amazon.com/images/I/61UxfXTUyvL.jpg' },
    { id: 4, name: 'Monitor 24" Full HD', price: 'R$ 1.200,00', image: 'https://images.kabum.com.br/produtos/fotos/sync_mirakl/381076/Monitor-Gamer-AOC-Viper-24-FULL-HD-165Hz-1Ms-Freesync-HDMI-e-DisplayPort-24g2se_1727801899_g.jpg' },
  ];

  return (
    <main style={{ padding: '1rem' }}>
      <section id="products" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2>Produtos em Destaque</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
