import React from 'react';

const Button = ({ children, variant, ...props }) => {
  let className = 'py-2 px-4 font-semibold';
  
  if (variant === 'outline') {
    className += ' border border-primary text-primary hover:bg-background hover:text-primary';
  } else {
    className += ' bg-black text-white hover:bg-accent hover:text-accent-foreground';
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export { Button };
