import React from 'react';
import { Button } from './Button';
import { Card } from './Card';

const Pricing = () => {
  return (
    <section id="pricing" className="container mx-auto grid gap-8 py-12 px-4 md:px-6 lg:grid-cols-2 lg:py-16">
      <div className="grid gap-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Precios asequibles para tu negocio</h2>
        <p className="text-muted-foreground">
          Sirius ofrece planes flexibles y asequibles para adaptarse a las necesidades de tu negocio. Elige el que mejor se ajuste a tus requisitos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="h-10 py-2 px-4 border border-primary text-primary hover:bg-background hover:text-primary">Ver planes</Button>
          <Button variant="outline" className="h-10 py-2 px-4 bg-black text-white hover:bg-accent hover:text-accent-foreground">Contactar</Button>
        </div>
      </div>
      <div className="grid gap-4">
        <Card title="Plan Básico" description="Ideal para pequeños negocios que necesitan funciones esenciales de gestión financiera." features={["Emisión de recibos electrónicos", "Seguimiento de gastos", "Informes financieros básicos"]} price="$9/mes" />
        <Card title="Plan Avanzado" description="Ofrece funciones avanzadas de gestión financiera y personalización." features={["Emisión de recibos personalizados", "Paneles de control avanzados", "Integración con herramientas externas"]} price="$19/mes" />
      </div>
    </section>
  );
};

export default Pricing;
