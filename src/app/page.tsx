
import Carousel from "@/components/Carousel/Carousel";
import { Home_Main_Content } from "@/components/main-content/Home_Main_Content";
import { Divider } from "@nextui-org/react";
import { images } from "../ImagePath";
import { PublicityLeft } from "@/components/Publicity/PublicityLeft";
import { PublicityRight } from "@/components/Publicity/PublicityRight";



export default function Home() {
  return (
    <>   
      <Divider />
      <div className="flex justify-between items-center gap-4 p-4">
        <PublicityLeft />
        <Carousel images={images} />
        <PublicityRight />
      </div>
      <Home_Main_Content />     
    </>
  );
}
