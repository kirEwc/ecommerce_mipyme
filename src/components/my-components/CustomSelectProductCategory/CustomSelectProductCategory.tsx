'use client';

import { useState } from 'react';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { EpSelect, MiSelect } from '@/icons/Icons';

// Define el tipo para los datos de categorías de productos
type ProductCategory = {
  key: string;
  label: string;
  icon: React.ComponentType;
};

type CustomListboxProps = {
  categories: ProductCategory[];
  selectedLabel?: string;
  onSelect?: (category: ProductCategory) => void;
};

export default function CustomSelectProductCategory({ categories, selectedLabel, onSelect }: CustomListboxProps) {
  const initialSelected = categories.find(category => category.label === selectedLabel) || null;
  const [selected, setSelected] = useState<ProductCategory | null>(initialSelected);

  const handleSelect = (category: ProductCategory) => {
    setSelected(category);
    if (onSelect) {
      onSelect(category);
    }
  };

  return (
    <Listbox value={selected} onChange={handleSelect}>
      <div className="relative mt-2">
        <ListboxButton className="relative w-full h-11 rounded-lg border-2 border-blue-500 bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6">
          <div className="flex items-center">
            <div className="w-5 h-5 mr-2">
              {selected?.icon && <selected.icon />}
            </div>
            <span>{selected?.label ? selected.label : "Seleccionar categoría"}</span>
          </div>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <MiSelect/>
          </span>
        </ListboxButton>

        <ListboxOptions
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          {categories.map((category) => (
            <ListboxOption
              key={category.key}
              value={category}
              className="group relative select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
            >
              <div className="flex items-center">
                <div className="w-5 h-5 mr-2">
                  {category.icon && <category.icon />}
                </div>
                <span className="block font-normal group-data-[selected]:font-semibold">
                  {category.label}
                </span>
              </div>
              {selected?.key === category.key && (
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                  <EpSelect aria-hidden="true" />
                </span>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
