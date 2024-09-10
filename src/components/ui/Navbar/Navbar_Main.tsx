"use client";



import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  
} from "@nextui-org/react";
import Sidebar from "./Sidebar";
import { Content_Navbar_end } from "./Content_Navbar_end";
import { ShoppingCarIcon } from "@/icons/Icons";

export default function Navbar_Main() {
  return (
    <Navbar shouldHideOnScroll className="bg-white shadow-md sticky">
      <NavbarBrand>
        <div className="flex items-center gap-1">
          <ShoppingCarIcon className="text-pink-500" />
        {/* logo de la empresa justo en esta linea  */}
        <p className="hidden sm:flex text-2xl  font-bold text-pink-500">Tropical Market</p>
        </div>
      <Sidebar/>
      </NavbarBrand>
      
     {/* contenido 2 */}
      <NavbarContent className="hidden md:flex gap-4" justify="center">
      <NavbarItem className="text-gray-600 hover:text-pink-500 transition duration-300">
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem className="text-gray-600 hover:text-pink-500 transition duration-300">
          <Link color="foreground" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem className="text-gray-600 hover:text-pink-500 transition duration-300">
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* contenido 3 */}
      <Content_Navbar_end/>
      
    </Navbar>
  );
}