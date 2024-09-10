import Carousel from "@/components/Carousel/Carousel";
import { Home_Main_Content } from "@/components/main-content/Home_Main_Content";
import { PublicityLeft } from "@/components/Publicity/PublicityLeft";
import { PublicityRight } from "@/components/Publicity/PublicityRight";
import { images } from "@/ImagePath";
import { Divider } from "@nextui-org/react";

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
  