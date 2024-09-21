"use client"

import ButtonNext from '@/components/Next_ui_elements/button/ButtonNext';
import InputEmail from '@/components/Next_ui_elements/inputPassword/InputEmail'
import { User } from '@/icons/Icons';
import React, { useState } from 'react'

const RecoveryPassword = () => {
    
    const [valueForm, setValueForm] = useState({
        email: ''        
      });
const handleRecoveryPassword=(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
          <div className="border border-t-small border-solid w-80 h-60 rounded-2xl bg-gradient-to-b from-blue-400 to-blue-700 ">
            <div className="flex justify-center mb-4 mt-4">
              <User className="text-5xl text-white opacity-90" />
            </div>

            <form onSubmit={handleRecoveryPassword}>
              <div className="flex items-center justify-center flex-grow flex-col">
                <div className="mb-4">
                  <InputEmail
                    name="email"
                    onChange={handleInputChange}
                  />
                </div>
               
                <div className="mt-3">
                  <ButtonNext
                    text="Confirmar"
                    type="submit"
                  />
                </div>             

              </div>
            </form>
            

          </div>
        </div>
      </div>
    </>
  )
}

export default RecoveryPassword;