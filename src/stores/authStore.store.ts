import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { decryptData, encryptData } from '@/security/encryptData';

interface AuthState {
  user: { email: string, role: string } | null;
  isAuthenticated: boolean;
  login: (user: { email: string, role: string }) => void;
  logout: () => void;
  checkSession: () => void; 
}

const SESSION_TIMEOUT = 24 * 60 * 60 * 1000; // 24 horas en milisegundos



export const useAuthStore = create<AuthState>()(
  persist(
    (set,get) => ({
      user: null,
      isAuthenticated: false,

      login: ({ email, role }) => {
        const currentTime = Date.now();
        const expirationTime = currentTime + SESSION_TIMEOUT;

        set({
          user: { email, role },
          isAuthenticated: true,
        }); 
        localStorage.setItem('sessionExpiration', expirationTime.toString());
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
        localStorage.clear(); // Limpiar todo el almacenamiento local
      },

      checkSession: () => {
        const storedExpiration = localStorage.getItem('sessionExpiration');
        if (storedExpiration) {
          const expirationTime = parseInt(storedExpiration, 10);
          if (Date.now() > expirationTime) {
            console.log('La sesión ha expirado');
          
           get().logout();
          }
        }
      },


    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => ({
        getItem: (name) => {
          const storedValue = localStorage.getItem(name);
          if (storedValue) {
            try {
              return decryptData(storedValue);
            } catch (error) {
              console.error('Error al descifrar los datos:', error);
              return null;
            }
          }
          return null;
        },
        setItem: (name, value) => {
          const encryptedValue = encryptData(value);
          localStorage.setItem(name, encryptedValue);
        },
        removeItem: (name) => localStorage.removeItem(name),
      })),
    }
  )
);
