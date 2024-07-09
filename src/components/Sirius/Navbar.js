import React from 'react';
import { Link } from 'react-scroll';
import { FaStar as StarIcon } from 'react-icons/fa';
import { Button } from './Button';

const Navbar = () => {
  return (
    <header className="header sticky top-0 z-40 border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2 font-semibold cursor-pointer">
          <StarIcon className="h-6 w-6 text-primary" />
          <span className="text-lg">Sirius</span>
        </div>
        <nav className="flex items-center gap-4 md:gap-6 lg:gap-8">
          <Link to="features" smooth className="text-muted-foreground hover:text-foreground hidden sm:inline-block">
            Características
          </Link>
          <Link to="pricing" smooth className="text-muted-foreground hover:text-foreground hidden sm:inline-block">
            Precios
          </Link>
          <Link to="contact" smooth className="text-muted-foreground hover:text-foreground hidden sm:inline-block">
            Contacto
          </Link>
          <Button variant="outline" className="h-10 sm:h-12 py-2 px-4 bg-black text-white hover:bg-accent hover:text-accent-foreground">
            Empezar
          </Button>
        </nav>
        <Button variant="outline" className="inline-flex md:hidden bg-black text-white hover:bg-accent hover:text-accent-foreground">
          Empezar
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
