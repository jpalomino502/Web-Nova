import React from 'react';

const About = () => {
  return (
    <section id="about" className="text-white py-12 md:py-24 lg:py-32"> {/* Cambiado a texto blanco */}
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <div className="inline-block bg-white px-3 py-1 text-black text-sm font-medium"> {/* Cambiado el fondo a color primario y texto a blanco */}
            Desarrollo web
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Transformamos ideas en realidad</h2>
          <p className="text-lg leading-relaxed" style={{ textAlign: 'justify' }}>
          WebNova es una empresa emergente con sede en Bucaramanga, Colombia, fundada por estudiantes talentosos de la Universidad Autónoma de Bucaramanga (UNAB). Nos destacamos en ofrecer soluciones tecnológicas personalizadas para empresas que buscan alcanzar sus metas corporativas, mediante la creación de soluciones digitales innovadoras y escalables. Nuestro equipo proviene de facultades como Ingeniería, Economía, Negocios y Artes, asegurando una perspectiva multidisciplinaria en cada proyecto.          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/assets/team.png"
            alt="Equipo de WebNova"
            className="w-full max-w-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
