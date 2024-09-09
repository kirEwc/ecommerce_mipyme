"use client";

import DropdownCustom from "./Next_ui_elements/Dropdown";

import {
  HeartIcon,
  MoonIcon,
  SearchIcon,
  ShoppingCarIcon,
  SunIcon,
} from "@/icons/Icons";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Switch,
} from "@nextui-org/react";

export default function Navbar_Main() {
  return (
    <Navbar shouldHideOnScroll className="bg-white shadow-md sticky">
      <NavbarBrand>
        <p className="text-2xl font-bold text-pink-500">Tropical Market</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
      <NavbarContent justify="end">
        <NavbarItem>
          <SearchIcon className="h-6 w-6 text-gray-500 hover:text-pink-500 transition duration-300 cursor-pointer" />
        </NavbarItem>

        <NavbarItem>
          <HeartIcon className="h-6 w-6 text-gray-500 hover:text-pink-500 transition duration-300 cursor-pointer" />
        </NavbarItem>

        <NavbarItem>
          <ShoppingCarIcon className="h-6 w-6 text-gray-500 hover:text-pink-500 transition duration-300 cursor-pointer" />
        </NavbarItem>

        <NavbarItem>
          <Switch
            defaultSelected
            size="lg"
            color="secondary"
            thumbIcon={({ isSelected=false, className }) =>
              isSelected ? (
                <MoonIcon className={className} />
              ) : (
                <SunIcon className={className} />
              )
            }
          ></Switch>
        </NavbarItem>

        <NavbarItem>
          <DropdownCustom />
        </NavbarItem>

      </NavbarContent>
    </Navbar>
  );
}
