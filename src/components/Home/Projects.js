import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-white space-y-6">
          <div className="inline-block bg-white px-3 py-1 text-black text-sm font-medium">
            Nuestros Trabajos
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Descubre Nuestros Proyectos Destacados</h2>
          <p className="text-lg leading-relaxed text-gray-300" style={{ textAlign: 'justify' }}>
            En WebNova, nos especializamos en transformar ideas innovadoras en soluciones digitales que marcan la diferencia. A continuación, te presentamos algunos de nuestros proyectos más destacados que están cambiando el juego en diversas industrias.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-6 md:mt-0">
          <div className="service-card relative bg-white p-6 rounded-lg shadow-md">
            <div className="content">
              <div className="icon">
                <img
                  src="/assets/logoK.png"
                  alt="Kalon Logo"
                  className="h-24 w-24 object-contain mx-auto"
                />
              </div>
              <div className="title text-xl font-semibold text-center">Kalon - Plataforma de Cursos Musicales</div>
              <div className="description text-gray-800"> {/* Cambiado a text-gray-800 para mayor contraste */}
                Kalon es una plataforma web innovadora diseñada para la venta de cursos musicales personalizados. Ofrecemos una experiencia única en aprendizaje musical que combina la tecnología con la pasión por la música, facilitando el acceso a la educación musical de calidad desde cualquier lugar del mundo.
              </div>
            </div>
          </div>

          <div className="service-card relative bg-white p-6 rounded-lg shadow-md">
            <div className="content">
              <div className="icon">
                <img
                  src="/assets/logo.svg"
                  alt="WebNova Logo"
                  className="h-24 w-24 object-contain mx-auto"
                />
              </div>
              <div className="title text-xl font-semibold text-center">Sirius - Aplicación Financiera Innovadora</div>
              <div className="description text-gray-800"> {/* Cambiado a text-gray-800 para mayor contraste */}
                Sirius es una aplicación financiera revolucionaria que redefine la gestión financiera y la emisión de recibos electrónicos. Con funcionalidades avanzadas y una interfaz intuitiva, ayudamos a empresas de todos los tamaños a optimizar sus procesos financieros, mejorar la transparencia y fortalecer la confianza con sus clientes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
