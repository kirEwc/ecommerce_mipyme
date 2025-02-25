import { z } from 'zod';

// Definición del esquema de validación para añadir un producto
export const validationAddProduct = z.object({
    name: z.string().min(1, {
        message: "El nombre del producto no puede estar vacío"
    }),
    brand: z.string().min(1, {
        message: "La marca no puede estar vacía"
    }),
    description: z.string().trim().min(1, {
        message: "La descripción no puede estar vacía"
    }),
    characteristics: z.string().trim().min(1, {
        message: "Las características no pueden estar vacías"
    }),
    money: z.number().min(0.01, {
        message: "El precio debe ser mayor a 0"
    }),
    category: z.string().min(1, {
        message: "Debe seleccionar una categoría"
    }),
    profilePicture: z.instanceof(File).refine(file => file.type === 'image/jpeg', {
        message: "La imagen debe estar en formato JPG"
    }).refine(file => file.size > 0, {
        message: "Debe seleccionar una imagen"
    })
});


