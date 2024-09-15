import React from 'react';

const Cart = () => {
  // Datos de ejemplo de los productos en el carrito
  const cartItems = [
    { id: 1, name: 'Producto 1', quantity: 2, price: 20 },
    { id: 2, name: 'Producto 2', quantity: 1, price: 50 },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-2xl w-full h-full mx-auto mt-10">
      <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-2xl w-full max-w-lg mx-auto mt-10">
        <h2 className="text-3xl font-extrabold mb-6 text-gray-900 dark:text-white">
          Carrito de Compras
        </h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-600 dark:text-white">Tu carrito está vacío.</p>
        ) : (
          <div>
            <ul className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between py-4">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {item.name}
                    </p>
                    <p className="text-gray-600 dark:text-white">
                      Cantidad: {item.quantity}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-gray-200 pt-4">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                Total: ${total}
              </p>
            </div>
            <button
              className="w-full mt-6 py-3 px-4 bg-green-500 text-white rounded-lg shadow-lg transition-colors hover:bg-green-600"
            >
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
