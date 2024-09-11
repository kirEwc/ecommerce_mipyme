import React from 'react';
import { Button } from '@nextui-org/react';

type ButtonProps = {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
   radius?: string
};

const ButtonNext: React.FC<ButtonProps> = ({ 
  text, 
  onClick, 
  type = 'button', 
  disabled = false, 
  className = 'bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-52',
  
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}     
    >
      {text}
    </Button>
  );
};

export default ButtonNext;
