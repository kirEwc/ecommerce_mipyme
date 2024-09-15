'use client'
import React from 'react'
import CardCustom from '../Next_ui_elements/Card/Card'
import { products } from '@/data/products';


export const Home_Main_Content = () => {
    
  
  

  return (
    <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center">
        <h2 className="text-3xl font-bold text-pink-500 dark:text-purple-500 mb-8">Tendencias del momento</h2>
      </div>
        
          
          {/* Cuadrícula de productos */}
        <div className="grid grid-cols-1 mr-3 ml-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
              
              <CardCustom
                id={product.id}
                route={'tendencias'}
                name={product.name}
                brand={product.brand}
                src={product.image}
                price={product.price}
                className='w-full h-full dark:bg-gray-800'
              />
            
            </div>
          ))}
        </div>
      </main>
  )
}
