"use client";
import { useState } from "react";
import { User } from "@/icons/Icons";
import { validateEmail } from "@/auth/validateEmail";
import { validatePassword } from "@/auth/validatePassword";
import CorrectMessage from "@/messages/CorrectMessage";
import errorMessage from "@/messages/errorMessage";
import ButtonNext from "@/components/Next_ui_elements/button/ButtonNext";
import InputPassword from "@/components/Next_ui_elements/inputPassword/InputPassword";
import InputEmail from "@/components/Next_ui_elements/inputPassword/InputEmail";
import { signIn } from "next-auth/react";







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
      <div className="h-screen w-screen">
        <div className="flex justify-center items-center h-full ">
          <div className="border border-t-small border-solid w-80 h-80 rounded-2xl bg-gradient-to-br from-pink-400  to-purple-700 ">
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

                <div className="mt-4">
                  <ButtonNext
                    text="Iniciar sección"
                    type="submit"
                  />
                </div>



              </div>
            </form>

            <div className="mt-4">
              <button
                onClick={() => signIn("google")}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Iniciar sesión con Google
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
