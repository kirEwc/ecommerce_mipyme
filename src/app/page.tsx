import { Home_Main_Content } from "@/components/main-content/Home_Main_Content";
import { Banner } from "@/components/Publicity/Banner";
import { Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <>
    <Banner/>
    <Divider/>
    <Home_Main_Content/>
    </>
  );
}
