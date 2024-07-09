import React from 'react';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 items-center">
        <div className="text-white space-y-6">
          <div className="inline-block bg-white px-3 py-1 text-black text-sm font-medium">
            ¿Por qué elegirnos?
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Impulsando el Cambio Positivo</h2>
          <p className="text-lg leading-relaxed">
            En WebNova, estamos comprometidos con la innovación tecnológica y el impacto social. Desde nuestros inicios, hemos integrado prácticas sostenibles y éticas en cada proyecto que desarrollamos.
          </p>
          <p className="text-lg leading-relaxed">
            Nuestro enfoque va más allá de la tecnología; nos preocupamos por crear soluciones que no solo sean avanzadas, sino que también generen un cambio positivo en la sociedad y el medio ambiente.
          </p>
          <p className="text-lg leading-relaxed">
            Al elegir WebNova, eliges un socio tecnológico comprometido con la accesibilidad, la sostenibilidad y el desarrollo ético. Estamos aquí para impulsar tu visión con soluciones que marcan la diferencia.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/assets/impact.png"
            alt="Impacto de WebNova"
            className="w-full max-w-[500px] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
