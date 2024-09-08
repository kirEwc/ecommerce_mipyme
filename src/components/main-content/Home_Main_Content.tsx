import React from 'react'

export const Home_Main_Content = () => {

  const products = [
    { id: 1, name: "Vestido floral", price: 19.99, image: "/placeholder.svg?height=300&width=300" },
    { id: 2, name: "Blusa de encaje", price: 15.99, image: "/placeholder.svg?height=300&width=300" },
    { id: 3, name: "Jeans ajustados", price: 29.99, image: "/placeholder.svg?height=300&width=300" },
    { id: 4, name: "Chaqueta de cuero", price: 49.99, image: "/placeholder.svg?height=300&width=300" },
    { id: 5, name: "Falda plisada", price: 24.99, image: "/placeholder.svg?height=300&width=300" },
    { id: 6, name: "Camiseta gráfica", price: 12.99, image: "/placeholder.svg?height=300&width=300" },
    { id: 7, name: "Sudadera con capucha", price: 34.99, image: "/placeholder.svg?height=300&width=300" },
    { id: 8, name: "Pantalones cargo", price: 39.99, image: "/placeholder.svg?height=300&width=300" },
  ]
  return (
    <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8 transition-colors duration-300">Tendencias del momento</h2>
        {/* Cuadrícula de productos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group transition-colors duration-300">
              <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover object-center" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white  text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full font-semibold hover:bg-pink-500 dark:hover:bg-pink-600 hover:text-white transition duration-300">
                    Ver detalles
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 transition-colors duration-300">{product.name}</h3>
                <p className="text-pink-500 dark:text-pink-400 font-bold transition-colors duration-300">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
  )
}
