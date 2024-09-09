import { Facebook, Github, Instagram, Twitter, WhatsApp } from "@/icons/Icons";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-1 transition-colors duration-300 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="flex flex-col items-center sm:flex-row sm:justify-between mt-4">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl mb-5">Tropical Market</h2>
              <p className="text-lg">Todo lo que necesitas en un solo lugar</p>
            </div>

            <div className="flex flex-col items-center space-y-4 mt-4 sm:mt-0">
              <h2 className="mb-4 text-xl text-center sm:text-left">
                ENCUÉNTRANOS EN...
              </h2>

              <div className="flex space-x-6">
                <div>
                  <Facebook className="w-6 h-6" />
                </div>
                <div>
                  <Twitter className="w-6 h-6" />
                </div>
                <div>
                  <WhatsApp className="w-6 h-6" />
                </div>
                <div>
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <Github className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 mb-4 pt-8 border-t border-gray-700 dark:border-gray-600 text-center">
          <p>© 2024 Tropical Market. Casi todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
