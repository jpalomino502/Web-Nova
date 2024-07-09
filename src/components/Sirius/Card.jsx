import React from 'react';
import { FaCheck } from 'react-icons/fa'; // Importa FaCheck desde react-icons/fa

export const Card = ({ title, description, features, price }) => {
  return (
    <div className="rounded-lg border shadow-sm">
      <div className="p-4">
        <h3 className="font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <div className="grid gap-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <FaCheck className="h-4 w-4 text-green-500" /> {/* Usa FaCheck aquí */}
              <span>{feature}</span>
            </div>
          ))}
        </div>
        {price && (
          <div className="flex items-center justify-between mt-4">
            <span className="text-2xl font-bold">{price}</span>
            <button className="btn">Suscribirse</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
