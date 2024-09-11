"use client";

import { GetProductbyid } from "@/components/Helpers/GetProductbyid";
import ButtonNext from "@/components/Next_ui_elements/button/ButtonNext";
import { AddFill, Minus, ShoppingCarIcon } from "@/icons/Icons";
import Image from 'next/image';
import { useParams } from "next/navigation";
import React from "react";

const Tendencias = () => {
  const { id } = useParams<{ id?: string }>(); // Especifica que 'id' puede ser una cadena o indefinido
  
  // Verifica que 'id' sea una cadena antes de usarlo
  const prod = id ? GetProductbyid(id) : null; // Maneja el caso cuando 'id' es indefinido

  const [quantity, setQuantity] = React.useState(1);

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const totalPrice = (prod?.price || 0) * quantity;



  return (
    <div className="flex flex-col lg:flex-row justify-start gap-8 m-4 lg:m-10">

  {/* Cuadrícula de productos */}
  <div className="w-full h-64 sm:w-72 sm:h-auto overflow-hidden bg-gray-200 rounded-lg shadow-lg lg:ml-32">
    <Image
      src={prod?.image || '/default-image.png'}
      alt={prod?.id || 'Imagen no encontrada'}
      width={288}
      height={384}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Información del producto */}
  <div className="flex flex-col w-full lg:w-auto">

    {/* title */}
    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">{prod?.name || "Nombre no disponible"}</h1>

    <div className="mt-2 sm:mt-4">
      {/* Marca */}
      <span className="text-lg font-medium text-gray-700">Marca:</span>
      <p>{prod?.brand || "Categoría no disponible"}</p>
    </div>

    {/* Descripción */}
    <div className="mt-2 sm:mt-4">
      <span className="text-lg font-medium text-gray-700">Descripción:</span>
      <p className="text-gray-500">{prod?.description || "Descripción no disponible"}</p>
    </div>

    {/* Características */}
    <div className="mt-2 sm:mt-4">
      <span className="text-lg font-medium text-gray-700">Características:</span>
      <ul className="space-y-2 list-disc list-inside">
        {prod?.features.map((feature, index) => (
          <li key={index} className="text-gray-500">
            {feature}
          </li>
        ))}
      </ul>
    </div>

    {/* Precio y cantidad */}
    <div className="mt-4 flex flex-row items-center ">
      <p className="text-xl sm:text-2xl font-bold text-gray-600 mb-2">${totalPrice.toFixed(2)}</p>

      <div className="ml-4  flex items-center">
        {/* <button
          onClick={handleDecrease}
          className="px-2 py-1 w-8 h-8 rounded-full bg-gradient-to-tr from-gray-100 via-slate-300 to-gray-100 shadow-sm shadow-black dark:bg-gradient-to-tr dark:from-pink-400 dark:to-purple"
        >
          <Minus className="w-4 h-4  dark:text-white" />
        </button> */}

        <ButtonNext
          type="button"
          onClick={handleDecrease}
          disabled={false}
          className="w-8 h-8 bg-gradient-to-tr from-gray-100 via-slate-300 to-gray-100 shadow-sm shadow-black dark:from-pink-400 dark:to-purple-600 dark:shadow-white"
          icon={<Minus className=" h-4 w-4 dark:text-white " />}
          text=""
          radius={'full'}
        />

        <p className="px-4 text-lg">{quantity}</p>
        
        {/* <button
          onClick={handleIncrease}
          className="px-2 py-1 w-8 h-8 rounded-full bg-gradient-to-tr from-gray-100 via-slate-300 to-gray-100 shadow-sm shadow-black dark:from-pink-400 dark:to-purple-600 dark:shadow-white"> 
          <AddFill className="w-4 h-4 dark:text-white"/>
        </button> */}
        <ButtonNext
          type="button"
          onClick={handleIncrease}
          disabled={false}
          className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-100 via-slate-300 to-gray-100 shadow-sm shadow-black dark:from-pink-400 dark:to-purple-600 dark:shadow-white "
          icon={<AddFill className=" h-4 w-4 dark:text-white " />}
          text=""
          radius="full"
        />

      </div>
    </div>

    {/* Agregar al carrito */}

    <ButtonNext
    type="button"
    onClick={() => console.log('Añadir al carrito')}
    disabled={false}
    className="flex mt-4 px-4 py-2 w-full sm:w-80 items-center justify-center rounded-lg bg-gradient-to-tr from-gray-100 via-slate-300 to-gray-100 shadow-sm shadow-black dark:from-pink-400 dark:to-purple-600 dark:shadow-white "
    text={`Añadir al carrito`}
    icon={<ShoppingCarIcon className=" h-6 w-6 text-gray-500  " />}
    />
  </div>

  
</div>


  );
};

export default Tendencias;
