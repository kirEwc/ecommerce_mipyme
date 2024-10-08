"use client";

import {
  HeartIcon,
  SearchIcon,
  ShoppingCarIcon,
} from "@/icons/Icons";

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  
} from "@nextui-org/react";
import Sidebar from "./Sidebar";
import DropdownCustom from "@/components/Next_ui_elements/Dropdown/Dropdown";
import { Switcher } from "./Switcher";
import { useRouter } from "next/navigation";

export default function Navbar_Main() {

const router = useRouter();

  return (
    <Navbar shouldHideOnScroll className="bg-white dark:bg-gray-800 shadow-md sticky">
      <NavbarBrand>
        <div className="flex items-center gap-1">
          <ShoppingCarIcon className="text-cyan-300" />
        {/* logo de la empresa justo en esta linea  */}
        <button onClick={() => router.push("/") }>
          <span className="hidden sm:flex text-2xl  font-bold bg-gradient-to-r  from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent transition-transform duration-300 ease-in-out group-hover:translate-x-1">
            {`Tropical Market`}
          </span>
          </button>
        </div>
      <Sidebar/>
      </NavbarBrand>
      
     {/* contenido 2 */}
      <NavbarContent className="hidden md:flex gap-4" justify="center">
      <NavbarItem className="text-gray-600  hover:text-cyan-500 dark:text-gray-200 dark:hover:text-cyan-500 transition duration-300">
          <Link color="foreground" href="#">
          Tecnología
          </Link>
        </NavbarItem>
        <NavbarItem className="text-gray-600 hover:text-cyan-500 dark:text-gray-200 dark:hover:text-cyan-500 transition duration-300">
          <Link color="foreground" href="#">
          Electrodomésticos
          </Link>
        </NavbarItem>
        <NavbarItem className="text-gray-600 hover:text-cyan-500 dark:text-gray-200 dark:hover:text-cyan-500 transition duration-300">
          <Link color="foreground" href="#">
           Comida y bebidas
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* contenido 3 */}
      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem>
          <SearchIcon className="h-6 w-6 text-gray-500 hover:text-cyan-500 dark:text-gray-200 dark:hover:text-cyan-500 transition duration-300 cursor-pointer" />
        </NavbarItem>

        <NavbarItem>
          <HeartIcon className="h-6 w-6 text-gray-500 hover:text-cyan-500 dark:text-gray-200 dark:hover:text-cyan-500 transition duration-300 cursor-pointer" />
        </NavbarItem>

        <NavbarItem>
        <button onClick={() => router.push("/cart") }>

          <ShoppingCarIcon className="h-6 w-6 text-gray-500 hover:text-cyan-500 dark:text-gray-200 dark:hover:text-cyan-500 transition duration-300 cursor-pointer" />
        
        </button>
        </NavbarItem>

        <NavbarItem>
         <Switcher/>
        </NavbarItem>

        <NavbarItem>
          <DropdownCustom />
        </NavbarItem>

      </NavbarContent>
      
    </Navbar>
  );
}