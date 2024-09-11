import { UserIcon } from "@/icons/Icons";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, } from "@nextui-org/react";

export default function DropdownCustom() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <button className="focus:outline-none focus:ring-0">
          <UserIcon className="h-6 w-6 text-gray-500 hover:text-pink-500 transition duration-300 cursor-pointer" />
        </button>
        
      </DropdownTrigger>
      <DropdownMenu aria-label="Example with disabled actions">
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-warning " >
          Log out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}