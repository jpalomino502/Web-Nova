import React from 'react';
import { FiMonitor, FiSmartphone, FiSettings } from 'react-icons/fi';

const Services = () => {
  return (
    <section id="services" className="bg-transparent py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="grid grid-cols-1 gap-6 mt-6 md:mt-0">
          <div className="service-card relative bg-white p-6 rounded-lg shadow-md flex items-center">
            <div className="icon bg-gray-200 p-3 rounded-full">
              <FiMonitor className="text-2xl text-gray-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold title">Desarrollo web</h3>
              <p className="text-gray-800 description"> {/* Cambiado a text-gray-800 para mayor contraste */}
                Creamos sitios web a medida que brillan como estrellas en el firmamento digital.
              </p>
            </div>
          </div>
          <div className="service-card relative bg-white p-6 rounded-lg shadow-md flex items-center">
            <div className="icon bg-gray-200 p-3 rounded-full">
              <FiSmartphone className="text-2xl text-gray-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold title">Desarrollo móvil</h3>
              <p className="text-gray-800 description"> {/* Cambiado a text-gray-800 para mayor contraste */}
                Desarrollamos aplicaciones móviles que te conectan con las estrellas desde cualquier lugar.
              </p>
            </div>
          </div>
          <div className="service-card relative bg-white p-6 rounded-lg shadow-md flex items-center">
            <div className="icon bg-gray-200 p-3 rounded-full">
              <FiSettings className="text-2xl text-gray-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold title">Optimización</h3>
              <p className="text-gray-800 description"> {/* Cambiado a text-gray-800 para mayor contraste */}
                Optimizamos tu presencia en línea para que brille como una supernova en los resultados de búsqueda.
              </p>
            </div>
          </div>
        </div>
        <div className="text-white space-y-6">
          <div className="inline-block bg-white px-3 py-1 text-black text-sm font-medium">
            Nuestros Servicios
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Explorando el Universo Digital</h2>
          <p className="text-lg leading-relaxed text-gray-300" style={{ textAlign: 'justify' }}>
            En WebNova, utilizamos nuestra experiencia en tecnología para crear soluciones que brillan como estrellas en el universo digital. Desde el desarrollo web que ilumina tu presencia online hasta la optimización que hace que tu negocio brille con luz propia, estamos aquí para llevar tus ideas más allá de las galaxias.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
