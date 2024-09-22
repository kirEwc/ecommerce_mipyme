"use client";

import { useState } from "react";
import { Google, User } from "@/icons/Icons";
import { validateEmail } from "@/auth/validateEmail";
import { validatePassword } from "@/auth/validatePassword";
import CorrectMessage from "@/messages/CorrectMessage";
import errorMessage from "@/messages/errorMessage";
import ButtonNext from "@/components/Next_ui_elements/button/ButtonNext";
import InputPassword from "@/components/Next_ui_elements/inputPassword/InputPassword";
import InputEmail from "@/components/Next_ui_elements/inputEmail/InputEmail";
import { signIn } from "next-auth/react";
import CustomLink from "@/components/my-components/link/Link";









const Login: React.FC = () => {

  const [valueForm, setValueForm] = useState({
    email: '',
    password: '',
  });


  const { email, password } = valueForm;


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValueForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));

  };

  const handleGoogleLogin = async () => {
    await signIn('google');
  };



  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    if (!validateEmail(email)) {
      errorMessage('email inválido!');
      return;
    }

    if (!validatePassword(password)) {
      errorMessage('contraseña inválida!');
      return;
    }

    CorrectMessage('Login correcto!');
    console.log(email + password)

  };




  return (
    <>
      <div className="h-screen w-screen bg-[url('/images/fondo/1.webp')] bg-cover bg-center bg-no-repeat">
        <div className="flex justify-center items-center h-full ">
          <div className="border border-t-small border-solid w-80 h-80 rounded-2xl bg-gradient-to-b from-blue-400 to-blue-700 ">
            <div className="flex justify-center mb-4 mt-4">
              <User className="text-5xl text-white opacity-90" />
            </div>

            <form onSubmit={handleLogin}>
              <div className="flex items-center justify-center flex-grow flex-col">
                <div className="mb-4">
                  <InputEmail
                    name="email"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="w-2/3">
                  <InputPassword
                    name="password"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mt-3">
                  <ButtonNext
                    text="Iniciar sección"
                    type="submit"
                  />
                </div>

                <div className="mt-3">
                  <ButtonNext
                    icon={<Google className="h-6 w-6" />}
                    text="Iniciar con Google"
                    onClick={handleGoogleLogin}

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
    </>
  );
};

export default Login;
