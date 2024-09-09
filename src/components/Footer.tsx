import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-pink-400 dark:text-pink-500">Servicio al cliente</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-pink-400 dark:hover:text-pink-500 transition duration-300">Centro de ayuda</a></li>
                <li><a href="#" className="hover:text-pink-400 dark:hover:text-pink-500 transition duration-300">Devoluciones</a></li>
                <li><a href="#" className="hover:text-pink-400 dark:hover:text-pink-500 transition duration-300">Seguimiento de pedidos</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-pink-400 dark:text-pink-500">Acerca de nosotros</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-pink-400 dark:hover:text-pink-500 transition duration-300">Sobre Tropical Market</a></li>
                <li><a href="#" className="hover:text-pink-400 dark:hover:text-pink-500 transition duration-300">Responsabilidad social</a></li>
                <li><a href="#" className="hover:text-pink-400 dark:hover:text-pink-500 transition duration-300">Afiliados</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-pink-400 dark:text-pink-500">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-pink-400 dark:hover:text-pink-500 transition duration-300">Términos y condiciones</a></li>
                <li><a href="#" className="hover:text-pink-400 dark:hover:text-pink-500 transition duration-300">Política de privacidad</a></li>
                <li><a href="#" className="hover:text-pink-400 dark:hover:text-pink-500 transition duration-300">Política de cookies</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-pink-400 dark:text-pink-500">Síguenos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-pink-400 dark:hover:text-pink-500 transition duration-300">Facebook</a></li>
                <li><a href="#" className="hover:text-pink-400 dark:hover:text-pink-500 transition duration-300">Instagram</a></li>
                <li><a href="#" className="hover:text-pink-400 dark:hover:text-pink-500 transition duration-300">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 dark:border-gray-600 text-center">
            <p>© 2024 Tropical Market.Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
  )
}
