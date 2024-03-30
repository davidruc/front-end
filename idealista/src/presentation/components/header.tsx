// Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Empresa ABC</h1>
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Servicios</a></li>
          {/* Más elementos del menú... */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
