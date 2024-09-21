"use client"
import ButtonNext from '@/components/Next_ui_elements/button/ButtonNext';
import InputCode from '@/components/my-components/inputCode/inputCode';
import CustomLink from '@/components/my-components/link/Link';
import { User } from '@/icons/Icons';
import React, { useState } from 'react'

const VerifyCode = () => {

  const [code, setCode] = useState<number>(0);

  const handleCode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }



  return (
    <>
      <div className="h-screen w-screen bg-[url('/images/fondo/1.webp')] bg-cover bg-center bg-no-repeat">
        <div className="flex justify-center items-center h-full ">
          <div className="border border-t-small border-solid w-80 h-60 rounded-2xl bg-gradient-to-b from-blue-400 to-blue-700 ">
            <div className="flex justify-center mb-4 mt-4">
              <User className="text-5xl text-white opacity-90" />
            </div>

            <form onSubmit={handleCode}>
              <div className="flex items-center justify-center flex-grow flex-col">
                <div className="mb-4">
                  <InputCode
                    value={code}
                    onChange={setCode}
                    className="text-black"
                    placeholder="Ingresa un número"
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

            <div className="flex justify-between mt-4 mx-2">
              <CustomLink
                href="/"
                text="Cancelar"
                className="text-white"
              />
              <CustomLink
                href="/login"
                text="Login"
                className="text-white"
              />
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default VerifyCode;