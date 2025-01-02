import { z } from 'zod';

export const validationVerifyCode = z.object({
  code: z
    .string()
    .length(5, 'El código incorrecto revise su correo')
    
});
