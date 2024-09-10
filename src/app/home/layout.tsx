import { Banner } from "@/components/Publicity/Banner";
import { Providers } from "../providers";
import Navbar_Main from "@/components/ui/Navbar/Navbar_Main";
import { Footer } from "@/components/ui/Footer";




export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body
        >
          <Banner/>
  
          <Providers>
          <Navbar_Main />
          {children}
          </Providers>
            
          <Footer/>
        </body>
      </html>
    );
  }