// components/InputCode.tsx
import React from 'react';

interface InputCodeProps {
  value: number;                      // Valor del input
  onChange: (value: number) => void; // Función para manejar el cambio
  className?: string;                 // Clases opcionales para estilos
  placeholder?: string;               // Placeholder opcional
}

const InputCode: React.FC<InputCodeProps> = ({
  value,
  onChange,
  className,
  placeholder,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (!isNaN(newValue)) {
      onChange(newValue); // Llama a onChange solo si el valor es un número
    }
  };

  return (
    <input
      type="number"
      value={value}
      onChange={handleChange}
      className={`border p-2 rounded ${className}`} // Clases de Tailwind
      placeholder={placeholder}
    />
  );
};

export default InputCode;
