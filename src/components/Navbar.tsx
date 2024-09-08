import { HeartIcon, MenuIcon, SearchIcon, ShoppingBagIcon, UserIcon } from '@/icons/Icons'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <MenuIcon className="h-6 w-6 text-gray-500 mr-4 md:hidden" />
              <span className="text-2xl font-bold text-pink-500">Tropical Market</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-pink-500 transition duration-300">Mujer</a>
              <a href="#" className="text-gray-600 hover:text-pink-500 transition duration-300">Hombre</a>
              <a href="#" className="text-gray-600 hover:text-pink-500 transition duration-300">Niños</a>
              <a href="#" className="text-gray-600 hover:text-pink-500 transition duration-300">Belleza</a>
            </div>
            <div className="flex items-center space-x-4">
              <SearchIcon className="h-6 w-6 text-gray-500 hover:text-pink-500 transition duration-300 cursor-pointer" />
              <UserIcon className="h-6 w-6 text-gray-500 hover:text-pink-500 transition duration-300 cursor-pointer" />
              <HeartIcon className="h-6 w-6 text-gray-500 hover:text-pink-500 transition duration-300 cursor-pointer" />
              <ShoppingBagIcon className="h-6 w-6 text-gray-500 hover:text-pink-500 transition duration-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>
  )
}
