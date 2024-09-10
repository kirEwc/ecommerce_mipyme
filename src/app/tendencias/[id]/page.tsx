"use client";

import { GetProductbyid } from "@/components/Helpers/GetProductbyid";
import Image from 'next/image';
import { useParams } from "next/navigation";
import React from "react";

const Tendencias = () => {
  const { id } = useParams<{ id?: string }>(); // Especifica que 'id' puede ser una cadena o indefinido
  
  // Verifica que 'id' sea una cadena antes de usarlo
  const prod = id ? GetProductbyid(id) : null; // Maneja el caso cuando 'id' es indefinido

  return (
    <div className="flex justify-start gap-8 m-10">
      <div className="w-72 h-96 overflow-hidden bg-gray-200 rounded-lg shadow-lg ml-32">
        <Image
          src={prod?.image || '/default-image.png'}
          alt={prod?.id || 'Imagen no encontrada'}
          width={288}
          height={384}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{prod?.name || "Nombre no disponible"}</h1>
        <p className="text-lg text-gray-600 mb-2">Precio: ${prod?.price || "No disponible"}</p>
        <p className="text-gray-500">{prod?.description || "Descripción no disponible"}</p>
        
        <div className="mt-4">
          <span className="text-sm font-medium text-gray-700">Tallas disponibles:</span>
          <div className="flex gap-2 mt-1">
            {prod?.sizes?.map((size, index) => (
              <span key={index} className="px-2 py-1 border border-gray-300 rounded text-gray-600">{size}</span>
            )) || <span className="text-gray-500">No disponible</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tendencias;
