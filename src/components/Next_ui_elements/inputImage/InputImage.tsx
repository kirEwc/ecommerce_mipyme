import React, { useState } from 'react';
import { Input, InputProps } from '@nextui-org/react';
import { IconParkCamera, TablerCameraX } from '@/icons/Icons'; // Asegúrate de que los íconos estén importados correctamente

interface ImageInputProps extends Omit<InputProps, 'type'> {
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageInput: React.FC<ImageInputProps> = ({ 
  name = 'image', 
  onChange, 
  className = '', 
  ...props 
}) => {
  // Estado para controlar la imagen seleccionada
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Obtener el archivo seleccionado
    if (file) {
      setSelectedImage(file); // Actualizar el estado con la imagen seleccionada
      if (onChange) onChange(e); // Llamar a la función onChange pasada como prop
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center">
        <div className="text-2xl text-default-400 pointer-events-none flex-shrink-0">
          {/* Mostrar un icono diferente si hay una imagen seleccionada */}
          {selectedImage ? (
            <IconParkCamera className="text-green-500" />
          ) : (
            <TablerCameraX className="text-default-400" />
          )}
        </div>
        <Input
          name={name}
          type="file"
          onChange={handleFileChange}
          placeholder=""
          labelPlacement="outside"
          className="max-w-xs opacity-0 absolute top-0 left-0 cursor-pointer"
          accept="image/*" // Solo imágenes
          {...props}  // Pasamos el resto de las props
        />
      </div>
    </div>
  );
};

export default ImageInput;
