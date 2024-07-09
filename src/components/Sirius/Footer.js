import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
import { FaStar } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t bg-muted/40 py-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <div className="flex items-center gap-2 cursor-pointer">
          <FaStar className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium">Sirius</span>
        </div>
        <nav className="flex items-center gap-4 text-sm">
          <Link to="#" className="text-muted-foreground hover:text-foreground">Privacidad</Link>
          <Link to="#" className="text-muted-foreground hover:text-foreground">Términos</Link>
          <Link to="/contact" className="text-muted-foreground hover:text-foreground">Contacto</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
