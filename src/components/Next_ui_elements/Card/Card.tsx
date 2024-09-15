import React from "react";
import {Card, CardHeader, CardBody, Image, CardFooter} from "@nextui-org/react";
import { ShoppingCarIcon } from "@/icons/Icons";
import StarComponent from "@/components/Ratings/StarComponent";
import { useRouter } from "next/navigation";



interface CardProps {
  id?: string;    // quiero con esto ver como manejo la ruta dinamica
  route?: string;
  name: string;
  src: string;
  price: number;
  className?: string;
  brand?: string;

}
const CardCustom:React.FC<CardProps> = ({ id,route="tendencias", name, src, price,className,brand  }) => {

  const router = useRouter();

  const handleClick = (id: string,route: string) => {
    router.push(`/${route}/${id}`);
  };


  return (
    <Card className={`bg-slate-200 py-4 ${className}`} >
      <button
      className="focus:outline-none focus:ring-0 h-full w-full"
      onClick={() => handleClick(id,route)}
      >

      
      <CardHeader className=" pb-0 pt-2 px-4 flex-col items-start">
        <Image
          alt={ name }
          className="object-cover rounded-xl"
          src={ src }
          width={ 300 }
          height={ 200 }
        />
      </CardHeader>
        
      <CardBody className="overflow-visible item-start py-2">
        {/* categoria */}
        <small className="text-default-500">{ brand } </small>
        <h4 className="font-bold text-large">{ name }</h4>
        <div>
        <StarComponent Nstar={4}/>
        </div>

        
      </CardBody>
      </button>
      <CardFooter className="pt-0 pb-2 justify-between px-4">
        <p className="text-md uppercase  font-bold">{ `${ price }$` }</p>
        <button className=" text-black hover:text-cyan-600 dark:text-white dark:hover:text-cyan-600 rounded-full"><ShoppingCarIcon className="h-5 w-5"/></button>

      </CardFooter>
    </Card>
  );
}
export default CardCustom;



