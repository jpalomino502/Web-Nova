import React from 'react';
import { Button } from './Button';
import { Card } from './Card';

const Hero = () => {
  return (
    <section className="container mx-auto grid gap-8 py-12 px-4 md:px-6 lg:grid-cols-2 lg:py-16">
      <div className="grid gap-4">
        <h1 className="text-4xl font-bold tracking-tight text-primary">Administra tus finanzas con Sirius</h1>
        <p className="text-muted-foreground">
          Sirius es una aplicación financiera innovadora que te ayuda a optimizar tus operaciones financieras y emitir recibos electrónicos con facilidad.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="h-10 sm:h-12 py-2 px-4 bg-black text-white hover:bg-accent hover:text-accent-foreground">Empezar</Button>
          <Button variant="outline" className="h-10 sm:h-12 py-2 px-4 border border-primary text-primary hover:bg-primary hover:text-primary">Más información</Button>
        </div>
      </div>
      <div className="grid gap-4">
        <Card title="Emisión de recibos electrónicos" description="Genera y envía rápidamente recibos electrónicos, asegurando que todas tus transacciones estén bien documentadas y accesibles." features={["Plantillas de recibos personalizables", "Entrega automática por correo electrónico", "Archivo digital seguro"]} />
        <Card title="Gestión financiera integral" description="Realiza un seguimiento efectivo de tus ingresos y gastos, manteniendo un registro detallado y organizado de todas tus operaciones." features={["Seguimiento de gastos intuitivo", "Categorización automatizada", "Informes financieros detallados"]} />
      </div>
    </section>
  );
};

export default Hero;
