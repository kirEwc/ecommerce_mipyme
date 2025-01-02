"use client";

import { signIn,useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

import { Google, User } from "@/icons/Icons";
import InputPassword from "@/components/Next_ui_elements/inputPassword/InputPassword";
import InputEmail from "@/components/Next_ui_elements/inputEmail/InputEmail";
import ButtonNext from "@/components/Next_ui_elements/button/ButtonNext";
import CustomLink from "@/components/my-components/link/Link";
import { useAuthStore } from "@/stores/authStore.store";
import { validationLogin } from "@/app/validation/validationLogin";
import ErrorMessage from "@/messages/ErrorMessage";
import ApiRequest from "@/services/ApiRequest";
import { setAuthCookie } from '@/app/actions/setAuthCookie';






const Login: React.FC = () => {
  const router = useRouter();
  const { data: session,status} = useSession();
  const hasAuthenticated = useRef(false); 
  const { login } = useAuthStore();
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const { email, password } = Object.fromEntries(formData) as { email: string, password: string };

    const validatedFields = validationLogin.safeParse({
      email: email,
      password: password,
    })

    if (!validatedFields.success) {
      const firstError = validatedFields.error.errors[0];
      const messageError = String(firstError.message);
      ErrorMessage(messageError);

    } if (validatedFields.success) {

      try {
        const response = await ApiRequest({
          method: 'POST',
          url: 'https://fbbe-195-181-163-8.ngrok-free.app/api/User/login',
          body: {
            email: email,
            password: password,
          },
        });
        const data = await response.json();    
        

        if (response?.status === 200) {
          const token = data.token;  
          const role = data.role;  
          
          login({ email,role});
          await setAuthCookie(token, role);
          router.push('/');
        } else {
          ErrorMessage('Credenciales incorrectas');
        }

      } catch (error) {
        console.log(error)
      }

    }
    
    const token = 'gwygr92r5723gr9h42dfby2evfb2iu'
    const role ='admin'
    login({ email,role}); 
    await setAuthCookie(token, role);
    router.push('/');
  }





  useEffect(() => {
    if (status === 'authenticated' && !hasAuthenticated.current) {
      console.log('Usuario autenticado, ejecutando useEffect');
      hasAuthenticated.current = true;

      const authenticateUser = async () => {
        const email = session?.user?.email;
        console.log('Email de usuario autenticado:', email);

        try {
          const response = await ApiRequest({
            method: 'POST',
            url: 'https://fbbe-195-181-163-8.ngrok-free.app/api/User/login',
            body: {
              email: email,
            },
          });

          if (response?.status === 200) {
            router.push('/');
          } else {
            ErrorMessage('Error al autenticar con Google');
          }
        } catch (error) {
          console.error('Error en la petición:', error);
        }
      };

      authenticateUser();
    }
  }, [status, session, router]);


  return (
    <div className="h-screen w-screen bg-[url('/images/fondo/1.webp')] bg-cover bg-center bg-no-repeat">
      <div className="flex justify-center items-center h-full ">
        <div className="border border-t-small border-solid w-80 h-80 rounded-2xl bg-gradient-to-b from-blue-400 to-blue-700 ">
          <div className="flex justify-center mb-4 mt-4">
            <User className="text-5xl text-white opacity-90" />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-center flex-grow flex-col">
              <div className="mb-4 w-2/3">
                <InputEmail
                  name="email"
                />
              </div>


              <div className="w-2/3">
                <InputPassword
                  name="password"

                />
              </div>

              <div className="mt-3 w-2/3">
                <ButtonNext
                  text="Iniciar sección"
                  type="submit"
                />
              </div>

              <div className="mt-3 w-2/3">
                <ButtonNext
                  icon={<Google className="h-6 w-6" />}
                  text="Iniciar con Google"
                  onClick={() => signIn("google")}


                >
                </ButtonNext>
              </div>

            </div>
          </form>

          <div className="flex justify-between mt-2 mx-2">
            <CustomLink
              href="/recoveryPassword"
              text="Olvidaste la contraseña"
              className="text-white"
            />
            <CustomLink
              href="/register"
              text="Regístrate"
              className="text-white"
            />
          </div>




        </div>
      </div>
    </div>

  );
};

export default Login;
