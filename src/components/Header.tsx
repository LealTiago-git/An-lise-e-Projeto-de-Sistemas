import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '1rem 0', textAlign: 'center' }}>
      <h1>Loja de Informática</h1>
      <nav>
        <Link to="/" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Início</Link>
        <Link to="/about" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Sobre Nós</Link>
        <Link to="/contact" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Contato</Link>
        <Link to="/cadastro" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Cadastro</Link>
        <Link to="/cart" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Carrinho</Link>
      </nav>
    </header>
  );
};

export default Header;
