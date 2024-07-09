import React from 'react';

const Contact = () => {
  const handleContactButtonClick = () => {
    window.open('https://www.instagram.com/webnova_bga?igsh=cmxwZXRsdXFhbDVy&utm_source=qr', '_blank');
  };

  return (
    <section id="contact" className="py-16 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Explora las Estrellas con WebNova</h2>
          <p className="text-lg mb-8">
            Llevamos tus proyectos hacia nuevos horizontes. Contacta con nosotros y descubre cómo podemos ayudarte a brillar en el universo digital.
          </p>
          <button
            onClick={handleContactButtonClick}
            className="bg-white text-gray-900 px-6 py-3 rounded-none font-medium shadow-md transition duration-300 ease-in-out hover:bg-gray-200"
          >
            Contacto
          </button>
          <div className="mt-8 flex justify-center space-x-6">
            <a href="https://www.facebook.com/share/uNDaJQkfLvTYKW1a/?mibextid=LQQJ4d">
              <img src="/assets/FacebookIcon.svg" className="h-8 w-8" alt="Facebook Icon" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://www.instagram.com/webnova_bga?igsh=cmxwZXRsdXFhbDVy&utm_source=qr">
              <img src="/assets/InstagramIcon.svg" className="h-8 w-8" alt="Instagram Icon" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://www.linkedin.com/company/webnova-co/">
              <img src="/assets/LinkedInIcon.svg" className="h-8 w-8" alt="LinkedIn Icon" />
              <span className="sr-only">LinkedIn</span>
            </a>
            {/* <a href="https://wa.me/whatsappphonenumber" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
              <img src="/icons/whatsapp-icon.svg" alt="WhatsApp" className="h-8 w-8" />
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
