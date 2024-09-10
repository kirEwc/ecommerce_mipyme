import React from 'react'
import CardCustom from '../Next_ui_elements/Card'

export const Home_Main_Content = () => {

  const products = [
    { id: 1, name: "Vestido floral", price: 19.99, image: "/images/product/website-development.webp" },
    { id: 2, name: "Blusa de encaje", price: 15.99, image: "/images/product/2151072199.webp" },
    { id: 3, name: "Jeans ajustados", price: 29.99, image: "/images/product/2151074251.webp" },
    { id: 4, name: "Chaqueta de cuero", price: 49.99, image: "/images/product/website-development.webp" },
    { id: 5, name: "Falda plisada", price: 24.99, image: "/images/product/2151072199.webp" },
    { id: 6, name: "Camiseta gráfica", price: 12.99, image: "/images/product/2151074251.webp" },
    { id: 7, name: "Sudadera con capucha", price: 34.99, image: "/images/product/website-development.webp" },
    { id: 8, name: "Pantalones cargo", price: 39.99, image: "/images/product/2151074251.webp" },
  ]
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
                name={product.name}
                src={product.image}
                price={product.price}
                className=''
              />
            </div>
          ))}
        </div>
      </main>
  )
}
