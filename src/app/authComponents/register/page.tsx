"use client";

import InputEmail from '@/components/Next_ui_elements/inputPassword/InputEmail';
import React, { useState } from 'react'

import { User } from '@/icons/Icons';
import InputPassword from '@/components/Next_ui_elements/inputPassword/InputPassword';
import ButtonNext from '@/components/Next_ui_elements/button/ButtonNext';
import CustomLink from '@/components/Next_ui_elements/link/Link';

const Register: React.FC = () => {

  const [valueForm, setValueForm] = useState({
    email: '',
    password: '',
  });


  const { email, password } = valueForm;

  const handleRegister = () => {
  
  }
  


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValueForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));

  };

  return (
    <>
       <div className="h-screen w-screen bg-[url('/images/fondo/1.webp')] bg-cover bg-center bg-no-repeat">
        <div className="flex justify-center items-center h-full ">
          <div className="border border-t-small border-solid w-80 h-80 rounded-2xl bg-gradient-to-b from-blue-400 to-blue-700 ">
            <div className="flex justify-center mb-4 mt-4">
              <User className="text-5xl text-white opacity-90" />
            </div>

            <form onSubmit={handleRegister}>
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

                <div className="w-2/3 mt-4">
                  <InputPassword
                     placeholder="verifica contraseña"
                    name="password"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mt-3">
                  <ButtonNext
                    text="Registrarce"
                    type="submit"
                  />
                </div>             

              </div>
            </form>

            <div className="flex justify-between mt-2 mx-2">
              <CustomLink
                href="/code"
                text="Cancelar"
                className="text-white"
              />
              <CustomLink
                href="/code"
                text="Login"
                className="text-white"
              />
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
