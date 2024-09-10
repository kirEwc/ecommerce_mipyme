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
          width={300}
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
