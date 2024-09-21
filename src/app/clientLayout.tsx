"use client"; // Solo este componente es de cliente

import { usePathname } from 'next/navigation';
import { Banner } from "@/components/Publicity/Banner";
import Navbar_Main from "@/components/ui/Navbar/Navbar_Main";
import { Footer } from "@/components/ui/Footer";

export default function ClientOnlyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();  

  const excludedRoutes = ['/authComponents/login', '/authComponents/register', '/authComponents/recoveryPassword','/authComponents/verifyCode','/authComponents/confirmPassword']; 

  return (
    <>
      {!excludedRoutes.includes(pathname) && <Banner />} 
      {!excludedRoutes.includes(pathname) && <Navbar_Main />} 
      {children} 
      {!excludedRoutes.includes(pathname) && <Footer />} 
    </>
  );
}
