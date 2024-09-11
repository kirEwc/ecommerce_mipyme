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
  const pathname = usePathname();  // Obtener la ruta actual

  const excludedRoutes = ['/login', '/signup']; // Rutas donde no quieres mostrar Banner, Navbar y Footer

  return (
    <>
      {!excludedRoutes.includes(pathname) && <Banner />} 
      {!excludedRoutes.includes(pathname) && <Navbar_Main />} 
      {children} 
      {!excludedRoutes.includes(pathname) && <Footer />} 
    </>
  );
}
