import React from "react";
import {Card, CardHeader, CardBody, Image, CardFooter} from "@nextui-org/react";

interface CardProps {
  name: string;
  src: string;
  price: number;
  className?: string;
}
const CardCustom:React.FC<CardProps> = ({name, src, price,className}) => {
  return (
    <Card className={`bg-slate-200 py-4 ${className}`} >
      <CardHeader className=" pb-0 pt-2 px-4 flex-col items-start">
        <Image
          alt={name}
          className="object-cover rounded-xl"
          src={src}
          width={270}
          height={200}
        />
      </CardHeader>
        
      <CardBody className="overflow-visible py-2">
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardBody>
      <CardFooter className="pt-0 pb-2 px-4">
        <p className="text-tiny uppercase font-bold">{price}</p>

      </CardFooter>
    </Card>
  );
}
export default CardCustom

// <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group transition-colors duration-300">
//               <div className="relative">
//                 <img src={product.image}  className="w-full h-64 object-cover object-center" />
//                 <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <button className="bg-white  text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full font-semibold hover:bg-pink-500 dark:hover:bg-pink-600 hover:text-white transition duration-300">
//                     Ver detalles
//                   </button>
//                 </div>
//               </div>
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 transition-colors duration-300">{product.name}</h3>
//                 <p className="text-pink-500 dark:text-pink-400 font-bold transition-colors duration-300">${product.price.toFixed(2)}</p>
//               </div>
//             </div>