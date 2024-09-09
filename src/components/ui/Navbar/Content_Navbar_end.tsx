import React from 'react'
import DropdownCustom from "../../Next_ui_elements/Dropdown";
import {
    NavbarContent,
    NavbarItem,
    Switch,
  } from "@nextui-org/react";
import {
    HeartIcon,
    MoonIcon,
    SearchIcon,
    ShoppingCarIcon,
    SunIcon,
  } from "@/icons/Icons";

export const Content_Navbar_end = () => {
  return (
    <NavbarContent className="hidden sm:flex" justify="end">
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
  )
}
