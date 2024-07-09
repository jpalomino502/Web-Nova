import React from 'react';
import { Button } from './Button';
import { Card } from './Card';

const Features = () => {
  return (
    <section id="features" className="container mx-auto grid gap-8 py-12 px-4 md:px-6 lg:grid-cols-2 lg:py-16">
      <div className="grid gap-4">
        <Card title="Informes financieros" description="Crea informes personalizados que te proporcionen una visión clara y precisa de tu situación financiera." features={["Informes detallados de ingresos y gastos", "Paneles de control personalizables", "Datos exportables para un análisis más profundo"]} />
        <Card title="Seguridad de los datos" description="Protege tu información financiera con tecnología de seguridad avanzada, asegurando la privacidad y seguridad de tus datos." features={["Almacenamiento de datos cifrado", "Autenticación de dos factores", "Copia de seguridad y recuperación seguras"]} />
      </div>
      <div className="grid gap-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Lleva tus finanzas al siguiente nivel con Sirius
        </h2>
        <p className="text-muted-foreground">
          Sirius es tu aliado ideal para optimizar tus operaciones financieras y garantizar la seguridad de tus datos. Experimenta el poder de la gestión financiera fluida y los recibos electrónicos.
        </p>
        <div className="flex gap-4">
          <Button className="h-10 py-2 px-4 bg-black text-white hover:bg-accent hover:text-accent-foreground">Empezar</Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
