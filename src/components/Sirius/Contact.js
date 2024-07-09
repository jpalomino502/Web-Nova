import React from 'react';
import { Button } from './Button';
import { Card } from './Card';

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto grid gap-8 py-12 px-4 md:px-6 lg:grid-cols-2 lg:py-16">
      <div className="grid gap-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Contacta con nosotros</h2>
        <p className="text-muted-foreground">
          Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nuestro equipo de atención al cliente.
        </p>
        <form className="grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="name">Nombre</label>
            <input id="name" type="text" placeholder="Ingresa tu nombre" className="input" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email">Correo electrónico</label>
            <input id="email" type="email" placeholder="Ingresa tu correo electrónico" className="input" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" rows={4} placeholder="Escribe tu mensaje" className="textarea" />
          </div>
          <Button type="submit">Enviar</Button>
        </form>
      </div>
      <div className="grid gap-4">
        <Card title="Atención al cliente" description="Nuestro equipo de atención al cliente está disponible para ayudarte con cualquier duda o consulta que tengas." features={["+1 (123) 456-7890", "soporte@sirius.com", "Lunes a Viernes, 9am - 6pm"]} />
      </div>
    </section>
  );
};

export default Contact;
