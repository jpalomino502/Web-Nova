import React, { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    toggleMenu(); // Cierra el menú móvil después de hacer clic en el logo
  };

  return (
    <header className={`header fixed top-0 left-0 w-full bg-transparent text-white p-3 ${menuOpen ? 'menu' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4 cursor-pointer" onClick={scrollToTop}>
          <img src="/assets/logo.svg" alt="WebNova Logo" className="h-10" />
          <div className="text-2xl font-bold">WebNova</div>
        </div>
        <nav className="hidden md:flex space-x-4">
          <ScrollLink
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-gray-400"
            href="#about"
          >
            Nosotros
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-gray-400"
            href="#services"
          >
            Servicios
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-gray-400"
            href="#projects"
          >
            Proyectos
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="why-choose-us"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-gray-400"
            href="#why-choose-us"
          >
            Razones
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-gray-400"
            href="#contact"
          >
            Contacto
          </ScrollLink>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Menú"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden">
          <nav className="menu bg-black text-white flex flex-col space-y-4 p-4">
            <ScrollLink
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-gray-400"
              href="#about"
              onClick={toggleMenu}
            >
              Nosotros
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-gray-400"
              href="#services"
              onClick={toggleMenu}
            >
              Servicios
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-gray-400"
              href="#projects"
              onClick={toggleMenu}
            >
              Proyectos
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              to="why-choose-us"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-gray-400"
              href="#why-choose-us"
              onClick={toggleMenu}
            >
              Razones
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-gray-400"
              href="#contact"
              onClick={toggleMenu}
            >
              Contacto
            </ScrollLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
